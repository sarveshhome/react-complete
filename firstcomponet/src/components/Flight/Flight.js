import React ,{useState} from 'react';

import FlightItem from './FlightItem';
import FlightCard from '../UI/FlightCard';
import FlightFilter from './FlightFilter';
import FlightList from './FlightList';
import './Flight.css';

const Flight = (props)=> {
    
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredFlight = props.items.filter((flight) => {
      return flight.date.getFullYear().toString() === filteredYear;
    });    
  
    return (
      <div>
        <FlightCard className='flight'>
          <FlightFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
         <FlightList items={filteredFlight} />
        </FlightCard>
      </div>
    );
}

export default Flight;