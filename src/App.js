import './App.css';
import TodoItem from './TodoItem';
import {inputState, listState} from './atoms/listState';
import { useRecoilState } from 'recoil';

function App() {
  const [todo, setTodo] = useRecoilState(listState);
  const [inputValue, setInputValue] = useRecoilState(inputState);

  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleAddBtnClick = () => {
    if(inputValue.trim() !== ''){
      const newItem = {
        id: todo.length,
        isDone: false,
        content: inputValue,
      }

      setTodo([...todo, newItem]);

      setInputValue('')
    }
  }

  const handleOnKeyPress = (e) =>{
    if(e.key==='Enter'){
      handleAddBtnClick();
    }
  }

  return (
    <div className="App">
      <section style={{backgroundColor:"orange", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"25px", fontWeight:"800"}}>
        장 봐올 리스트
      </section>
      <section>
        <section>
          <h2>장바구니 목록에 아이템 담기</h2>
          <input type="text" placeholder='할일을 입력하세요' style={{height:"30px", borderRadius:"20px", marginRight:"10px"}} value={inputValue}  onKeyDown={handleOnKeyPress} onChange={handleInputChange}></input>
          <button onClick={handleAddBtnClick} >추가하기</button>
          </section>
        <section>
          {todo.map(item => ( <TodoItem key={item.id} item={item}/>))}
        </section>
        {/* 성공할 때마다 참 잘했어요 하면서 하트가 막 떠오르게 못함? */}
      </section>
    </div>
  );
}

export default App;
