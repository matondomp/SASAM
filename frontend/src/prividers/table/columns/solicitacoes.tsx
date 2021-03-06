
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()
/* estado_id: "bb36e80f-751f-40f2-aeeb-99bd912d7cff"
id: "534cb2a8-4979-4f42-a063-b1119567ce6e"
name: "Matondo Pedro"
numero_identificacao: "1234"
telefone: "925758037"
tipo_solicitacao_id: "f9960ef6-55af-4221-b4e9-1d9a82ac4348" */
  const columns:any = [
   
    {
     ...getColumnSearchProps('name'),
      title: 'Nome',
      width: 200,
      backgroundColor:"black",
      dataIndex: 'name',
      fixed: false,
      key: 'name',
    },
    {
      ...getColumnSearchProps('numero_identificacao'),
       title: 'Número de Identificação',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'numero_identificacao',
       fixed: false,
       key: 'name',
     },
     {
      ...getColumnSearchProps('telefone'),
       title: 'Telefone',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'telefone',
       fixed: false,
       key: 'telefone',
     },
     {
      ...getColumnSearchProps('tipo_solicitacao'),
       title: 'Tipo de Identificação',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'tipo_solicitacao',
       fixed: false,
       key: 'tipo_solicitacao',
     },
  
    {
      title: 'Estado',
      width: 100,
      dataIndex: 'estado',
      key: 'data',
      
      
    },
    {
      title: 'Data de criação',
      width: 100,
      dataIndex: 'data',
      key: 'data',
      
      
    },
    {
      title: 'Operações',
      key: '9',
      dataIndex: 'key',
       width: 10,
      fixed: false,
      render: (id:any) => <Dropdown.Button  overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    },
  
    
  ];

  return columns
}
