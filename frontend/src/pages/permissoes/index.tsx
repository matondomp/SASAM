
import { FC, useState,useRef } from 'react'

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
  Modal,

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


import { Column } from '../../prividers/table/columns/permissao'
import { useEffect } from 'react';
import { UseSearchContext } from '../../hooks/search/index'
import { useCallback } from 'react';
import { Item } from 'framer-motion/types/components/Reorder/Item';
import { FilterValue } from 'antd/lib/table/interface';
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';


export const Permission: FC = () => {


  const [name, setName] = useState('')
  const [isEdit,seIsEdit]=useState(false)
  const [id, setId] = useState('')
  const [permissoes, setPermissoes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const toast = useToast()
  const { inputSearchValue } = UseSearchContext()
  const [forms] = Form.useForm();

  let nameREF:any=useRef() 

  let chexkIfIsJustExist: any = {}

  useEffect(() => {
     console.log(inputSearchValue)
    getPermissoes()
  }, [inputSearchValue,name])

  function initForm(item: any) {

        console.log('first',item)
        seIsEdit(true)
 
        setId(permissoes[item.key].id)

        forms.setFieldsValue({
          nome:permissoes[item.key].name
        });
    
       
   console.log('name',name,id)
  }

  const menu = (id: string) => {
   
   return(
       <Menu onClick={handleMenuClick}>
          <Menu.Item key={id} onClick={(e) => { setVisible(true); initForm(e) }}>Editar</Menu.Item>
    
        </Menu>
      ) 
  };


  function handleMenuClick(e: any) {
  //  console.log(e)
    //message.info('Click on menu item.', e);
  }
  const handleTableChange = (filters: any) => {
    console.log(filters)
  }

  const getPermissoes = useCallback(async () => {
    setPermissoes([])

    const response = await api.get("/permissao")
    const { data } = response

    setPermissoes(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            description:item?.description,
            flag:item?.flag,
            name: item?.nome,
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
    console.log(id)
    try {
      await api.put("/permissao/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "permissoes criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getPermissoes()
    } catch (error) {
      toast({
        title: 'Erro ao Atualizado distrito',
        description: "Erro ao criar permissoes, tente novamente!",
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
      console.log('updated',data,id)
      handleUpdate(data)
       return
    }
    try {
      await api.post("/permissao", data)

      toast({
        title: 'criado com sucesso!',
        description: "permissoes criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getPermissoes()
    } catch (error) {
      toast({
        title: 'Erro ao criar distrito',
        description: "Erro ao criar permissoes, tente novamente!",
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
        <h1>LISTA DE PERMISSÕES</h1>
        <div>
          <Button onClick={() => {setVisible(true);seIsEdit(false)}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>

      <Table
        style={{ width: '90%' }}
        
        columns={column}
        dataSource={permissoes}
        loading={loading}
          scroll={{ x: 1500, y: 436 }}
          
      />

      <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() =>{ handleSubmit(forms.getFieldsValue());setVisible(false)}}
        onCancel={() => setVisible(false)}
        width={400}
      >
        <AdvancedSearchForm hendleSubmit={handleSubmit} form={forms}>
          <Row gutter={1}>


            <Col>
              <Form.Item
                name="nome"
                label="Nome"
                rules={[
                  {
                    required: true,
                    message: 'digite o nome!',
                  },
                ]}
              >
                <Input  style={{ width: 350 }} />
              </Form.Item>
            </Col>

            <Col>
            <Form.Item
                name="description"
                label="Descrição"
                rules={[
                  {
                    required: true,
                    message: 'digite o nome!',
                  },
                ]}
              >
                 <Input.TextArea style={{ width: 350 }} />
              </Form.Item>
            </Col>

            {/* <Col>
                <Form.Item
                  name="permissoes_id"
                  label="permissoes"
                  rules={[{ required: true, message: 'digite nome da permissoes!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }}  >
                    <Option value="null" >Selectione</Option>
                    <Option value="1" >Activo</Option>
                    <Option value="0" >Inactivo</Option>
                  </Select>
                </Form.Item>
              </Col> */}
          </Row>
        </AdvancedSearchForm>


      </Modal>


    </DashBord>
  )
}