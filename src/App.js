import './App.css';
import TodoItem from './TodoItem';
import { useState } from 'react';


const mock = [
  {
    id: 0,
    isDone: false,
    content: "사과"
  },
  {
    id: 1,
    isDone: false,
    content: "배"
  }
]

function App() {
  const [todo, setTodo] = useState(mock);
  return (
    <div className="App">
      <section style={{backgroundColor:"orange", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"25px", fontWeight:"800"}}>
        장 봐올 리스트
      </section>
      <section>
        <section>
          <h2>장바구니 목록에 아이템 담기</h2>
          <input type="text" placeholder='할일을 입력하세요' style={{height:"30px", borderRadius:"20px", marginRight:"10px"}}></input>
          <button>추가하기</button>
          </section>
        <section>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </section>
        {/* 성공할 때마다 참 잘했어요 하면서 하트가 막 떠오르게 못함? */}
      </section>
    </div>
  );
}

export default App;
