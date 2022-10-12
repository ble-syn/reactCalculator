import {useState} from "react";

function App() {
  const [numDisplay, setNumDisplay] = useState("")
  const operators = ["+", "-", "*", "/"]

  const numClick = (event) => {
  event.preventDefault()
  if(numDisplay === "0" && event.target.value !== "."){
    return
  }
  if (operators.includes(numDisplay[numDisplay.length - 1]) && operators.includes(event.target.value)) {
    return
  }
  let value = event.target.value
  setNumDisplay(numDisplay + value)
}


const deleteNum = () => {
  setNumDisplay(numDisplay.slice(0, -1))
}
const reset = () => {
  setNumDisplay("")
}
const percent = () => {
  setNumDisplay(numDisplay / 100)
}
const equals = () => {
  setNumDisplay(eval(numDisplay))
}

  return (
    <main id="container">
      <div className="calculator">
          <div><input onChange={(e)=>{setNumDisplay(e.target.value)}} id="calculator-display" type="text" placeholder="0" value={numDisplay} /></div>

        <div className="calculator-keys">

          <button onClick={reset} value=" " className="gray">AC</button> 
          <button onClick={deleteNum} value="" className="gray">Del</button>
          <button onClick={percent} value="%" className="gray">%</button>
          <button onClick={numClick} value="/" className="yellow">/</button>
          <button onClick={numClick} value="9">9</button>
          <button onClick={numClick} value="8">8</button>
          <button onClick={numClick} value="7" >7</button>
          <button onClick={numClick} value="*" className="yellow">X</button>
          <button onClick={numClick} value="4">4</button>
          <button onClick={numClick} value="5">5</button>
          <button onClick={numClick} value="6">6</button>
          <button onClick={numClick} value="-" className= "yellow">-</button>
          <button onClick={numClick} value="1">1</button>
          <button onClick={numClick} value="2">2</button>
          <button onClick={numClick} value="3">3</button>
          <button onClick={numClick} value="+" className="yellow">+</button>
          <button onClick={numClick} value="0" className="zero" >0</button>
          <button onClick={numClick} value="." data-action="decimal">.</button>
          <button onClick={equals} value="=" className="yellow">=</button>

        </div>
      </div>
    </main>
  )
}

export default App;
