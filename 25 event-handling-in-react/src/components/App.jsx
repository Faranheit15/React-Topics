import React, { useState } from "react";

function App() {

  // let headingText = "Hello"

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function clickEvent(){
    setHeadingText("Bye")
  }

  function mouseOverEvent(){
    setMouseOver(true);
  }

  function mouseOutEvent(){
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{backgroundColor : isMouseOver? "black" : "white"}}
        onClick={clickEvent}
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
      >
        Submit</button>
    </div>
  );
}

export default App;
