import React from 'react';

const FlightCard =(props) =>{        
            const classes = 'flightcard ' + props.className;
            return (<div className={classes}>{props.children}</div>);        
}
export default FlightCard;