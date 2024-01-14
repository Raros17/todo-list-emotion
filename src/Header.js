import './styles/App.css';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoSearch } from "react-icons/io5";
import { searchState } from './atoms/searchState';
import { useRecoilState } from 'recoil';
import { filteredListState } from './atoms/filteredListState';
import { listState } from './atoms/listState';

function Header() {
    const [searchValue, setSearchValue] = useRecoilState(searchState);
    const [filteredTodo, setFilteredTodo] = useRecoilState(filteredListState);
    const [todo, setTodo] = useRecoilState(listState);

    const searchItems = () =>{
        const filteredItems = todo.filter(item=>
          item.content.toLowerCase().includes(searchValue.trim().toLowerCase()))
        setFilteredTodo(filteredItems);        
        if (filteredItems.length > 0) {
            setSearchValue('');
          }
      }

    const handleOnKeyPress = (e) =>{
        if(e.key==='Enter'){
            searchItems()            
        }
      }

    const searchValueChange = () => {
        if(searchValue.trim()!== ''){
            setSearchValue(searchValue.trim());
            searchItems()
        }     
      }
    
  return (
      <header css={header}>
        <span>🍒장 봐올 리스트🍎</span>
        <div>
            <input type='text' value={searchValue} onChange={e=> setSearchValue(e.target.value)} placeholder='아이템을 목록에서 검색해보세요' css={searchBox} onKeyDown={handleOnKeyPress}></input>
            <button css={searchBtn} onClick={searchValueChange}><IoSearch/></button>
        </div>
      </header>
      )
}
export default Header;

const header = css`
  height: 120px;
  position: fixed;
  background-color: rgb(255,255,255,0.9);
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 29px;
  font-weight: 600;
  border-bottom: 3px solid #ccc;
  font-family: 'seolleimcool-SemiBold';
`

const searchBox = css`
    border-radius: 20px;
    margin-top: 15px;
    height: 25px;
    padding-left: 10px;
    width: 250px;
    font-family: "seolleimcool-SemiBold";
`
const searchBtn = css`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    background-color: #ccc;
    border: 1px solid #888;    
    transition: all 0.5 ease;
    &:hover {
        transition: all 0.5 ease;
        background-color: #fff;
    }
`