import React from 'react';

import FlightItem from './FlightItem';
import './FlightList.css';

const FlightList = (props) => {
 
  if (props.items.length === 0) {
    return (<h2 className='Flight-list__fallback'>  No Flight Found.</h2>);
  }

  return (
    <ul className='Flight-list'>
      {props.items.map((expense) => (
        <FlightItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default FlightList;
