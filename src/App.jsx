import Counter from "./Counter";
import Batsman from "./Batsman";
import Bolar from "./Bolar";
import "./App.css";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClicked3 = () => {
    alert("clicked3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <Counter></Counter>
      <Batsman></Batsman>
      <Bolar></Bolar>
      <h3>Vite + React</h3>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("click2");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClicked3}>Clicked me3</button>
      <button onClick={() => alert("clicked4")}>click me4</button>

      <button onClick={() => handleAdd5(10)}>Click Add</button>
    </>
  );
}

export default App;
