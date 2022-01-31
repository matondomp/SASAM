
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


import { Column } from '../../prividers/table/columns/solicitacoes'
import { useEffect } from 'react';
import { UseSearchContext } from '../../hooks/search/index'
import { useCallback } from 'react';
import { Item } from 'framer-motion/types/components/Reorder/Item';
import { FilterValue } from 'antd/lib/table/interface';

import { Input } from './style'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal';
import { UploadFile } from 'antd/lib/upload/interface';

import { Column as _Column } from '../../prividers/table/columns/solicitacoes-historico'

const { Option } = Select;

export const Solicitacao: FC = () => {

  const [form,setForm]=useState({
    numero_identificacao:'',
    name:'',
    telefone:'',
    tipo_solicitacao_id:''
  })

  const [name, setName] = useState('')
  const [isEdit,seIsEdit]=useState(false)
  const [solicitacoes,setSolicitacoes]=useState<any[]>([])
  const [historico,setHistorico]=useState<any[]>([])
  const [tipoSolicitacoes,setTipoSolicitacoes]=useState<any[]>([])
  const [id, setId] = useState('')
  const [estado, setEstado] = useState<any[]>([])
  const [provincia, setProvincia] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const [identidade,setIdentidade]=useState<any[]>([])
  const toast = useToast()
  const { inputSearchValue } = UseSearchContext()
  const [visibleDoc, setVisibleDoc] = useState(false);
  const [visibleIdentity, setVisibleIdentity] = useState(false);
  const [fileList, setFileList] = useState<UploadFile<any>[]>([
    {
      uid: '-1',
      name: '',
      status: 'done',
     // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
  ]);

 
let user:any=localStorage.getItem("@sasam-app:user")
user=user && JSON.parse(user)

  useEffect(() => {

    getSolicitacoes()
    getTypeSolicitacoes()
    getIdentity('')
    getEstado()
  }, [inputSearchValue,name])

  const [forms] = Form.useForm();

  function initForm(item: any) {
        setForm({
          numero_identificacao:'',
          name:'',
          telefone:'',
          tipo_solicitacao_id:''
        })
        getHistorico(solicitacoes[item.key].id)
        setId(solicitacoes[item.key].id)

        forms.setFieldsValue({
          municipe:solicitacoes[item.key].name,
          numero_identificacao:solicitacoes[item.key].numero_identificacao,
          name:solicitacoes[item.key].name,
          telefone:solicitacoes[item.key].telefone,
          estado_id:solicitacoes[item.key].estado_id,
          tipo_solicitacao_id:solicitacoes[item.key].tipo_solicitacao_id
        });

        setForm(
          {
            numero_identificacao:solicitacoes[item.key].numero_identificacao,
            name:solicitacoes[item.key].name,
            telefone:solicitacoes[item.key].telefone,
            tipo_solicitacao_id:solicitacoes[item.key].tipo_solicitacao_id
          }
        )

       console.log(solicitacoes[item.key])
       console.log(form)
  }


  const menu = (id: string) => {
   
   return(
       <Menu onClick={handleMenuClick}>
          <Menu.Item key={id} onClick={(e) => { setVisible(true); initForm(e);seIsEdit(true) }}>Editar</Menu.Item>
          <Menu.Item key={id} onClick={(e) => {setVisibleDoc(true);initForm(e) }}>Histórico</Menu.Item>
       </Menu>
      ) 
  };

  const _menu =(id:string)=> (
    <Menu >
     {/*  <Menu.Item key={id} onClick={(e)=>{setVisibleIdentity(true);}}>Editar</Menu.Item> */}
    </Menu>
  );

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

  const onChange = (fileList:any) => {
    setFileList(fileList.fileList);
  };

  const onChanges = (value:any) => {
       getIdentity(value)
       console.log(identidade[0])
      /*  for (const item of identidade) {
 */
          forms.setFieldsValue({
            numero_identificacao:identidade[0].numero_identificacao,
            name:identidade[0].name,
            telefone:identidade[0].telefone,
          });
         
      /*  } */

  };

  function onSearch(val:any) {
    console.log('search:', val);
  }
  const onPreview = async (file:any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    let imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const getTypeSolicitacoes = useCallback(async () => {
    setTipoSolicitacoes([])
   
    const response = await api.post("/tipo-solicitacao/list", { filter: inputSearchValue })
    const { data } = response

    setTipoSolicitacoes(() => (data.map((item: any, i: number) => {
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

  const getHistorico = useCallback(async (id) => {
    setHistorico([])
   
    const response = await api.post("/historico/list/"+id, { filter: inputSearchValue })
    const { data } = response

    setHistorico(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item?.id,
            name:item?.description,
            numero_identificacao:item?.Solicitacoes?.numero_identificacao,
            telefone:item?.Solicitacoes?.telefone,
            tipo_solicitacao_id:item?.Solicitacoes?.id,
            tipo_solicitacao:item?.Solicitacoes?.name,
            estado_id:item?.Estado?.id,
            estado:item?.Estado?.name,
            data: hendleDateTimeZone(item?.created_at),
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])

  const getSolicitacoes = useCallback(async () => {
    setSolicitacoes([])
   
    const response = await api.post("/solicitacao/list", { filter: inputSearchValue })
    const { data } = response

    setSolicitacoes(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            name:item.name,
            numero_identificacao:item.numero_identificacao,
            telefone:item.telefone,
            tipo_solicitacao_id:item?.TipoSolicitacoes?.id,
            tipo_solicitacao:item?.TipoSolicitacoes?.name,
            estado_id:item?.Estado?.id,
            estado:item?.Estado?.name,
            data: hendleDateTimeZone(item?.created_at),
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])


  const getIdentity = useCallback(async (identidade:string) => {
   // setTypeMunicipe([])
    console.log('searhing')
    const response = await api.post(`/identidade/listByIdentity`,{ filter:identidade})
    const { data } = response

    setIdentidade(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            numero_identificacao:item.numero_identificacao,
            tipo_solicitacao_id:item.tipo_solicitacao_id,
            data_emissao:item?.data_emissao && hendleDateTimeZone(item?.data_emissao),
            data_validade: item?.data_validade && hendleDateTimeZone(item?.data_validade ),
            estado_id:item?.estado_id,
            telefone:item?.Municipe.telefone,
            estado:item?.estado_id=='1'?'Activo':'Inactivo',
            name: item?.Municipe?.name,
            data: item?.created_at  && hendleDateTimeZone(item?.created_at),
          }
        }
      )
      )
    )
    setLoading(false)

  }, [])

  const _column = _Column(Dropdown, _menu)
  const column = Column(Dropdown, menu)

  async function handleHistorico(data:any) {
    console.log(user,'user from localstorege',user,data)
    try {
      await api.post("/historico",  
         { 
          description:'',
          estado_id:data?.estado_id,
          motivo:'',
          user_id:user.id,
          solicitacao_id:id
        }
      )

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
      handleHistorico(data)
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

  function clearInputs() {
    forms.setFieldsValue({
      municipe:'',
      numero_identificacao:'',
      name:'',
      telefone:'',
      tipo_solicitacao_id:'',
      estado_id:''
    });
  }
  const { Option } = Select;


  return (
    <DashBord>
      <section style={{marginBottom:'50px'}}>
        <h1>LISTA DE SOLICITAÇÕES</h1>
        <div>
          <Button onClick={() => {setVisible(true);seIsEdit(false);clearInputs()}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>

      <Table
        style={{ width: '100%' }}
        columns={column}
        dataSource={solicitacoes}
        loading={loading}
        //  scroll={{ x: 1500, y: 300 }}
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

            <h1 style={{color:'#1d8efa'}}> Histórico</h1>
           
            <div>
           
              {/* <Button   onClick={() => {setVisibleIdentity(true);seIsEdit(false);clearInput()}} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
           */}  </div>
          </section>
          <hr />
            <Table columns={_column} dataSource={historico}
               scroll={{ x: 1500 }}
               pagination={{ pageSize: 5 }}
              // size="middle"
             />
        </div>
       </Modal>

    

      <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okText="Regitrar"
        width={520}
      >

        <AdvancedSearchForm hendleSubmit={handleSubmit}  
           form={forms} >
          <Row gutter={24} style={{width:'100%'}}>

            <Col style={{width:'50%'}}>
            <Form.Item
                  name="municipe"
                  label="Municipe"
                  style={{width:'100%'}}
                  rules={[{ required: true, message: 'digite nº do  BI!' }]}
                >
            <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChanges}
                onSearch={onSearch}
                filterOption={(input, option:any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  identidade.map(identity=>(
                    <Option value={identity?.numero_identificacao} key={identity?.id}>
                      { 
                        identity?.name
                      }
                    </Option>
                  )
                  )
                }
               
              </Select>
              </Form.Item>

              <Form.Item
                name="name"
                label="Nome"
                initialValue={form.name}
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite o nome!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}   />
              </Form.Item>

              <Form.Item
                  name="estado_id"
                  label="Estado"
                  style={{width:'100%'}}
                  rules={[{ required: true, message: 'digite nome da Estado!' }]}
                >
                  <Select defaultValue="Selectione" style={{ width: '100%', }}  >
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

            <Col style={{width:'50%'}}>
              <Form.Item
                name="numero_identificacao"
                label="Identificação(BI)"
                initialValue={form.numero_identificacao}
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite a Identificação!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}    />
              </Form.Item>

              <Form.Item
                name="telefone"
                label="Telefone"
                initialValue={form.telefone}
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite a Telefone!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }}    />
              </Form.Item>

              <Form.Item
                name="tipo_solicitacao_id"
                label="Tipo de solicitação"
                initialValue={form.tipo_solicitacao_id}
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite o Tipo de solicitação!',
                  },
                ]}
              >
                 <Select defaultValue="Selectione" style={{ width: '100%', }}  >
                    <Option value="null" >Selectione</Option>
                    {
                      tipoSolicitacoes.map(item=>(
                        <Option value={item.id} key={item.id}  >{item?.name}</Option>

                       )
                      )
                    }

                  </Select>
              </Form.Item>
            </Col>

            <Col style={{width:'100%'}}>
              

                <Form.Item
                name="anexo"
                label="Anexo"
                
                style={{width:'100%'}}
                rules={[
                  {
                    required: true,
                    message: 'digite Anexo!',
                  },
                ]}
              >
             
              <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                 // defaultFileList={[...fileList]}
                  className="upload-list-inline"
                >
                 <Button icon={<UploadOutlined />}>Anexar Ficheiro</Button>
               </Upload>
              </Form.Item>

              </Col>


          </Row>
        </AdvancedSearchForm>


      </Modal>


    </DashBord>
  )
}