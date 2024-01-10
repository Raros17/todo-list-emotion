import React from "react";
import { listState } from "./atoms/listState";
import { useRecoilState } from "recoil";



function TodoItem({item}) {
  const [todo, setTodo] = useRecoilState(listState);

  const handleDeleteItemClick = (itemId)=>{
    const newTodoItemList = todo.filter((item )=> item.id !== itemId);
    setTodo(newTodoItemList);
  }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <div><input type="checkbox"/></div>
        <span>{item.content}</span>
        <div>
          <button>수정</button>
          <button onClick={()=> handleDeleteItemClick(item.id)}>삭제</button>
        </div>
    </div>
  );
}

export default TodoItem;
