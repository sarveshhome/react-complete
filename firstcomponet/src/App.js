import logo from './logo.svg';
import './App.css';
import {FlightItem} from './components/FlightItem';

function App() {
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
  return (
    <div className="App">
          <h1 className="App-title">Flight Info</h1>
           <FlightItem title={flightinfo[0].title} amount={flightinfo[0].amount} date={flightinfo[0].date}/>
           <FlightItem title={flightinfo[1].title} amount={flightinfo[1].amount} date={flightinfo[1].date}/>
           <FlightItem title={flightinfo[2].title} amount={flightinfo[2].amount} date={flightinfo[2].date}/>
        
    </div>
  );
}

export default App;
