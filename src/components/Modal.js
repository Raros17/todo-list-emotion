import React from "react";
import { listState } from "../atoms/listState";
import { useSetRecoilState } from "recoil";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Modal({setModalStateDefault}) {
  const setTodo = useSetRecoilState(listState);
  const deleteItemList = () => {
    setTodo([])
    setModalStateDefault();
  }
  return (
    <section css={css({display:"flex",justifyContent:"center", alignItems:"center"})}>
        <div css={modalContainer}>
            <button css={modalCloseBtn} onClick={setModalStateDefault}>x</button>
            <p>정말 전체를 삭제하시겠습니까?</p>
            <div css={modalBtnsContainer}>
                <button onClick={deleteItemList} css={[modalBtn, yesBtnStyle]}>예</button>
                <button css={[modalBtn, noBtnStyle]} onClick={setModalStateDefault}>아니오</button>
            </div>
        </div>        
    </section>
  );
}

export default Modal;

const modalContainer = css`
    position: absolute;
    width: 400px;
    height: 250px;
    background: #fff;
    border: 3px solid #eb7473;
    color: #333;
    z-index: 99;
    border-radius: 30px;
    font-family: 'seolleimcool-SemiBold';
    font-size: 20px;;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const modalBtnsContainer=css`
  width: 280px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const modalCloseBtn = css`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    background: #eb7473;
    color:#fff;
    font-size: 20px;
    font-family: 'seolleimcool-SemiBold';
    cursor: pointer;
    align-self: flex-end;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: none;
    padding-bottom:5px;
 &:hover{
    background-color: #f75a55;
  }
  &:active {
        background: #b31d1a;
    }
`

const modalBtn = css`
  width: 150px;
  height: 40px;
  border-radius: 80px;
  margin: 0 5px;
  cursor: pointer;
  font-family: 'seolleimcool-SemiBold';
  font-weight: 800;
  font-size: 16px;
  outline: none;
  border: 1px solid #eb7473;
`

const yesBtnStyle = css`
  background-color: #eb7473; 
  color: white;
  &:hover{
    background-color: #f75a55;
  }
  &:active {
        background: #b31d1a;
    }
`;

const noBtnStyle = css`
  background-color: #fff; 
  color: #333;
  &:hover{
    background-color: #eee;
  }
  &:active {
        background: #e0e0e0;
    }
`;