import React from 'react';
import womenSummer from './assets/summer-clothes-for-women_freepik.jpg';
import manSummer from './assets/summer-clothes-for-man_freepik.jpg';
import womenWinter from './assets/winter-clothes-for-women_freepik.jpg';
import manWinter from './assets/winter-clothes-for-man_freepik.jpg';
import './index.css'

const WhatToWear = (props) => {
    
        if (props.season === 'Summer') {
            return (
                <div className="div-wrapper">
                    <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">
                        <img src={womenSummer} alt="Summer clothes for women" className="img-wrapper"/>
                    </a>
                    <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">
                        <img src={manSummer} alt="Summer clothes for man" className="img-wrapper"/>
                    </a>
                </div>
            )
        } else {
            return (
                <div className="div-wrapper">
                    <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">
                        <img src={womenWinter} alt="Winter clothes for women" className="img-wrapper"/>
                    </a>
                    <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">
                        <img src={manWinter} alt="Winter clothes for man" className="img-wrapper"/>
                    </a>
                </div>
            )
        }
}
 
export default WhatToWear;