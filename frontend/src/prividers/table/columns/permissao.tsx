
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
      ...getColumnSearchProps('description'),
      title: 'Descrição',
      width: 50,
      backgroundColor:"black",
      dataIndex: 'description',
      fixed: false,
      key: 'description',
    },
    {
      title: 'Flag',
      width: 50,
      backgroundColor:"black",
      dataIndex: 'flag',
      fixed: false,
      key: 'flag',
    },
   /*  {
       title: 'Estado',
       width: 50,
       backgroundColor:"black",
       dataIndex: 'estado_id',
       fixed: false,
       key: 'name',
     }, */
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
      render: (id:any) => <Dropdown.Button  overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    },
  
    
  ];

  return columns
}
