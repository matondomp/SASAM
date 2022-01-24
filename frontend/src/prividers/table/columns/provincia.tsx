
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

    /* Nome
Estado
Data de criação
user */

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
       width: 50,
      fixed: false,
      render: (id:string) => <Dropdown.Button overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    },
  
    
  ];

  return columns
}
