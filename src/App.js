
import './App.css'
import {useState} from 'react';


function App() {
  const [firstNum,setFNum] =useState("");
  const [secondNum,setSNum] =useState("");
  const [result, setResult] = useState("");

  const ops = ['+','-','*','/','%'];

  const addClick= (number)=>{
    setResult(parseInt(firstNum)+parseInt(secondNum));
  }

  const minClick= (number)=>{
    setResult(parseInt(firstNum)-parseInt(secondNum));
  }

  const multClick= (number)=>{
    setResult(parseInt(firstNum)*parseInt(secondNum));
  }

  const divClick= (number)=>{
    setResult(parseInt(firstNum)/parseInt(secondNum));
  }

  const remClick= (number)=>{
    setResult(parseInt(firstNum)+parseInt(secondNum));
  }

 console.log(result);


  return (
    <div className="App">
      

      <div className="calculator">
        <div className="display">
          <h1> Calculator App</h1>

        <div class=" p-4">
          <input onChange={(number)=>setFNum(number.target.value)} value={firstNum} type="text" className="form-control" placeholder="Enter the First Number" />
          <br></br>
          <input onChange={(number)=>setSNum(number.target.value)} value={secondNum} type="text" className="form-control" placeholder="Enter the Second Number" />
      

          <div className="operators">
            <button onClick={addClick} type="button" className="btn btn-outline-light">+</button>
            <button onClick={minClick} type="button" className="btn btn-outline-light">-</button>
            <button onClick={multClick} type="button" className="btn btn-outline-light">*</button>
            <button onClick={divClick} type="button" className="btn btn-outline-light">/</button>
            <button onClick={remClick} type="button" className="btn btn-outline-light">%</button>
          </div>

          <div class=" p-4 ">
            <input onChange={setResult} value={result} type="text" className="form-control" readOnly/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
