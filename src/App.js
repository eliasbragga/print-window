import logo from "./logo.svg";
import "./App.css";
import { marginBottom } from "responsively/dist/utils/marginFunctions/marginFunctions";
import { useState, useEffect } from "react";

function App() {
  const [dot, setDot] = useState([]);
  const [reUndo, setreUndo] = useState([]);
  const [undo, setUndo] = useState([]);
  const [lastItem, setLastItem] = useState([]);

  const undoDot = (event) => {
    event.stopPropagation();
    if (dot.length > 0) {
      let lastItemAUX = dot.splice(dot.length - 1, 1);
      setreUndo(() => [...reUndo, ...lastItemAUX]);
      let teste = dot.filter(
        (e) =>
          e.clientX !== lastItemAUX[0].clientX && e.clientY !== lastItemAUX[0].clientY
      )
      setDot(teste);
    }
  };

  const reundoDot = (event) => {
    event.stopPropagation();
    if (reUndo.length > 0) {
      let lastItemAUX = reUndo.splice(reUndo.length - 1, 1);
      setDot(() => [...dot, ...lastItemAUX]);
    }
  };

  const clearDots = (event) => {
    event.stopPropagation();
    if (dot.length > 0) {
      setDot([]);
    }
  };

  const handleClick = (event) => {
    const position_x = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    setDot((event) => [...event, position_x]);
  };

  
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "z") {
      if (dot.length > 0) {
        let lastItemAUX = dot.splice(dot.length - 1, 1);
        setreUndo(() => [...reUndo, ...lastItemAUX]);
        let teste = dot.filter(
          (e) =>
            e.clientX !== lastItemAUX.clientX && e.clientY !== lastItemAUX.clientY
        );
        setDot(teste);
      }
    }
  };

    useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
 

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={undoDot} style={{ marginRight: "5px" }}>
          Desfazer
        </button>
        <button onClick={reundoDot} style={{ marginLeft: "5px" }}>
          Refazer
        </button>
        <button onClick={clearDots} style={{ marginLeft: "5px" }}>
          Limpar
        </button>
        {dot.map((e) => {
          return (
            <span
            onDoubleClick={undoDot}
              className="star"
              style={{ top: e.clientY, left: e.clientX }}
            ></span>
          );
        })}

      </div>
      <div className="container" onClick={handleClick}>
      </div>
    </div>
  );
}

export default App;
