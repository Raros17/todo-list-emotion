import React from "react";
import { listState } from "../atoms/listState";
import { useRecoilState } from "recoil";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Modal() {
  const [todo, setTodo] = useRecoilState(listState);

  const deleteItemList = () => {
    setTodo([])
  }
  return (
    <section css={css({display:"flex", justifyContent:"center"})}>
        <div css={modalContainer}>
            <button css={modalCloseBtn}>x</button>
            <p>정말 삭제하시겠습니까?</p>
            <div>
                <button onClick={deleteItemList}>예</button>
                <button>아니오</button>
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
    border: 3px solid #d94844;
    color: #333;
    z-index: 99;
    border-radius: 30px;
    font-family: 'seolleimcool-SemiBold';
    font-size: 20px;;
`

const modalCloseBtn = css`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    background: #d94844;
    color:#fff;
    font-size: 20px;
    font-family: 'seolleimcool-SemiBold';
    cursor: pointer;
`