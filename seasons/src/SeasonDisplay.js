import React from 'react';
import WhatToWear from './WhatToWear'

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
    
    return (
        <div>
            <h2>Where am I?</h2>
            <p>{(getHemisphere(props.lat))}</p>
            <h2>What are my coordinates?</h2>
            <p>Latitude: {props.lat}</p>
            <p>Longitude: {props.long}</p>
            <h2>What season is it?</h2>
            <p>{season}</p>
            <h2>What should I wear?</h2>
            <WhatToWear season={season}/>
        </div>
        );
}
 
export default SeasonDisplay;