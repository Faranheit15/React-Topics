//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
const time = date.getHours();
let greeting = ""
const customStyle = {
    color: "red"
}

if (time>0 && time<=12){
    customStyle.color="red";
    greeting = "Good Morning!"
}
else if (time>12 && time<=18){
    customStyle.color="green"
    greeting = "Good Afternoon!"
}
else{
    customStyle.color="blue"
    greeting = "Good Evening!"
}

ReactDOM.render(
    <div>
        <h1 className="heading" style={customStyle}>{greeting}</h1>
    </div>,
document.getElementById("root"));