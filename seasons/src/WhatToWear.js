import React from 'react';
import womenSummer from './assets/summer-clothes-for-women_freepik.jpg';
import manSummer from './assets/summer-clothes-for-man_freepik.jpg';
import womenWinter from './assets/winter-clothes-for-women_freepik.jpg';
import manWinter from './assets/winter-clothes-for-man_freepik.jpg';

const WhatToWear = (props) => {
    const whatToWear = props.season === 'Winter' ? 'Jackets and long johns today' : 'It\'s sundress season'
    
        if (props.season === 'Summer') {
            return (
                <div>
                    <p>{whatToWear}</p>
                    <div style={{display: "flex"}}>
                        <img src={womenSummer} alt="Summer clothes for women" />
                        <img src={manSummer} alt="Summer clothes for man" />
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>{whatToWear}</p>
                    <div style={{display: "flex"}}>
                        <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer"><img src={womenWinter} alt="Winter clothes for women" style={{width: "30vw", height: "30vw"}}/></a>
                        <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer"><img src={manWinter} alt="Winter clothes for man" style={{width: "30vw", height: "30vw"}} /></a>
                    </div>
                </div>
            )
        }
}
 
export default WhatToWear;