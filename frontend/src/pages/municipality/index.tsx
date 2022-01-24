

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


import { Column } from '../../prividers/table/columns/municipe'
import { UseSearchContext } from '../../hooks/search/index'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';



export const Municipality: FC = () => {

  const [municipio,setMunicipio]=useState<any[]>([])
  const [estado, setEstado] = useState<any[]>([])
  const [provincia,setProvincia]=useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const [isEdit,seIsEdit]=useState(false)
  const [id, setId] = useState('')
  const toast = useToast()
  const { inputSearchValue }=UseSearchContext()
  const [forms] = Form.useForm();

  useEffect(()=>{

    getEstado()
  getMunicipio()
  getProvincia()
  console.log('in my input',inputSearchValue)

  },[inputSearchValue])
 
  function initForm(item: any) {

    setId(municipio[item.key].id)
    console.log('first',item,municipio,municipio[item.key])
    seIsEdit(true)

    setId(municipio[item.key].id)

    forms.setFieldsValue({
      name:municipio[item.key].name,
      estado_id:municipio[item.key].estado,
      provincia_id:municipio[item.key].provincia_id,
    });

   
}

 
  const menu = (id:string)=>{
    return(
      <Menu >
        <Menu.Item key={id}  onClick={(e)=>{setVisible(true);initForm(e)}}>Editar</Menu.Item>
      </Menu>
     );
}

  const column = Column(Dropdown, menu)

  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
  }

  const getMunicipio=useCallback(async()=>{
    const response=await api.get("/municipio")
    const { data }=response
    console.log(response)
    setMunicipio(()=>(data.map((item:any,i:number)=>{
      return {
         key: i,
         name: item?.name,
         id:item.id,
         provincia:item.provincia.name,
         provincia_id:item.provincia.id,
         data: hendleDateTimeZone(item?.created_at),
         estado: item?.estado_id?'Activo':'Inactivo',
       }
     })))
     setLoading(false)
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

  async function getProvincia() {
    const response=await api.get("/provincia")
    const { data }=response
    console.log(response)
    setProvincia(data)
  }

  async function handleUpdate(data:any) {
    console.log(id)
    try {
      await api.put("/municipio/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "municipio actualizado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getMunicipio()
    } catch (error) {
      toast({
        title: 'Erro ao actualizado municipio',
        description: "Erro ao criar municipio, tente novamente!",
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
        await api.post("/municipio",data)

        toast({
          title: 'Criado com sucesso!',
          description: "Município criado com sucesso!",
          status: 'success',
          position:'top-right',
          duration: 4000,
          isClosable: true,
        })
        getMunicipio()
    } catch (error) {
        toast({
          title: 'Erro ao criar municipio',
          description: "Erro ao criar municipio, tente novamente!",
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
        <h1>LISTA DE MUNICÍPIOS</h1>
        <div>
          <Button  onClick={() => {setVisible(true);seIsEdit(false)}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>
     
      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={municipio}
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