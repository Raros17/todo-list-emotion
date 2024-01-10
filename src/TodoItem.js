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
    <div css={css({display:"flex", justifyContent:"left", margin:"20px"})}>
        <div><input type="checkbox" css={css({zoom:"1.4", cursor:"pointer"})}/></div>
        <span css={css({fontSize:"20px", fontWeight:"700", marginLeft:"10px", marginRight:"10px"})}>{item.content}</span>
        <div>
          <button css={css({cursor:"pointer"})}><FaPenToSquare /></button>          
          <button css={css({cursor:"pointer"})} onClick={()=> handleDeleteItemClick(item.id)}><MdDelete/></button>
        </div>
    </div>
  );
}

export default TodoItem;
