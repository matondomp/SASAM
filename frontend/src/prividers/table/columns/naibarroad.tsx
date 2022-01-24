
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
      ...getColumnSearchProps('distrito'),
       title: 'Distrito',
       width: 100,
       backgroundColor:"black",
       dataIndex: 'distrito',
       fixed: false,
       key: 'name',
     },
    
    {
      title: 'Estado',
      dataIndex: 'estado_id',
      key: 'estado',
      width: 50
    },
    {
      title: 'Data de criação',
      width: 100,
      dataIndex: 'created_at',
      key: 'data',
      
    },
    {
      title: 'Operações',
      key: '9',
      dataIndex: 'key',
       width: 50,
      fixed: false,
      render: (id:any) => <Dropdown.Button  overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    }
    
  ];

  return columns
}
