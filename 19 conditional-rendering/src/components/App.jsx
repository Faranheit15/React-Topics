import React from "react";
import Form from "./Form";

let isLoggedIn = true

function App() {
  return (
    <div className="container">
      {isLoggedIn?<h1>Hello</h1>:<Form />}
    </div>
  );
}

export default App;
