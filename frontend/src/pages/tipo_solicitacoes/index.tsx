
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
  PlusOutlined,
  UploadOutlined
} from '@ant-design/icons';

//import Modal from 'react-modal';
import { useToast } from '@chakra-ui/react'

import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';


import { api } from '../../service/api'

import { DashBord } from '../dashbord'
import { AdvancedSearchForm } from '../../components/forms'


import { Column } from '../../prividers/table/columns/tipo-solicitacoes'
import { useEffect } from 'react';
import { UseSearchContext } from '../../hooks/search/index'
import { useCallback } from 'react';

import { Input } from './style'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';

const { Option } = Select;

export const TipoSolicitacao: FC = () => {

  const [form,setForm]=useState({
    name:'',
    estado_id:''
  })

  const [name, setName] = useState('')
  const [isEdit,seIsEdit]=useState(false)
  const [solicitacoes,setSolicitacoes]=useState<any[]>([])
  const [id, setId] = useState('')
  const [estado, setEstado] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const toast = useToast()
  const { inputSearchValue } = UseSearchContext()


  useEffect(() => {
    getSolicitacoes()
   // getEstado()
  }, [inputSearchValue,name])

  const [forms] = Form.useForm();

  function initForm(item: any) {
        setForm({
          name:'',
          estado_id:'',
        })

        setId(solicitacoes[item.key].id)

        forms.setFieldsValue({
            name:solicitacoes[item.key].name,
            estado_id:solicitacoes[item.key].estado,
        });

        setForm(
          {
            name:solicitacoes[item.key].name,
            estado_id:solicitacoes[item.key].estado,
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


  function handleMenuClick(e: any) {
  //  console.log(e)
    //message.info('Click on menu item.', e);
  }
  

  const getSolicitacoes = useCallback(async () => {
    setSolicitacoes([])
   
    const response = await api.post("/tipo-solicitacao/list", { filter: inputSearchValue })
    const { data } = response

    setSolicitacoes(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            name: item?.name,
            estado:item?.estado_id=='1'?'Activo':'Inactivo',
            estado_id:item?.estado_id,
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
      await api.put("/tipo-solicitacao/"+id, data)

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
      await api.post("/tipo-solicitacao", data)

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
        <h1>TIPOS DE SOLICITAÇÕES</h1>
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
        onOk={() =>{ handleSubmit(forms.getFieldsValue());setVisible(false)}}
        onCancel={() => setVisible(false)}
        okText="Regitrar"
        width={520}
      >
        <AdvancedSearchForm hendleSubmit={handleSubmit}  
           form={forms} >
          <Row gutter={24} style={{width:'100%'}}>

             <Col style={{width:'100%'}}>
             <Form.Item
                name="name"
                label="Nome"
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite a Nome!',
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
                  style={{width:'100%'}}
                  rules={[{ required: true, message: 'digite nome da Estado!' }]}
                >
                  <Select defaultValue="Selectione"  style={{width:'100%'}}  >
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