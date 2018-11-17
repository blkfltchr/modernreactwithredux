import React from 'react';
import faker from 'faker';

const RandomDate = () => {
    return (
        <div className="metadata">
            <span className="date">{faker.date.weekday()} at {faker.random.number({min:1, max:12})}:{faker.random.number({min:10, max:59})}PM</span>
        </div>
    )
}

export default RandomDate;