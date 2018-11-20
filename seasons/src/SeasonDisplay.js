import React from 'react';
import WhatToWear from './WhatToWear'
import './index.css'

const seasonConfig = {
    Summer: {
        whatToWear: 'It\'s sundress season',
        iconName: 'sun'
    },
    Winter: {
        whatToWear: 'Jackets and long johns today',
        iconName: 'snowflake'
    }
}

const getHemisphere = (lat) => {
    return lat > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
};

const getSeason = (lat, month) => {
    if (month >2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {whatToWear, iconName} = seasonConfig[season] 
    return (
        <div className={`season-display ${season}`}>
            <div>
                <i className={`icon-left massive ${iconName} icon`} />
                <div className="div-wrapper">
                    <div>
                        <h2>1. Where am I?</h2>
                        <p>{(getHemisphere(props.lat))}</p>
                    </div>
                    <div>
                        <h2>2. What are my coordinates?</h2>
                        <p>Latitude: {props.lat}</p>
                        <p>Longitude: {props.long}</p>
                    </div>
                </div>
                <div className="div-wrapper">
                    <div>
                        <h2>3. What season is it?</h2>
                        <p>{season}</p>
                    </div>
                    <div>
                        <h2>4. What should I wear?</h2>
                        <p>{whatToWear}</p>
                    </div>
                </div>
                <WhatToWear season={season}/>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
        </div>
        );
}
 
export default SeasonDisplay;