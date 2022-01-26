
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

  

  const columns:any = [
   
    {
     ...getColumnSearchProps('numero_identificacao'),
      title: 'Número de Identificação',
      width: 200,
      backgroundColor:"black",
      dataIndex: 'numero_identificacao',
      fixed: false,
      key: 'numero_identificacao',
    },
    {
      ...getColumnSearchProps('tipo_identificacao'),
       title: 'Tipo de identificação',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'tipo_identificacao',
       fixed: false,
       key: 'tipo_identificacao',
     },
     {
      ...getColumnSearchProps('estado'),
       title: 'Estado',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'estado',
       fixed: false,
       key: 'estado',
     },
    {
       title: 'Data de Emissão',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'data_emissao',
       fixed: false,
       key: 'data_emissao',
     },
     {
       title: 'Data de validade',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'data_validade',
       fixed: false,
       key: 'data_validade',
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
