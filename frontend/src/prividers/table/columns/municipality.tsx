
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
      ...getColumnSearchProps('email'),
       title: 'E-mail',
       width: 300,
       backgroundColor:"black",
       dataIndex: 'email',
       fixed: false,
       key: 'name',
     },
    {
      ...getColumnSearchProps('pai'),
       title: 'Nome do pai',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'pai',
       fixed: false,
       key: 'name',
     },
    {
      ...getColumnSearchProps('mae'),
       title: 'Nome do Mãe',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'mae',
       fixed: false,
       key: 'name',
     },
     {
      ...getColumnSearchProps('residencia'),
       title: 'Residência',
       width: 200,
       backgroundColor:"black",
       dataIndex: 'residencia',
       fixed: false,
       key: 'name',
     },

    {
      title: 'Bairro',
      dataIndex: 'bairro',
      key: 'estado',
      width: 200
    },

    {
      title: 'Tipo Municipio',
      dataIndex: 'tipo_municipe',
      key: 'estado',
      width: 200
    },
    
    {
      title: 'Genero',
      dataIndex: 'genero_id',
      key: 'estado',
      width: 200
    },

    {
      title: 'Estado Civil',
      dataIndex: 'estado_civil',
      key: 'estado',
      width: 200
    },
    
    {
      title: 'Estado',
      dataIndex: 'estado_id',
      key: 'estado',
      width: 200
    },
    {
      title: 'Operador',
      dataIndex: 'user_id',
      key: 'estado',
      width: 200
    },
    {
      title: 'Telefone',
      dataIndex: 'telefone',
      key: 'estado',
      width: 200
    },
    {
      title: 'Data de Nascimento',
      width: 200,
      dataIndex: 'data_nascimento',
      key: 'data',
      
    },
    {
      title: 'Data de criação',
      width: 200,
      dataIndex: 'created_at',
      key: 'data',
      
    },
     {
      title: 'Operações',
      key: '9',
      dataIndex: 'key',
       width: 200,
     // fixed: true,
      render: (id:string) => <Dropdown.Button overlay={()=>menu(id)} type="primary">Operações</Dropdown.Button>
                  
    }
  
    
  ];

  return columns
}
