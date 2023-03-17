import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) {
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    
    
  }; 
  
  function minus(e) {
    
    // Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
  
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
    // Add the code for the plus function 
  }; 
  
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
  
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  }; 
  
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
    // Add the code for the resetResult function 
  }; 

  let inputStyle = {
    display : 'flex', 
    alightItems : 'center', 
    justifyContent : 'center'
  }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Result is: {result} 
        </p> 
        <div style={inputStyle}>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 

        </div>
        <button onClick={plus}>add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
