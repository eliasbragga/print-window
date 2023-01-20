import logo from "./logo.svg";
import "./App.css";
import { marginBottom } from "responsively/dist/utils/marginFunctions/marginFunctions";
import { useState } from "react";

function App() {

  const [dot, setDot] = useState([])

  const undoDot = (event) => {
    event.stopPropagation()
  }

  const reundoDot = (event) => {
    event.stopPropagation()
  }


  const clearDots = (event) => {
    event.stopPropagation()
    setDot([])
  }

  const handleClick = (event) => {
 
    const position_x = {
      clientX: event.clientX,
      clientY: event.clientY
    }

    setDot((event) => [...event,position_x])
    console.log(dot)
  }

  return (
    <div className="App">
      <div className="container" onClick={handleClick}>
        <button onClick={undoDot} style={{ marginRight: "5px" }}>Desfazer</button>
        <button onClick={reundoDot} style={{ marginLeft: "5px" }}>Refazer</button>
        <button onClick={clearDots} style={{ marginLeft: "5px" }}>Limpar</button>
        {
          dot.map((e) => {
           return <span  className="dot" style={{top:e.clientY, left:e.clientX}}></span>
          })
        }
        
      </div>
    </div>
  );
}

export default App;
