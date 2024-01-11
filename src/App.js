import './styles/App.css';
import TodoItem from './TodoItem';
import {listState} from './atoms/listState';
import { inputState } from './atoms/inputState';
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

  const deleteItemList = () => {
    setTodo([])
  }

  return (
    <div className="App">
      <section css={header}>
        🍒장 봐올 리스트🍎
      </section>
      <section>
        <section className='input-section'>
          <h2 css={pageTitle}>목록에 아이템 담기</h2>
          <input type="text" placeholder='살 목록을 입력하세요' 
          css={inputLine}  
          value={inputValue}  onKeyDown={handleOnKeyPress} onChange={handleInputChange}></input>
          <button css={addBtn}  
          onClick={handleAddBtnClick} >추가하기</button>
          </section>
        <section css={listSection} className='list-section'>
          <div css={itemListContainer}>
            {todo.map(item => ( <TodoItem key={item.id} item={item}/>
            ))}
            </div>
        </section>
        <button onClick={deleteItemList} css={deleteAllBtn}>리스트 전체 삭제</button>
        {/* 성공할 때마다 참 잘했어요 하면서 하트가 막 떠오르게 못함? */}
      </section>
    </div>
  );
}
export default App;

const header = css`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 29px;
  font-weight: 600;
  border-bottom: 3px solid #ccc;
  font-family: 'seolleimcool-SemiBold';
`

const pageTitle = css`
  font-weight: 800;
  font-size: 25px;
  text-align: start;
  padding-left: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "seolleimcool-SemiBold";
`

const inputLine = css`
  height: 35px;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
  width: 40%;
  padding-left: 15px;
  font-family: "SejonghospitalBold";
`

const addBtn = css`
  height: 35px;
  border-radius: 30px;
  background: #777;
  color: #fff;
  cursor: pointer;
  font-family: "SejonghospitalBold";
  font-size: 16px;
`

const deleteAllBtn = css`
  height: 30px;
  margin-top: 50px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  background: red;
  color: #fff;
  font-family: "seolleimcool-SemiBold";
  width: 150px;
`

const itemListContainer = css`
  width: 45%;
  margin-top: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: "seolleimcool-SemiBold";
`

const listSection = css`
  display: flex;
  justify-content: center;
`