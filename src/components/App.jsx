import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [color, setColor] = useState("#ffffff");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function mouseOver() {
    setColor("#00ff00");
  }

  function mouseout() {
    setColor("#ffffff");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        onMouseOver={mouseOver}
        onMouseOut={mouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
