
import { FC, useState,useRef, ChangeEvent } from 'react'

import {
  Button,
  Dropdown,
  Menu,
  message,
  Table,
  Form,
  Row,
  Col,
  //Input,
  Select,
  DatePicker,
  Modal
} from "antd";


import {
  DownloadOutlined,
  PlusOutlined
} from '@ant-design/icons';

//import Modal from 'react-modal';
import { useToast } from '@chakra-ui/react'

import { api } from '../../service/api'

import { DashBord } from '../dashbord'
import { AdvancedSearchForm } from '../../components/forms'


import { Column } from '../../prividers/table/columns/solicitacoes'
import { useEffect } from 'react';
import { UseSearchContext } from '../../hooks/search/index'
import { useCallback } from 'react';
import { Item } from 'framer-motion/types/components/Reorder/Item';
import { FilterValue } from 'antd/lib/table/interface';

import { Input } from './style'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';


export const Solicitacao: FC = () => {

  const [form,setForm]=useState({
    description:'',
    sla:'',
    estado_id:''
  })

  const [name, setName] = useState('')
  const [isEdit,seIsEdit]=useState(false)
  const [solicitacoes,setSolicitacoes]=useState<any[]>([])
  const [id, setId] = useState('')
  const [estado, setEstado] = useState<any[]>([])
  const [provincia, setProvincia] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const toast = useToast()
  const { inputSearchValue } = UseSearchContext()
  let formRef:any=useRef()
  let descriptionRef:any=useRef() 
  let slaRef:any=useRef() 
  let estadoRef:any=useRef() 

function henderInputChanges(event: ChangeEvent<HTMLInputElement> ) {
        const {name,value}=event.target
        setForm({
          ...form,[name]:value
        })
    }
    function henderSelectChanges(event:any) {
      const {name,value}=event.target
      /* setForm({
        ...form,[name]:value
      }) */
  }
  useEffect(() => {
    getSolicitacoes()
    getEstado()
  }, [inputSearchValue,name])

  const [forms] = Form.useForm();

  function initForm(item: any) {
        setForm({
          description:'',
          sla:'',
          estado_id:''
        })

        setId(solicitacoes[item.key].id)

        forms.setFieldsValue({
          description:solicitacoes[item.key].description,
          sla:solicitacoes[item.key].sla,
          estado_id:solicitacoes[item.key].estado_id,
        });

        setForm(
          {
            description:solicitacoes[item.key].description,
            sla:solicitacoes[item.key].sla,
            estado_id:solicitacoes[item.key].estado_id,
          }
        )

       console.log(solicitacoes[item.key])
       console.log(form)
  }

  const menu = (id: string) => {
   
   return(
       <Menu onClick={handleMenuClick}>
          <Menu.Item key={id} onClick={(e) => { setVisible(true); initForm(e);seIsEdit(true) }}>Editar</Menu.Item>
    
        </Menu>
      ) 
  };

  

  const getEstado = useCallback(async () => {
    setEstado([])
    console.log(inputSearchValue)
    const response = await api.post("/estado/list", { filter: inputSearchValue })
    const { data } = response

    setEstado(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            name: item?.name,
            data: item?.created_at,
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])

  function handleMenuClick(e: any) {
  //  console.log(e)
    //message.info('Click on menu item.', e);
  }
  const handleTableChange = (filters: any) => {
    console.log(filters)
  }

  const getSolicitacoes = useCallback(async () => {
    setSolicitacoes([])
   
    const response = await api.post("/solicitacao/list", { filter: inputSearchValue })
    const { data } = response

    setSolicitacoes(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            description: item?.description,
            estado_id:item?.estado_id,
            sla: item?.sla,
            data: hendleDateTimeZone(item?.created_at),
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])

  const column = Column(Dropdown, menu)

  async function handleUpdate(data:any) {
    console.log(data)
    try {
      await api.put("/solicitacao/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "Estado criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getSolicitacoes()
    } catch (error) {
      toast({
        title: 'Erro ao Atualizado distrito',
        description: "Erro ao criar Estado, tente novamente!",
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  async function handleSubmit(data: any) {
    console.log(data)
    if(isEdit){
      console.log('hendle form',forms)
      handleUpdate(data)
       return
    }
    try {
      await api.post("/solicitacao", data)

      toast({
        title: 'criado com sucesso!',
        description: "Estado criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getSolicitacoes()
    } catch (error) {
      toast({
        title: 'Erro ao criar distrito',
        description: "Erro ao criar Estado, tente novamente!",
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  const { Option } = Select;


  return (
    <DashBord>
      <section style={{marginBottom:'50px'}}>
        <h1>LISTA DE SOLICITAÇÕES</h1>
        <div>
          <Button onClick={() => {setVisible(true);seIsEdit(false)}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>

      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={solicitacoes}
        loading={loading}
        //  scroll={{ x: 1500, y: 300 }}
      />

      <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okText="Regitrar"
        width={400}
      >
        <AdvancedSearchForm hendleSubmit={handleSubmit}  form={forms} >
          <Row gutter={24} style={{width:'100%'}}>

            <Col>
              <Form.Item
                name="description"
                label="Nome"
                initialValue={form.description}
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite o nome!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}  
                onChange={henderInputChanges}  />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                name="sla"
                label="Sla"
                initialValue={form.sla}
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite o sla!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}    />
              </Form.Item>
            </Col>

            <Col style={{width:'100%'}}>
                <Form.Item
                  name="estado_id"
                  label="Estado"
                  rules={[{ required: true, message: 'digite nome da Estado!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }} value={form.estado_id} onChange={henderSelectChanges}  >
                    <Option value="null" >Selectione</Option>
                    {
                      estado.map(estado=>(
                        <Option value={estado.id} key={estado.id}  >{estado?.name}</Option>

                       )
                      )
                    }

                  </Select>
                </Form.Item>
              </Col>


          </Row>
        </AdvancedSearchForm>


      </Modal>


    </DashBord>
  )
}