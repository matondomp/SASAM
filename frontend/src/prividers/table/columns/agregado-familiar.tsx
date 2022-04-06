
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

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
      ...getColumnSearchProps('profissao'),
       title: 'Profissão',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'profissao',
       fixed: false,
       key: 'profissao',
     },
     {
      ...getColumnSearchProps('idade'),
       title: 'Idade',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'idade',
       fixed: false,
       key: 'idade',
     },
     {
      ...getColumnSearchProps('grau_parentesco'),
       title: 'Grau Parentesco',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'grau_parentesco',
       fixed: false,
       key: 'grau_parentesco',
     },
    {
      title: 'Data de criação',
      width: 100,
      dataIndex: 'data',
      key: 'data',
      
      
    },
 /*    {
      title: 'Operações',
      key: '9',
      dataIndex: 'key',
       width: 10,
      fixed: false,
      render: (id:any) => <Dropdown.Button  overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    }, */
  
    
  ];

  return columns
}
