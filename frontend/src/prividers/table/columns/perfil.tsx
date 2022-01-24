
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

  const columns:any = [
   
    {
     ...getColumnSearchProps('nome'),
      title: 'Nome',
      width: 100,
      backgroundColor:"black",
      dataIndex: 'nome',
      fixed: false,
      key: 'nome',
    },

    {
       title: 'Estado',
       width: 50,
       backgroundColor:"black",
       dataIndex: 'estado_id',
       fixed: false,
       key: 'estado',
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
      render: (id:any) => <Dropdown.Button  overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    },
  
    
  ];

  return columns
}
