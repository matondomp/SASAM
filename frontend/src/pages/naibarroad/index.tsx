

import { 
  FC, 
  useState,
  useCallback,
  useEffect
 } from 'react'

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


import { Column } from '../../prividers/table/columns/naibarroad'
import { UseSearchContext } from '../../hooks/search/index'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';





export const Naibarroad: FC = () => {

  const [bairro,setBairro]=useState<any[]>([])
  const [municipio,setMunicipio]=useState<any[]>([])
  const [provincia,setProvincia]=useState<any[]>([])
  const [estado, setEstado] = useState<any[]>([])
  const [visible, setVisible] = useState(false);
  const toast = useToast()
  const { inputSearchValue }=UseSearchContext()
  const [distiro,setDistrito]=useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isEdit,seIsEdit]=useState(false)
  const [id, setId] = useState('')

  useEffect(()=>{
    getEstado()
    getDistrito()
    getBairro()
    getProvincia()
    getMunicipio()
  console.log('in my input',inputSearchValue)

  },[inputSearchValue])
 

 
  const menu = (id: string) => {
    return(
      <Menu onClick={handleMenuClick}>
        <Menu.Item key={id}  onClick={(e)=>{setVisible(true);initForm(e)}}>Editar</Menu.Item>
      </Menu>
    )
  };

  const [forms] = Form.useForm();

  const column = Column(Dropdown, menu)

  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
  }

  const getBairro=useCallback(async()=>{
    const response=await api.get("/bairro")
    const { data }=response
    console.log(response)
    setBairro(()=>(data.map((item:any,i:number)=>{
      console.log('item',item)
      return {
         key: i,
         name:item.name,
         id:item.id,
         provincia:item.provincia.name,
         distrito:item.distrito.name,
         municipio:item.municipio.name,
         estado_id:item?.estado_id?'Activo':'Inactivo',
         provincia_id:item.provincia.id,
         municipio_id:item.municipio.id,
         distrito_id:item.distrito.id,
         created_at:hendleDateTimeZone(item?.created_at),
       }
     })))
  },[])

  async function getMunicipio() {
    const response=await api.get("/municipio")
    const { data }=response
    console.log(response)
    setMunicipio(data)
  }

  async function getProvincia() {
    const response=await api.get("/provincia")
    const { data }=response
    console.log(response)
    setProvincia(data)
  }

  async function handleUpdate(id:any,data:any) {
    console.log('id',id)
    try {
      await api.put("/bairro/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "Estado criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getBairro()
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

  function initForm(item: any) {
   console.log("editar",item)
    seIsEdit(true)
    console.log(bairro)
    setId(bairro[item.key].id)

    forms.setFieldsValue({
      name:bairro[item.key].name,
      estado_id:bairro[item.key].estado_id,
      provincia_id:bairro[item.key].provincia_id,
      municipio_id:bairro[item.key].municipio_id,
      distrito_id:bairro[item.key].distrito_id
    });
  
  }


  async function  handleSubmit(data: any) {
   if(isEdit){
    console.log("update")
      handleUpdate(id,data)
       return

    }
    console.log("create")
    try {
        await api.post("/bairro",data)

        toast({
          title: 'Criado com sucesso!',
          description: "Bairro criado com sucesso!",
          status: 'success',
          position:'top-right',
          duration: 4000,
          isClosable: true,
        })
        getBairro()
        
    } catch (error) {
        toast({
          title: 'Erro ao criar bairro',
          description: "Erro ao criar bairro, tente novamente!",
          status: 'error',
          position:'top-right',
          duration: 4000,
          isClosable: true,
        })
    }
  }

    

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


  }, [])


  const getDistrito=useCallback(async()=>{
 
      const response=await api.post("/distrito/list",{filter:inputSearchValue})
      const { data }=response
      console.log(response)
      setLoading(false)
      setDistrito(data)

  },[])

  const { Option } = Select;


  return (
    <DashBord>
      <section style={{marginBottom:'50px'}}>
        <h1>LISTA DE BAIRROS</h1>
        <div>
          <Button  onClick={() =>{ setVisible(true); seIsEdit(false) }} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>
     
      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={bairro}
        scroll={{ x: 1500, y: 300 }}
        loading={loading}
      />

     <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() =>{ handleSubmit(forms.getFieldsValue());setVisible(false)}}
        onCancel={() => setVisible(false)}
        width={1000}
       >
            <AdvancedSearchForm hendleSubmit={handleSubmit} form={forms} >
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

              <Col >
                <Form.Item
                  name="municipio_id"
                  label="Município"
                  rules={[{ required: true, message: 'digite nome do Município!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }} >
                    <Option value="null"  >Selectione</Option>
                    {
                      municipio.map(municipio=>(
                        <Option value={municipio.id} key={municipio.id}  >{municipio?.name}</Option>

                       )
                      )
                    }

                  </Select>
                </Form.Item>
              </Col>


              <Col >
                <Form.Item
                  name="distrito_id"
                  label="Distrito"
                  rules={[{ required: true, message: 'digite nome do distríto!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: 200, }} >
                    <Option value="null"  >Selectione</Option>
                    {
                      distiro.map(distiro=>(
                        <Option value={distiro.id} key={distiro.id}  >{distiro?.name}</Option>

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