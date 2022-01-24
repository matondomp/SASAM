
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

  const columns:any = [
      
    {
      title: 'Todos',
      width: 100,
      backgroundColor:"black",
      dataIndex: 'checkbox',
      fixed: false,
      key: 'checkbox',
    },
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
      title: 'Data de criação',
      width: 100,
      dataIndex: 'data',
      key: 'data',
      
      
    },
    /*  {
      title: 'Operações',
      key: '9',
      dataIndex: 'key',
       width: 10,
      fixed: false,
      render: (id:any) => <Dropdown.Button  overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    },  */
  
    
  ];

  return columns
}
