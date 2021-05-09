import React ,{useState} from 'react';

import FlightItem from './FlightItem';
import FlightCard from '../UI/FlightCard';
import FlightFilter from './FlightFilter';
import './Flight.css';

const Flight = (props)=> {
    
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    
  
    return (
      <div>
        <FlightCard className='flight'>
          <FlightFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {props.items.map((flight) => (
            <FlightItem
              key={flight.id}
              title={flight.title}
              amount={flight.amount}
              date={flight.date}
            />
          ))}
        </FlightCard>
      </div>
    );
}

export default Flight;