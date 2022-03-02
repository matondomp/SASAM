
import { 
  FC, 
  useCallback, 
  useState,
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

import { color, useToast } from '@chakra-ui/react'


import { api } from '../../service/api'
import { DashBord } from '../dashbord'
import { AdvancedSearchForm } from '../../components/forms'

import { Column } from '../../prividers/table/columns/municipality'
import { Column as _Column } from '../../prividers/table/columns/indentification'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';



export const Municipe: FC = () => {


  const [municipe,setMunicioe]=useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const toast = useToast()
  const [typeMunicipe, setTypeMunicipe] = useState<any[]>([])
  const [visible, setVisible] = useState(false);
  const [visibleDoc, setVisibleDoc] = useState(false);
  const [visibleIdentity, setVisibleIdentity] = useState(false);
  const [estadoCivil, setEstadoCivil] = useState<any[]>([])
  const [municipeId,setMunicipeId]= useState('')
  const [bairro,setBairro]=useState<any[]>([])
  const [identidade,setIdentidade]=useState<any[]>([])
  const [isEdit,seIsEdit]=useState(false)
  const [id, setId] = useState('')
  const [forms] = Form.useForm();
  const [_forms] = Form.useForm();
  let user: any = localStorage.getItem("@sasam-app:user") 

   user= user && JSON.parse(String(user))
  
  useEffect(()=>{
     
    getMunicipio()
    getTypeMunicipe()
    getEstadoCivil()
    getBairro()
   
  },[])
 

  function initForm(item: any) {
    seIsEdit(true)
    console.log("editar",item)
     seIsEdit(true)
     getIdentity(municipe[item.key]?.id)
     setMunicipeId(municipe[item.key]?.id)

     console.log(municipe)
     setId(municipe[item.key].id)
     console.log(municipe[item.key],municipe[item.key].id,item)
     forms.setFieldsValue({
      name: municipe[item.key]?.name,
       pai: municipe[item.key]?.pai,
      mae: municipe[item.key]?.mae,
      residencia: municipe[item.key].residencia,
 /*     date: municipe[item.key]?.data_nascimento, */
      telefone: municipe[item.key]?.telefone,
      user_id: municipe[item.key]?.user_id,
      estado_id: municipe[item.key]?.estado_id,
      bairro_id: municipe[item.key]?.bairro_id,
      tipo_municipe: municipe[item.key]?.tipo_municipe_id,
      genero_id: municipe[item.key]?.genero_id,
      estado_cil_id: municipe[item.key]?.estado_cil_id,
      email:municipe[item.key]?.email 
     });
   
   }

   function clearInput(){

    _forms.setFieldsValue({
     numero_identificacao:null,
     tipo_identificacao:null,
    /*  data_emissao:identidade[item.key]?.data_emissao,
     data_validade:identidade[item.key]?.data_validade, */
     estado_id: null,
    });
 
    forms.setFieldsValue({
      name: null,
       pai: null,
      mae:null,
      residencia: null,
 /*     date: municipe[item.key]?.data_nascimento, */
      telefone: null,
      user_id: null,
      estado_id: null,
      bairro_id: null,
      tipo_municipe:null,
      genero_id: null,
      estado_cil_id: null,
      email:null 
     });

   }

   function initFormIdentifica(item: any) {
    seIsEdit(true)
    console.log("editar",item)
     seIsEdit(true)

     console.log(identidade)
     setId(identidade[item.key].id)
     _forms.setFieldsValue({
      numero_identificacao:identidade[item.key]?.numero_identificacao,
      tipo_identificacao:identidade[item.key]?.tipo_identificacao,
     /*  data_emissao:identidade[item.key]?.data_emissao,
      data_validade:identidade[item.key]?.data_validade, */
      estado_id: identidade[item.key]?.estado_id,
     });
   
   }
 
  const menu =(id:string)=> (
    <Menu >
      <Menu.Item key={id} onClick={(e)=>{setVisible(true);initForm(e)}}>Editar</Menu.Item>
      <Menu.Item key={id} onClick={(e)=>{setVisibleDoc(true);initForm(e)}} >Identificação</Menu.Item>
    </Menu>
  );

  const _menu =(id:string)=> (
    <Menu >
      <Menu.Item key={id} onClick={(e)=>{setVisibleIdentity(true);initFormIdentifica(e);}}>Editar</Menu.Item>
    </Menu>
  );


  const column = Column(Dropdown, menu)
  const _column = _Column(Dropdown, _menu)

  const getEstadoCivil = useCallback(async () => {
    setEstadoCivil([])

    const response = await api.post("/estado-civil/list")
    const { data } = response

    setEstadoCivil(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            estado_id:item?.estado_id?'Activo':'Inactivo',
            name: item?.name,
            data: hendleDateTimeZone(item?.created_at),
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])


  const getTypeMunicipe = useCallback(async () => {
    setTypeMunicipe([])

    const response = await api.post("/tipo-municipe/list")
    const { data } = response

    setTypeMunicipe(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            estado_id:item?.estado_id?'Activo':'Inactivo',
            name: item?.name,
            data: item?.created_at,
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])

  const getIdentity = useCallback(async (id:string) => {
    setTypeMunicipe([])

    const response = await api.post(`/identidade/list/${id}`)
    const { data } = response

    setIdentidade(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            numero_identificacao:item.numero_identificacao,
            tipo_identificacao:item.tipo_identificacao,
            data_emissao:item?.data_emissao && hendleDateTimeZone(item?.data_emissao),
            data_validade: item?.data_validade && hendleDateTimeZone(item?.data_validade ),
            estado_id:item?.estado_id,
            estado:item?.estado_id=='1'?'Activo':'Inactivo',
            name: item?.name,
            data: item?.created_at  && hendleDateTimeZone(item?.created_at),
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])


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
         created_at:item.created_at
       }
     })))
  },[])

  async function getMunicipio() {
    const response=await api.get("/municipe")
  const { data }=response
    console.log(response)
    setMunicioe(() => (data.map((item: any, i: number) => {
      console.log(i)


        return {
          key: i,
          id: item?.id,
          name: item?.name,
          pai: item?.pai,
          mae: item?.mae,
          residencia: item.residencia,
          data_nascimento: hendleDateTimeZone(item?.data_nascimento),
          telefone: item?.telefone,
          user_id: item?.user_id,
          estado_id: item?.estado_id?'Activo':'Inactivo',
          bairro: item?.bairro?.name,
          bairro_id: item?.bairro?.id,
          tipo_municipe: item?.tipeMunicipio?.name,
          tipo_municipe_id:item?.tipeMunicipio?.id,
          genero_id: item?.genero_id=='M'?'MASCULINO':'FEMENINO',
          estado_cil_id: item?.estadoCivil?.id,
          estado_civil: item?.estadoCivil?.name,
          email:item?.email,
          created_at: hendleDateTimeZone(item?.created_at),
        }
      }
     )
    ))

    setLoading(false)
  }

  async function handleUpdate(url:string,data:any) {
    console.log(id)
    try {
      await api.put(`${url}${id}`, {...data,municipe_id:municipeId})

      toast({
        title: 'Atualizado com sucesso!',
        description: "actualizado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
      getIdentity(municipeId)
      getMunicipio()
    } catch (error) {
      toast({
        title: 'Erro ao actualizar munícipe',
        description: "Erro ao actualizar, tente novamente!",
        status: 'error',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  async function  handleSubmit(data: any) {
    console.log(data)
   console.log("ola identidade")
    if(isEdit){
      let url ="/municipe/"
      console.log('updated',data,id)
      handleUpdate(url,data)
       return
    }

    try {
      const response=await api.post("/municipe",data)

      message.success("Cadastrado com sucesso !")
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
        title: 'Erro ao criar munícipe',
        description: "Erro ao criar munícipe, tente novamente!",
        status: 'error',
        position:'top-right',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  async function  handleSubmitIdentidade(data: any) {

     if(isEdit){
      console.log('updated',data,id,user)
      let url='/identidade/'
      handleUpdate(url,{
             ...data,
             municipe_id:municipeId
          })

      
       return
    } 

    console.log('municipeId',municipeId,'user',user?.id)

    try {
      const response=await api.post("/identidade",{
        ...data,
        municipe_id:
        municipeId,
        userId:user?.id
      })

      message.success("Cadastrado com sucesso !")
      toast({
        title: 'Criado com sucesso!',
        description: "Município criado com sucesso!",
        status: 'success',
        position:'top-right',
        duration: 4000,
        isClosable: true,
      })
      getIdentity(municipeId)
  } catch (error) {
      toast({
        title: 'Erro ao criar munícipe',
        description: "Erro ao criar munícipe, tente novamente!",
        status: 'error',
        position:'top-right',
        duration: 4000,
        isClosable: true,
      })
    }
  }


  const { Option } = Select;

  const data = [];
  for (let i = 0; i < municipe.length; i++) {
    data.push({
      key: i,
      name: municipe[i]?.name,
      data: municipe[i]?.data_nascimento,
      user: municipe[i]?.user_id,
      estado: municipe[i]?.estado_id,
    });
  }

  return (
    <DashBord>
      <section style={{marginBottom:'50px'}}>
        <h1>LISTA DE MUNÍCIPES</h1>
        <div>
          <Button   onClick={() => {setVisible(true);seIsEdit(false);clearInput()}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>

      <Table
        style={{ width: '90%' }}
        columns={column}
        dataSource={municipe}
        scroll={{ x: 1500, y: 300 }}
        loading={loading}
      />


     <Modal
        
        centered
        visible={visibleDoc}
        onOk={() => setVisibleDoc(false)}
        onCancel={() => setVisibleDoc(false)}
        width={1200}
       >
        <div>
            <section
               style={{
                 display:'flex',
                 justifyContent:'space-between',
                 alignItems:'center',
                 marginTop:'20px',
                 fontSize:"30px",
                 fontWeight:'bold',
                 marginBottom:'50px'
                }}>

            <h1 style={{color:'#1d8efa'}}> Identificação</h1>
           
            <div>
           
              <Button   onClick={() => {setVisibleIdentity(true);seIsEdit(false);clearInput()}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
            </div>
          </section>
          <hr />
            <Table columns={_column} dataSource={identidade}
               scroll={{ x: 1500 }}
               pagination={{ pageSize: 5 }}
              // size="middle"
             />
        </div>
       </Modal>

       <Modal
        title="Registar Identidade"
        
        visible={visibleIdentity}
        onOk={() =>{ handleSubmitIdentidade(_forms.getFieldsValue());setVisibleIdentity(false)}}
        onCancel={() => setVisibleIdentity(false)}
        width={500}
       >

        {/* overlayClassName="react-modal-overLay" */}
        
         
          <AdvancedSearchForm hendleSubmit={handleSubmitIdentidade} form={_forms}>
            <Row gutter={24}>
          
           <Col>
             
                <Form.Item
                  name="numero_identificacao"
                  label="Numero Identificação"
                  rules={[
                    {
                      required: true,
                      message: 'digite o Numero de Identificação!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="tipo_identificacao"
                  label="Tipo Identificação"
                  rules={[
                    {
                      required: true,
                      message: 'digite o Tipo de Identificação!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                </Col>
                <Col>
                <Form.Item
                  name="data_emissao"
                  label="Data de Emissão"
                  rules={[
                    {
                      required: true,
                      message: 'digite a Data de Emissão!',
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                
                <Form.Item
                  name="data_validade"
                  label="Data de validade"
                  rules={[
                    {
                      required: true,
                      message: 'digite a data de validade!',
                    },
                  ]}
                >
                  <DatePicker />
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

   
      
     <Modal
        title="Registar"
        centered
        visible={visible}
         onOk={() => {handleSubmit(forms.getFieldsValue());setVisible(false)}}
        onCancel={() => setVisible(false)}
        width={1000}
       >

        {/* overlayClassName="react-modal-overLay" */}

         
          <AdvancedSearchForm hendleSubmit={handleSubmit} form={forms}>
            <Row gutter={24}>
              <Col>
                <Form.Item
                  name="email"
                  label="E-mail"

                  rules={[
                    {
                      type: 'email',
                      message: 'O email não válido E-mail!',
                    },
                    {
                      required: true,
                      message: 'O email é obrigatório!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

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
                  name="pai"
                  label="Pai"
                  rules={[
                    {
                      required: true,
                      message: 'digite o Pai!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  name="mae"
                  label="Mãe"
                  rules={[
                    {
                      required: true,
                      message: 'digite o Mãe!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  name="residencia"
                  label="Residência"

                  rules={[
                    {
                      required: true,
                      message: 'digite o Mãe!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col>
              
                <Form.Item  name="date"
                  label="Data de nascimento"

                  rules={[
                    {
                      required: true,
                      message: 'digite a Data de nascimento!',
                    },
                  ]}
                  style={{ display: 'inline-block', width: '200px' }}
                  >
                    <DatePicker />
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  name="telefone"
                  label="Telefone"

                  rules={[
                    {
                      required: true,
                      message: 'digite o telefone!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

             <Col>
                <Form.Item
                  name="user_id"
                  label="User"
                  rules={[{ required: true, message: 'digite Usuário!' }]}
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
                  name="bairro_id"
                  label="Bairro"
                  rules={[{ required: true, message: 'digite nome do bairro!' }]}
                >
                  <Select defaultValue="null" style={{ width: 200, }} >
                  <Option value="null" >Selectione</Option>
                    {
                      bairro.map(item=>(
                           <Option value={item.id} key={item.id} >{item.name}</Option>
                      ))
                    }
                    

                  </Select>
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  name="tipo_municipe"
                  label="Tipo de Municipe"
                  rules={[{ required: true, message: 'Seleccione Tipo de Municipe!' }]}
                >
                  <Select defaultValue="null" style={{ width: 200, }} >
                    <Option value="null"  >Seleccione</Option>
                    {
                      typeMunicipe.map(item=>(
                         <Option value={item.id} key={item.id} >{item.name}</Option>
                      ))
                    }

                  </Select>
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  name="genero_id"
                  label="Tipo de género"
                  rules={[{ required: true, message: 'Seleccione Tipo de Municipe!' }]}
                >
                  <Select defaultValue="null" style={{ width: 200, }} >
                  <Option value="null" >Selectione</Option>
                    <Option value="M"  >Masculino</Option>
                    <Option value="F" >Femenino</Option>

                  </Select>
                </Form.Item>
              </Col>

              <Col>
                <Form.Item
                  name="estado_cil_id"
                  label="Estado civil"
                  rules={[{ required: true, message: 'Seleccione Estado civil!' }]}
                >
                  <Select defaultValue="null" style={{ width: 200, }} >
                    <Option value="null">Seleccione</Option>
                    {
                      estadoCivil.map(item=>(
                        <Option value={item.id} key={item.id} >{item.name}</Option>
                      ))
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