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
        <div css={css({minWidth:"70px"})}>
          <button css={ [modifyBtn, deleteBtn]}><FaPenToSquare /></button>          
          <button css={deleteBtn} onClick={()=> handleDeleteItemClick(item.id)}><MdDelete/></button>
        </div>
    </div>
  );
}

export default TodoItem;

const todoItemContainer = css`
  display: flex;
  justify-content: left;
  margin: 20px;
  label: todo-item-container;

`

const isDoneCheckbox = css`
  zoom: 1.4;
  cursor: pointer;
`

const itemContent = css`
  font-size: 20px;
  font-weight: 700;
  margin:0 10px;
  text-align: start;
`
const deleteBtn = css`
  cursor: pointer;
  border-radius: 5px;
  label: delete-btn;
`

const modifyBtn = css`
  margin-right: 5px;
  label: modify-btn;
`
