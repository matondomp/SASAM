
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
  Input,
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


import { Column } from '../../prividers/table/columns/prioridade'
import { useEffect } from 'react';
import { UseSearchContext } from '../../hooks/search/index'
import { useCallback } from 'react';
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';


export const Priority: FC = () => {

  const [form,setForm]=useState({
    description:'',
    slug:'',
    user_id:'',
    estado_id:''
  })

  const [name, setName] = useState('')
  const [isEdit,seIsEdit]=useState(false)
  const [priorities,setpriorities]=useState<any[]>([])
  const [id, setId] = useState('')
  const [estado, setEstado] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const toast = useToast()
  const { inputSearchValue } = UseSearchContext()

function henderInputChanges(event: ChangeEvent<HTMLInputElement> ) {
        const {name,value}=event.target
        setForm({
          ...form,[name]:value
        })
    }

  useEffect(() => {
    getPrioridade()
    getEstado()
  }, [inputSearchValue,name])

  const [forms] = Form.useForm();

  function initForm(item: any) {
        setForm({
          description:'',
          slug:'',
          user_id:'',
          estado_id:''
        })

        setId(priorities[item.key].id)

        forms.setFieldsValue({
          description:priorities[item.key].description,
          slug:priorities[item.key].slug,
          user_id:priorities[item.key].user_id,
          estado_id:priorities[item.key].estado_id,
        });

        setForm(
          {
            description:priorities[item.key].description,
            slug:priorities[item.key].slug,
            user_id:priorities[item.key].user_id,
            estado_id:priorities[item.key].estado_id,
          }
        )

       console.log(priorities[item.key])
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

  const getPrioridade = useCallback(async () => {
    setpriorities([])
   
    const response = await api.post("/prioridade/list", { filter: inputSearchValue })
    const { data } = response

    setpriorities(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            description: item?.description,
            estado_id:item?.estado_id?'Activo':'Inactivo',
            user_id:item.user_id,
            slug: item?.slug,
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
      await api.put("/prioridade/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "prioridade criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getPrioridade()
    } catch (error) {
      toast({
        title: 'Erro ao Atualizado prioridade',
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
      await api.post("/prioridade", data)

      toast({
        title: 'criado com sucesso!',
        description: "prioridade criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getPrioridade()
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
        <h1>LISTA DE PRIORIDADE</h1>
        <div>
          <Button onClick={() => {setVisible(true);seIsEdit(false)}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>

      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={priorities}
        loading={loading}
        //  scroll={{ x: 1500, y: 300 }}
      />

      <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <AdvancedSearchForm hendleSubmit={handleSubmit}  form={forms} >
          <Row gutter={24}>

            <Col>
              <Form.Item
                style={{width:'250px'}}
                name="description"
                label="Descrição"
                rules={[
                  {
                    required: true,
                    message: 'digite o Descrição!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}  
                onChange={henderInputChanges}  />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
               style={{width:'250px'}}
                name="slug"
                label="Slug"
                rules={[
                  {
                    required: true,
                    message: 'digite o Slug!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}    />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                style={{width:'250px'}}
                name="user_id"
                label="Operador"
                rules={[
                  {
                    required: true,
                    message: 'digite o Operador!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}    />
              </Form.Item>
            </Col>

            <Col>
                <Form.Item
                   style={{width:'250px'}}
                  name="estado_id"
                  label="Estado"
                  rules={[{ required: true, message: 'digite nome da Estado!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }}  >
                    <Option value="null" >Selectione</Option>
                    <Option value="1" >Activo</Option>
                    <Option value="0" >Inactivo</Option>
                  </Select>
                </Form.Item>
              </Col>


          </Row>
        </AdvancedSearchForm>


      </Modal>


    </DashBord>
  )
}