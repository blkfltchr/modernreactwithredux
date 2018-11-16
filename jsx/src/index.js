// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
    const buttonStyle = {backgroundColor:"green", color:"white", borderRadius:"5px"}
    const buttonText = {text: 'Click me!'};

    return <div>
        <h2>Hello world!</h2>
        <ul>
            <li>This is a very basic React app.</li>
            <li>It's designed to help me learn how JSX works.</li>
            <li>Isn't that cool?</li>
        </ul>
        <label className="label" htmlFor="name">
            Enter name:
        </label>
        <input id="name" type="text" />
        <button style={buttonStyle}>
            {buttonText.text}
        </button>
        </div>
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);