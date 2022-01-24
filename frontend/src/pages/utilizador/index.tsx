

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
  Modal,
  Checkbox,
  Divider,
  Radio
} from "antd";


import {
  DownloadOutlined,
  PlusOutlined
} from '@ant-design/icons';


import { useToast } from '@chakra-ui/react'
import { hendleDateTimeZone } from '../../prividers/timezone/timeZoneLocal'
import { toDate, format } from 'date-fns-tz'

import { api } from '../../service/api'

import { DashBord } from '../dashbord'
import { AdvancedSearchForm } from '../../components/forms'


import { Column } from '../../prividers/table/columns/utilizador'
import { UseSearchContext } from '../../hooks/search/index'
import { Column as _Column } from '../../prividers/table/columns/userPermission'

const CheckboxGroup = Checkbox.Group;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const User: FC = () => {


  const [utilizador, setUtilizador] = useState<any[]>([])
  const [estado, setEstado] = useState<any[]>([])
  const [visibleDoc, setVisibleDoc] = useState(false);
  const [visibleIdentity, setVisibleIdentity] = useState(false);
  const [permissoes, setPermissoes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false);
  const [isEdit, seIsEdit] = useState(false)
  const [perfil, setPerfil] = useState<any[]>([])
  const [selectAll, setSelectAll] = useState<any[]>([])
  let [selectd, setSelectd] = useState<any[]>([])
  const [id, setId] = useState('')
  const toast = useToast()
  const { inputSearchValue } = UseSearchContext()

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  useEffect(() => {
    getEstado()
    getUtilizador()
    getPermissoes()
    getperfil()

  }, [inputSearchValue])

  const [forms] = Form.useForm();

   async function getPermissionByUser(id:string){
    setSelectd([])
    const response= await api.post("/users/permission/"+id,null)
    let keys=[]
    for (const item of response.data) {
      //if(item?.key)
      let key=item.key
      console.log(key)
      if(key>=0){
        console.log(key)
         keys.push(key)
        }
      }
    setSelectd([...keys])
    

  }



  const rowSelection = {
    onChange: async (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {

        setSelectAll([...selectedRows])
        setSelectd([...selectedRowKeys])

       let permissao= selectedRows.map((item:any)=>{
          return {
            key: item.key,
            name: item.name,
            description:item.description,
            flag:item.flag,
            permissaeId:item.id,
            userId:id
            
           }
         })

        let permission= {
          key: null,
          name: null,
          description:null,
          flag:null,
          permissaeId:null,
          userId:id
          
         }

       const response= await api.post("/users/permission",{ permissao:permissao.length?permissao:permission })

      if(response.data.user.length){

        getPermissionByUser(id)
      }
    },
    getCheckboxProps: (record: DataType) => (
      {
        disabled: record.name === 'Disabled User', 
        name: record.name,
      }
    ),
    selectAll
  };

  function initForm(item: any) {
    seIsEdit(true)
    setId(utilizador[item.key].id)
    getPermissionByUser(utilizador[item.key].id)

    forms.setFieldsValue({
      name: utilizador[item.key].name,
      email: utilizador[item.key].email,
      telefone: utilizador[item.key].telefone,
      username: utilizador[item.key].username,
      data: utilizador[item.key].created_at,
      estado: utilizador[item.key].estado_id
    });


  }

  const menu = (id: string) => {

    return (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key={id} onClick={(e) => { setVisible(true); initForm(e); }}>Editar</Menu.Item>
        <Menu.Item key={id} onClick={(e) => { setVisibleDoc(true); initForm(e); }}>Permissões</Menu.Item>

      </Menu>
    )
  };

  const _menu = (id: string) => (
    <Menu >
    </Menu>
  );

  const column = Column(Dropdown, menu)
  const _column = _Column(Dropdown, _menu)

  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
  }

  const getUtilizador = useCallback(async () => {
    const response = await api.get("/users")
    const { data } = response

    setUtilizador(() => (data.map((item: any, i: number) => {
      return {
        key: i,
        id: item.id,
        name: item?.name,
        email: item?.email,
        telefone: item.telefone,
        username: item.username,
        data: hendleDateTimeZone(item?.created_at),
        estado: item?.estado_id ? 'Activo' : 'Inactivo',
        estado_id: item?.estado_id,
      }
    })))

    setLoading(false)
  }, [])

  const getPermissoes = useCallback(async () => {
    setPermissoes([])

    const response = await api.get("/permissao")
    const { data } = response

        setPermissoes(() => (data.map((item: any, i: number) => {
          console.log(i)
          return {
            key: i,
            id: item.id,
            description: item?.description,
            flag: item?.flag,
            name: item?.nome,
            data: item?.created_at,
          }
        }
       )
      )
    )
    setLoading(false)

  }, [])

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

  const getperfil = useCallback(async () => {
    setPerfil([])

    const response = await api.get("/perfil")
    const { data } = response

    setPerfil(() => (data.map((item: any, i: number) => {
      console.log(item)
      return {
        key: i,
        id: item.id,
        nome: item?.nome,
        estado_id: item?.estado_id ? 'Activo' : 'Inactivo',
        data: item?.created_at,
      }
    }
    )
    )
    )
    setLoading(false)

  }, [])

  async function handleUpdate(data: any) {

    try {
      await api.put("/users/" + id, data)

      toast({
        title: 'Atualizado com sucesso!',
        description: "prioridade criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })

      getUtilizador()
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
    if (isEdit) {
      console.log('hendle form', forms)
      handleUpdate(data)
      return
    }
    try {
      await api.post("/users", data)
     
      toast({
        title: 'Criado com sucesso!',
        description: "Província criado com sucesso!",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
      getUtilizador()
      setLoading(false)
    } catch (error) {
      toast({
        title: 'Erro ao criar Província',
        description: "Erro ao criar Província, tente novamente!",
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
      <section style={{ marginBottom: '50px' }}>
        <h1>LISTA DE UTILIZADOR</h1>
        <div>
          <Button onClick={() => { setVisible(true); seIsEdit(false) }} type="primary" shape="round" icon={<PlusOutlined />} >Cadastrar</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} >Exportar</Button>
        </div>
      </section>


      <Table

        style={{ width: '90%' }}
        columns={column}
        dataSource={utilizador}
        scroll={{ x: 1500, y: 300 }}
        loading={loading}
      />

      <Modal

        centered
        visible={visibleDoc}
        onOk={() => setVisibleDoc(false)}
        onCancel={() => setVisibleDoc(false)}
        width={1000}
      >
        <div>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '20px',
              fontSize: "30px",
              fontWeight: 'bold',
              marginBottom: '50px'
            }}>

            <h1 style={{ color: '#1d8efa' }}> PERMISSÕES</h1>

          </section>
          <hr />

          <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value);
            }}
            value={selectionType}
          >
            <Radio value="checkbox">Vários</Radio>
            <Radio value="radio">Único</Radio>
          </Radio.Group>

          <Divider />
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
              selectedRowKeys:selectd,
              
            }}
            columns={_column} dataSource={permissoes} size="middle" />
        </div>
      </Modal>

      <Modal
        title="Registar"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        >
        <AdvancedSearchForm hendleSubmit={handleSubmit} form={forms}>
          <Row gutter={24}>


            <Col>
              <Form.Item
                style={{ width: "300px" }}
                name="name"
                label="Nome"
                rules={[
                  {
                    required: true,
                    message: 'digite o nome!',
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                style={{ width: "300px" }}
                name="email"
                label="E-mail"
                rules={[
                  {
                    required: true,
                    message: 'digite o E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                style={{ width: "300px" }}
                name="telefone"
                label="Telefone"
                rules={[
                  {
                    required: true,
                    message: 'digite número de Telefone!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            {
              !isEdit && <Col>
                <Form.Item
                  style={{ width: "300px" }}
                  name="password"
                  label="Senha"
                  rules={[
                    {
                      required: true,
                      message: 'digite a senha!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            }



            <Col>
              <Form.Item
                style={{ width: "300px" }}
                name="perfil_id"
                label="Perfil"
                rules={[{ required: true, message: 'digite o Perfil!' }]}
              >
                <Select defaultValue="Selectione" style={{ width: '100%', }}  >
                  <Option value="null" >Selectione</Option>
                  {
                    perfil.map(item => (
                      <Option value={item.id} key={item.id} >{item.nome}</Option>

                    ))
                  }
                </Select>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                style={{ width: "300px" }}
                name="estado_id"
                label="Estado"
                rules={[{ required: true, message: 'digite o estado!' }]}
              >
                <Select defaultValue="Selectione" style={{ width: '100%', }}  >
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