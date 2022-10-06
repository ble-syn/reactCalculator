


function App() {

  return (
    const numClick = (event) => {
      event.preventDefault()
      let value = event.target.value
      console.log(value)
  
  }
  
    <main id="container">
      <div class="calculator">
          <div id="calculator-display">0</div>

          <div class="calculator-keys">
              <button onClick={numClick} class="gray">AC</button> 
              <button onClick={numClick} class="gray">+/-</button>
              <button onClick={numClick} class="gray">%</button>
              <button onClick={numClick} class="yellow">/</button>
              <button onClick={numClick}>9</button>
              <button onClick={numClick}>8</button>
              <button onClick={numClick}>7</button>
              <button onClick={numClick} class="yellow">x</button>
              <button onClick={numClick}>4</button>
              <button onClick={numClick}>5</button>
              <button onClick={numClick}>6</button>
              <button onClick={numClick} class= "yellow">-</button>
              <button onClick={numClick}>1</button>
              <button onClick={numClick}>2</button>
              <button onClick={numClick}>3</button>
              <button onClick={numClick} class="yellow">+</button>
              <button onClick={numClick} class="zero" >0</button>
              <button onClick={numClick} data-action="decimal">.</button>
              <button onClick={numClick} class="yellow">=</button>
          </div>
      </div>
    </main>
  )
}

export default App;
