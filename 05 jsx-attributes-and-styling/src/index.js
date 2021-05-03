import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const randomImage = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">My Favourite Foods</h1>
    <ul>
      <li>Biriyani</li>
      <li>Pizza</li>
      <li>Burger</li>
      <img className="randomImage" alt="random image" src={randomImage} />
      <img className="img-src" alt="Biriyani" src="https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
      <img className="img-src" alt="Pizza" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80" />
      <img className="img-src" alt="Burger" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    </ul>
  </div>,
  document.getElementById("root")
);
