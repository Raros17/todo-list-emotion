import './App.css';
import TodoItem from './TodoItem';
import {inputState, listState} from './atoms/listState';
import { useRecoilState } from 'recoil';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const [todo, setTodo] = useRecoilState(listState);
  const [inputValue, setInputValue] = useRecoilState(inputState);

  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleAddBtnClick = () => {
    if (inputValue.trim() !== '') {
      if (!isDuplicateItem()) {
        const newItem = {
          id: todo.length,
          isDone: false,
          content: inputValue,
        };
        setTodo([...todo, newItem]);
        setInputValue('');
      } else {
        alert("동일한 아이템이 있습니다.");
      }}
  }

  const isDuplicateItem = () => {
    return todo.some((item) => item.content === inputValue);
  };

  const handleOnKeyPress = (e) =>{
    if(e.key==='Enter'){
      handleAddBtnClick();
    }
  }

  return (
    <div className="App">
      <section css={css({height:"100px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"29px", fontWeight:"600", borderBottom:"3px solid #ccc"
      })}>
        🍒장 봐올 리스트🍎
      </section>
      <section>
        <section>
          <h2 css={css({fontWeight:"800", fontSize:"25px", textAlign:"start", paddingLeft:"200px", marginTop: "20px", marginBottom:"20px"})}>목록에 아이템 담기</h2>
          <input type="text" placeholder='살 목록을 입력하세요' 
          css={css({height:"35px", borderRadius:"20px", marginRight:"10px", width: "40%", paddingLeft:"15px"})}  
          value={inputValue}  onKeyDown={handleOnKeyPress} onChange={handleInputChange}></input>
          <button css={css({height: "35px", borderRadius:"30px", background:"#777", color: "#fff", cursor:"pointer"})}  
          onClick={handleAddBtnClick} >추가하기</button>
          </section>
        <section css={css({display:"flex", justifyContent:"center"})}>
          <div css={css({width:"45%", marginTop:"50px", border:"1px solid #ccc", borderRadius:"10px"})}>
            {todo.map(item => ( <TodoItem key={item.id} item={item}/>
            ))}
            </div>
        </section>
        {/* 성공할 때마다 참 잘했어요 하면서 하트가 막 떠오르게 못함? */}
      </section>
    </div>
  );
}

export default App;
