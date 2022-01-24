
import { 
    createContext,
    FC,
    useContext,
    useState 
} from "react";

import { 
  Button, 
  Input, 
  Space, 
} from "antd";

import { 
  SearchOutlined
} from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import { useEffect } from "react";


interface ISearchType{
    getColumnSearchProps(dataIndex:any): any
    inputSearchValue:string
}

export const Context=createContext<ISearchType>({} as ISearchType)

export const SearchContext :FC=({ children })=>{


  const [searchText,setSearchText]=useState('')
  const [searchInput,setSearchInput]=useState<any | null>('')
  const [searchedColumn,setSearchedColumn]=useState<any | null>('')
  const [inputSearchValue,setInputSearchValue]=useState('')
   
  useEffect(()=>{
    //handleReset()
  },[])

    const getColumnSearchProps = (dataIndex:any) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }:any) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                setSearchInput(node) ;
              }}
              placeholder={`Pesquisar ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >Pesquisa
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Limpar
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                   confirm({ closeDropdown: false });
                   setSearchedColumn(dataIndex);
                   handleSearch(selectedKeys, confirm, dataIndex)
                  
                }}
              >
                Filtrar
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered:any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value:any, record:any) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: (visible:any) => {
          if (visible) {
            setTimeout(() => searchInput.select(), 100);
          }
        },
        render: (text:any) =>
          searchText === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
     const handleSearch = (selectedKeys:any, confirm:any, dataIndex:any) => {
         //setInputSearchValue('')  
       
         setInputSearchValue(selectedKeys[0])
         confirm();
         setSearchText(selectedKeys[0]);
         setSearchedColumn(dataIndex);
      };
    
     const handleReset = (clearFilters?:any) => {
        clearFilters();
        setSearchedColumn("");
      };

    return(
        <Context.Provider  value={{ getColumnSearchProps,inputSearchValue }}>
           {  children }
        </Context.Provider>
    )
}

export const UseSearchContext=():ISearchType=>{
   const getSearchContext=useContext(Context)
   if(!getSearchContext){
       throw new Error("Contexto de pesquisa não existe!")
   }

   return getSearchContext
}