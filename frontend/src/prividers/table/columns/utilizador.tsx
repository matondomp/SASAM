
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()


  const columns:any = [
   
    {
     ...getColumnSearchProps('name'),
      title: 'Nome',
      width: 100,
      backgroundColor:"black",
      dataIndex: 'name',
      fixed: false,
      key: 'name',
    },
    {
      ...getColumnSearchProps('email'),
       title: 'E-mail',
       width: 100,
       backgroundColor:"black",
       dataIndex: 'email',
       fixed: false,
       key: 'email',
     },
     {
      ...getColumnSearchProps('username'),
       title: 'Nome do Utilizador',
       width: 100,
       backgroundColor:"black",
       dataIndex: 'username',
       fixed: false,
       key: 'username',
     },
     {
      ...getColumnSearchProps('telefone'),
       title: 'Telefone',
       width: 100,
       backgroundColor:"black",
       dataIndex: 'telefone',
       fixed: false,
       key: 'telefone',
     },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      width: 50
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
       width: 100,
      fixed: false,
      render: (id:string) => <Dropdown.Button overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    },
  
    
  ];

  return columns
}
