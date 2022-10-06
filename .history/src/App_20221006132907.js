


function App() {

  return (
  
  <main id="container">
    <div class="calculator">
        <div id="calculator-display">0</div>

        <div class="calculator-keys">
            <button class="gray">AC</button> 
            <button class="gray">+/-</button>
            <button class="gray">%</button>
            <button class="yellow">/</button>
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button class="yellow">x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class= "yellow">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="yellow">+</button>
            <button class="zero" >0</button>
            <button data-action="decimal">.</button>
            <button class="yellow">=</button>
        </div>
    </div>
  </main>
  )
}

export default App;
