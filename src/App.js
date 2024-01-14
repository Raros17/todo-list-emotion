import './styles/App.css';
import TodoItem from './TodoItem';
import {listState} from './atoms/listState';
import { inputState } from './atoms/inputState';
import { useRecoilState } from 'recoil';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Modal from './components/Modal';
import Header from './Header';
import { searchState } from './atoms/searchState';
import { filteredListState } from './atoms/filteredListState';

function App() {
  const [todo, setTodo] = useRecoilState(listState);
  const [inputValue, setInputValue] = useRecoilState(inputState);
  const [filteredTodo, setFilteredTodo] = useRecoilState(filteredListState);
  const [searchValue, setSearchValue] = useRecoilState(searchState);

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
        setFilteredTodo('')
        setSearchValue('')
      } else {
        alert("동일한 아이템이 있습니다.");
        setFilteredTodo('')
        setSearchValue('')
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
      <Header />
      <section css={itemSection}>
        <section className='input-section'>
          <h2 css={pageTitle}>목록에 아이템 담기</h2>
          <input type="text" placeholder='아이템을 새로 추가하세요' 
          css={inputLine}  
          value={inputValue}  onKeyDown={handleOnKeyPress} onChange={handleInputChange}></input>
          <button css={addBtn}  
          onClick={handleAddBtnClick} >추가하기
          </button>
          </section>
        <section css={listSection} className='list-section'>
          <div css={itemListContainer}>
            {/*아이템이 없다면? 검색한 아이템이 없습니다 보여줘야되는데 뭐야 조건이 세개임....*/}
            {filteredTodo.length>0 ? (
              filteredTodo.map(item => (
                <TodoItem key={item.id} item={item}></TodoItem>
              )) 
              ):
                searchValue.trim() !== ''?(
                  <div css={emptyItem}>일치하는 항목이 없습니다.</div>
                ):(todo.map(item => ( <TodoItem key={item.id} item={item}/>)
            ))
            }
            
            </div>
        </section>
        <button onClick={deleteItemList} css={deleteAllBtn}>리스트 전체 삭제</button>
        {/* 성공할 때마다 참 잘했어요 하면서 하트가 막 떠오르게 못함? */}
      </section>
    </div>
  );
}
export default App;

const itemSection = css`
  margin-top: 150px;
`

const emptyItem = css`
  height: 100px;
  padding-top: 50px;;
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