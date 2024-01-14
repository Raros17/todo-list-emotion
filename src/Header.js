import './styles/App.css';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
      <header css={header}>
        <span>🍒장 봐올 리스트🍎</span>
        <div>
            <input type='text' placeholder='아이템을 검색해보세요' css={searchBox}></input>
            <button css={searchBtn}><IoSearch/></button>
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
    width: 200px;
`
const searchBtn = css`
    border-radius: 50%;
    height: 25px;
    width: 25px;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #888;
`