import {useState} from "react";


function App() {
  const [numDisplay, setNumDisplay] = useState("")

const numClick = (event) => {
      event.preventDefault()
      let value = event.target.value
      setNumDisplay(numDisplay + value)
}
const deleteNum = () => {
  setNumDisplay(numDisplay.slice(0, -1))
}
const reset = () => {
  setNumDisplay("")
}
const equals = () => {
  setNumDisplay(eval(numDisplay))
}

  return (
    <main id="container">
      <div class="calculator">
          <div><input id="calculator-display" type="text" placeholder="0" value={numDisplay} /></div>

          <div class="calculator-keys">
              <button onClick={reset} value=" " class="gray">AC</button> 
              <button onClick={numClick} value="-" class="gray">+/-</button>
              <button onClick={numClick} value="%" class="gray">%</button>
              <button onClick={numClick} value="/" class="yellow">/</button>
              <button onClick={numClick} value="9">9</button>
              <button onClick={numClick} value="8">8</button>
              <button onClick={numClick} value="7" >7</button>
              <button onClick={numClick} value="*" class="yellow">x</button>
              <button onClick={numClick} value="4">4</button>
              <button onClick={numClick} value="5">5</button>
              <button onClick={numClick} value="6">6</button>
              <button onClick={numClick} value="-" class= "yellow">-</button>
              <button onClick={numClick} value="1">1</button>
              <button onClick={numClick} value="2">2</button>
              <button onClick={numClick} value="3">3</button>
              <button onClick={numClick} value="+" class="yellow">+</button>
              <button onClick={numClick} value="0" class="zero" >0</button>
              <button onClick={numClick} value="." data-action="decimal">.</button>
              <button onClick={equals} value="=" class="yellow">=</button>
          </div>
      </div>
    </main>
  )
}

export default App;
