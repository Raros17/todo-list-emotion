import './App.css';
function App() {
  return (
    <div className="App">
      <section style={{backgroundColor:"gray", height:"100px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"25px", fontWeight:"800"}}>
        오늘은 뭘 해볼까?!
      </section>
      <section>
        <section>
          <input type="text" placeholder='할일을 입력하세요' style={{height:"30px", borderRadius:"20px", marginRight:"10px"}}></input>
          <button>추가하기</button>
          </section>
        <ul>
          <li style={{marginTop:"10px", marginBottom:"10px", fontWeight:"800", fontSize:"20px"}}>안경 닦기</li>
          <li style={{marginTop:"10px", marginBottom:"10px", fontWeight:"800", fontSize:"20px"}}>아메리카노 먹기</li>
        </ul>
        {/* 성공할 때마다 참 잘했어요 하면서 하트가 막 떠오르게 못함? */}
      </section>
    </div>
  );
}

export default App;
