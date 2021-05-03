import { React, useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {FlightItem} from './components/FlightItem';
import {NewFlight} from './components/NewFlights/NewFlight';
import { FlightFilter } from './components/FlightFilter';

function App(props) {
  console.log(props);
  const[filteredYear,setFilteredYear] = useState('2020');
  const flightinfo = [
    {
      id: 'e1',
      title: 'BA ',
      amount: 250.45,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', title: 'AI', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'EK',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'EY',
      amount: 450,
      date: new Date(20212, 5, 12),
    },
  ];
  
  const[flightsdata,setFlightsdata]= useState(flightinfo);
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1',{},"Flight Info"),
  //   React.createElement(FlightItem,{title:flightinfo[0].title,amount:flightinfo[0].amount,date:flightinfo[0].date})
  // );

  const addFlightHandler =(flights)=>{
     console.log('app.js');
     console.log(flights);
     setFlightsdata((prevFlight) =>{
       return [flights,...prevFlight];
     })
  };

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  

  return (
    <div className="App">
          <h1 className="App-title">Flight Info</h1>

           <NewFlight onAddFlight={addFlightHandler} />
           <FlightFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />          
           {flightsdata.map((expense) => (
          <FlightItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
           <FlightItem title={flightinfo[0].title} amount={flightinfo[0].amount} date={flightinfo[0].date}/>
           <FlightItem title={flightinfo[1].title} amount={flightinfo[1].amount} date={flightinfo[1].date}/>
           <FlightItem title={flightinfo[2].title} amount={flightinfo[2].amount} date={flightinfo[2].date}/>
           
    </div>
  );
}

export default App;
