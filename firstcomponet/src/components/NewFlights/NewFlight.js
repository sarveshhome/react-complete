import React from 'react';

import './NewFlight.css';
import FlightForm  from './FlightForm';
const NewFlight = (props) => {

    const saveFlightDataHandler=(enteredFlightData)=>{
        const flightData={
            ...enteredFlightData,
            id: Math.random().toString()
        };
        //console.log(flightData);
        props.onAddFlight(flightData);
    };
    return (
    <div className="new-flight">
        <FlightForm onSaveFlightData={saveFlightDataHandler}/>
    </div>
    );
};

export {NewFlight};

