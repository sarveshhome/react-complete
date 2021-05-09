import React from 'react';
import './FlightFilter.css';

const FlightFilter = (props) => {

  const dropdownChangeHandler = (event) => {     
     props.onChangeFilter(event.target.value);
  };
        return (
            <div className='flight-filter'>
            <div className='flight-filter__control'>
              <label >Flight Filter by year</label>
              <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
              </select>
            </div>
          </div>
        );
};

export default FlightFilter;
