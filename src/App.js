import { useState } from "react";
import "./App.css";

function App() {
  const [px, setPx] = useState(24);
  const [hexCode, setHexCode] = useState("ff0000");

  const doubleInSize = () => {
    setPx(px * 2);
  };
  const changeColor = () => {
    const randomHexCode = Math.floor(Math.random() * 16777215).toString(16);
    setHexCode(randomHexCode);
  };

  return (
    <div className="app">
      <button
        className="stop"
        onClick={() => {
          doubleInSize();
          changeColor();
        }}
        style={{
          height: px * 4 + "px",
          width: px * 4 + "px",
          fontSize: px + "px",
          color: "#" + hexCode,
          borderColor: "#" + hexCode,
          borderWidth: Math.floor(px / 2) + "px",
        }}
      >
        STOP
      </button>
    </div>
  );
}

export default App;
