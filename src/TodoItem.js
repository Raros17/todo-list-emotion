function TodoItem() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <div><input type="checkbox"/></div>
        <span>담을 아이템</span>
        <button>삭제</button>
    </div>
  );
}

export default TodoItem;
