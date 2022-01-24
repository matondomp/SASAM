

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


import { Column } from '../../prividers/table/columns/provincia'
import { UseSearchContext } from '../../hooks/search/index'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';



export const Province: FC = () => {

 
  const [provincia,setProvincia]=useState<any[]>([])
  const [estado, setEstado] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const [isEdit,seIsEdit]=useState(false)
  const [id, setId] = useState('')
  const toast = useToast()
  const { inputSearchValue }=UseSearchContext()

  useEffect(()=>{
   getEstado()
  getProvincia()
  console.log('in my input',inputSearchValue)

  },[inputSearchValue])
 
  const [forms] = Form.useForm();

  function initForm(item: any) {
    seIsEdit(true)
        setId(provincia[item.key].id)

        forms.setFieldsValue({
          name:provincia[item.key].name,
          estado_id:provincia[item.key].estado,
        });

    
  }

  const menu = (id: string) => {
   
   return(
       <Menu onClick={handleMenuClick}>
          <Menu.Item key={id} onClick={(e) => { setVisible(true); initForm(e); }}>Editar</Menu.Item>
    
        </Menu>
      ) 
  };

  const column = Column(Dropdown, menu)

  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
  }

  const getProvincia=useCallback(async()=>{
    const response=await api.get("/provincia")
    const { data }=response
  
    setProvincia(()=>(data.map((item:any,i:number)=>{
      return {
         key: i,
         id:item.id,
         name: item?.name,
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


  }, [])

  async function handleUpdate(data:any) {
   
    try {
      await api.put("/provincia/"+id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "prioridade criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getProvincia()
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

  async function  handleSubmit(data: any) {
    console.log(data)
    if(isEdit){
      console.log('hendle form',forms)
      handleUpdate(data)
       return
    }
    try {
        await api.post("/provincia",data)

        toast({
          title: 'Criado com sucesso!',
          description: "Província criado com sucesso!",
          status: 'success',
          position:'top-right',
          duration: 4000,
          isClosable: true,
        })
        getProvincia()
        setLoading(false)
    } catch (error) {
        toast({
          title: 'Erro ao criar Província',
          description: "Erro ao criar Província, tente novamente!",
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
        <h1>LISTA DE PROVÍNCIAS</h1>
        <div>
          <Button  onClick={() => {setVisible(true);seIsEdit(false)}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>
     
      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={provincia}
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

            </Row>
          </AdvancedSearchForm>
 
          
      </Modal>


    </DashBord>
  )
}