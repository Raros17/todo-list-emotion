import React from "react";
import { listState } from "./atoms/listState";
import { useRecoilState } from "recoil";
import { MdDelete } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function TodoItem({item}) {
  const [todo, setTodo] = useRecoilState(listState);

  const handleDeleteItemClick = (itemId)=>{
    const newTodoItemList = todo.filter((item )=> item.id !== itemId);
    setTodo(newTodoItemList);
  }

  return (
    <div css={todoItemContainer}>
        <input type="checkbox" css={isDoneCheckbox}/>
        <span css={itemContent}>{item.content}</span>
        <div>
          <button css={[itemBtn, btnMargin]}><FaPenToSquare /></button>          
          <button css={itemBtn} onClick={()=> handleDeleteItemClick(item.id)}><MdDelete/></button>
        </div>
    </div>
  );
}

export default TodoItem;

const todoItemContainer = css`
  display: flex;
  justify-content: left;
  margin: 20px;
`

const isDoneCheckbox = css`
  zoom: 1.4;
  cursor: pointer;
`

const itemContent = css`
  font-size: 20px;
  font-weight: 700;
  margin:0 10px;
`
const itemBtn = css`
  cursor: pointer;
  border-radius: 5px;
`

const btnMargin = css`
  margin-right: 5px;
`
