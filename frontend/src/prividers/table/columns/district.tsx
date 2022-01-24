
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()
 

  const columns:any = [
    
    {
      ...getColumnSearchProps(''),
      title: 'Nome',
      width: 200,
      backgroundColor:"black",
      dataIndex: 'name',
      fixed: false,
      key: 'name',
    },
    {
      ...getColumnSearchProps('provincia'),
       title: 'Província',
       width: 100,
       backgroundColor:"black",
       dataIndex: 'provincia',
       fixed: false,
       key: 'name',
     },
    {
      ...getColumnSearchProps('municipio'),
       title: 'Município',
       width: 100,
       backgroundColor:"black",
       dataIndex: 'municipio',
       fixed: false,
       key: 'name',
     },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      width: 150
    },
    {
      title: 'Data de criação',
      width: 150,
      dataIndex: 'data',
      key: 'data',
      
    },
    {
      title: 'Operações',
      key: '9',
      dataIndex: 'key',
       width: 100,
     
      render: (id:string) => <Dropdown.Button overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    }
  ];

  return columns
}
