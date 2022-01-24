
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

  const columns:any = [
   
    {
     ...getColumnSearchProps('description'),
      title: 'Nome',
      width: 200,
      backgroundColor:"black",
      dataIndex: 'description',
      fixed: false,
      key: 'name',
    },
 
    {
      title: 'slug',
      width: 100,
      dataIndex: 'slug',
      key: 'data',
      ...getColumnSearchProps('slug'),
      
      
    },

    {
      title: 'Operador',
      width: 100,
      dataIndex: 'user_id',
      key: 'data',
      ...getColumnSearchProps('user_id'),
      
      
    },
    {
      title: 'Estado',
      width: 100,
      dataIndex: 'estado_id',
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
