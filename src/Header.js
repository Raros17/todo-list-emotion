import './styles/App.css';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaSearch } from "react-icons/fa";
import { searchState } from './atoms/searchState';
import { useRecoilState } from 'recoil';
import { filteredListState } from './atoms/filteredListState';
import { listState } from './atoms/listState';
import { FaMoon } from "react-icons/fa";

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
        <div css={searchContainer}>
            <span>🍒장 봐올 리스트🍎</span>
            <div>
                <input type='text' value={searchValue} onChange={e=> setSearchValue(e.target.value)} placeholder='아이템을 목록에서 검색해보세요' css={searchBoxInput} onKeyDown={handleOnKeyPress}></input>
                <button css={searchBtn} onClick={searchValueChange}><FaSearch/></button>
            </div>
        </div>
        <button css={darkModeBtn}><FaMoon /></button>
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
  font-size: 29px;
  font-weight: 600;
  border-bottom: 3px solid #ccc;
  font-family: 'seolleimcool-SemiBold';
`

const darkModeBtn = css`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    right: 10rem;
    font-size: 25px;
    text-align: center;
    padding-top:5px;
    background-color: #fff;
    border: 1px solid #eb7473;
    color:#eb7473;
    &:hover {
        transition: all 0.5s ease;
        color: #f75a55;
        border: 1px solid #f75a55;
    }
    &:active {
        color: #b31208;
    }
`

const searchContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const searchBoxInput = css`
    border-radius: 20px;
    margin-top: 15px;
    height: 25px;
    padding-left: 10px;
    width: 250px;
    font-family: "seolleimcool-SemiBold";
    border: none;
    outline: 1px solid #eb7473;;
`
const searchBtn = css`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    background: #eb7473;
    color: #fff;
    font-size: 15px;
    border: none;    
    &:hover {
        transition: all 0.5 ease;
        background: #dd2120;
    }
    &:active {
        transition: all 0.5 ease;
        background: #b31d1a;
    }
`