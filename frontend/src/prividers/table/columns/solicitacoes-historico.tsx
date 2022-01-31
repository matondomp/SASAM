
import { UseSearchContext } from "../../../hooks/search";


export const Column=(Dropdown:any,menu:any)=>{

    const { getColumnSearchProps } = UseSearchContext()

  const columns:any = [
   
    {
     ...getColumnSearchProps('descricao'),
      title: 'Descrição',
      width: 200,
      backgroundColor:"black",
      dataIndex: 'descricao',
      fixed: false,
      key: 'name',
    },
    {
      ...getColumnSearchProps('numero_identificacao'),
       title: 'Número de Identificação',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'numero_identificacao',
       fixed: false,
       key: 'name',
     },
     {
      ...getColumnSearchProps('telefone'),
       title: 'Telefone',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'telefone',
       fixed: false,
       key: 'telefone',
     },
     {
      ...getColumnSearchProps('tipo_solicitacao'),
       title: 'Tipo de Identificação',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'tipo_solicitacao',
       fixed: false,
       key: 'tipo_solicitacao',
     },
  
    {
      title: 'Estado',
      width: 100,
      dataIndex: 'estado',
      key: 'data',
      
      
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
