import React from 'react'
import './index.css'

const Loader = (props) => {
    return (
        <div class="ui segment season-display">
            <div class="ui active inverted dimmer">
                <div class="ui large text loader"><h3>{props.message}</h3></div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
};

Loader.defaultProps = {
    message: "Loading..."
};

export default Loader
