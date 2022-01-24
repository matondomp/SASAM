
import { FC, useState } from 'react'

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


import { Column } from '../../prividers/table/columns/district'
import { useEffect } from 'react';
import { UseSearchContext } from '../../hooks/search/index'
import { useCallback } from 'react';


export const Distrit: FC = () => {

 
  const [municipe,setMunicioe]=useState<any[]>([])
  const [distiro,setDistrito]=useState<any[]>([])
  const [estado, setEstado] = useState<any[]>([])
  const [provincia,setProvincia]=useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const [isEdit,seIsEdit]=useState(false)
  const [id, setId] = useState('')
  const [forms] = Form.useForm();
  const toast = useToast()
  const { inputSearchValue }=UseSearchContext()

  useEffect(()=>{
    getEstado()
  getMunicipio()
  getProvincia()
  console.log('in my input',inputSearchValue)
  console.log('2',distiro)
  getDistrito()
  },[])
 

 
  const menu = (id:string)=>{
      return(
        <Menu onClick={handleMenuClick}>
          <Menu.Item key={id}  onClick={(e)=>{setVisible(true);initForm(e)}}>Editar</Menu.Item>
        </Menu>
    );
}

  const column = Column(Dropdown, menu)

  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
  }

  const getDistrito=useCallback(async()=>{
    setDistrito([])
      const response=await api.post("/distrito/list",{filter:inputSearchValue})
      const { data }=response
      console.log(response)
    setDistrito(()=>(data.map((item:any,i:number)=>{
     return {
        key: i,
        id:item.id,
        name: item?.name,
        data: item?.estado_id?'Activo':'Inactivo',
        user: item?.user_id,
        provincia:item?.provincia?.name,
        municipio:item?.municipio?.name,
        provincia_id:item?.provincia?.id,
        municipio_id:item?.municipio?.id,
        estado: item?.estado_id?'Activo':'Inactivo',
        
      }
    })))
    console.log('1',distiro)
  },[])

    

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

  function initForm(item: any) {

    console.log('first',item,distiro,distiro[item.key])
    seIsEdit(true)

    setId(distiro[item.key].id)

    forms.setFieldsValue({
      name:distiro[item.key].name,
      estado_id:distiro[item.key].estado_id,
      provincia_id:distiro[item.key].provincia_id,
      municipio_id:distiro[item.key].municipio_id,
    });

   
}

  async function getMunicipio() {
    const response=await api.get("/municipio")
    const { data }=response
    console.log(response)
    setMunicioe(data)
  }

  async function getProvincia() {
    const response=await api.get("/provincia")
    const { data }=response
    console.log(response)
    setProvincia(data)
  }
  async function handleUpdate(data:any) {
    console.log(id)
    try {
      await api.put("/distrito/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "distrito criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getDistrito()
    } catch (error) {
      toast({
        title: 'Erro ao Atualizado distrito',
        description: "Erro ao criar distrito, tente novamente!",
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
    }
  }
  async function  handleSubmit(data: any) {
    if(isEdit){
      console.log('updated',data,id)
      handleUpdate(data)
       return
    }
    try {
        await api.post("/distrito",data)
        
        toast({
          title: 'criado com sucesso!',
          description: "Distrito criado com sucesso!",
          status: 'success',
          position:'top-right',
          duration: 4000,
          isClosable: true,
        })
      
        getDistrito()
    } catch (error) {
        toast({
          title: 'Erro ao criar distrito',
          description: "Erro ao criar distrito, tente novamente!",
          status: 'error',
          position:'top-right',
          duration: 4000,
          isClosable: true,
        })
    }
  }

  const { Option } = Select;


  return (
    <DashBord>
      <section style={{marginBottom:'50px'}}>
        <h1>LISTA DE DISTRITOS</h1>
        <div>
          <Button  onClick={() => {setVisible(true);seIsEdit(false)}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>
     
      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={distiro}
        scroll={{ x: 1500, y: 300 }}
        loading={loading}
      />

     <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
       >
            <AdvancedSearchForm hendleSubmit={handleSubmit} form={forms}>
            <Row gutter={24}>
            

              <Col>
                <Form.Item
                  name="name"
                  label="Nome"
                  rules={[
                    {
                      required: true,
                      message: 'digite o nome!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
           
              <Col>
                <Form.Item
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

              <Col >
                <Form.Item
                  name="municipio_id"
                  label="Município"
                  rules={[{ required: true, message: 'digite nome do Município!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }} >
                    <Option value="null"  >Selectione</Option>
                    {
                      municipe.map(municipio=>(
                        <Option value={municipio.id} key={municipio.id}  >{municipio?.name}</Option>

                       )
                      )
                    }

                  </Select>
                </Form.Item>
              </Col>


              <Col>
                <Form.Item
                  name="provincia_id"
                  label="Província"
                  rules={[{ required: true, message: 'digite nome da Província!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }} >
                    <Option value="null" >Selectione</Option>
                    {
                      provincia.map(provincia=>(
                        <Option value={provincia.id} key={provincia.id}  >{provincia?.name}</Option>

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