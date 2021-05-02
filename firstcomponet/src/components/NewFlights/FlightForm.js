import React from 'react';
import './FlightForm.css';
const FlightForm = () => {

    const titlechangeHandle = (event) =>{
       // console.log('update');
       console.log(event.target.value);

    };

    return (
        <form>
            <div className="new-flight__controls">
                <div className="new-flight__control">
                    <label>Title</label>
                    <input type="text" onChange={titlechangeHandle}></input>
                </div>
                <div className="new-flight__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"></input>
                </div>
                <div className="new-flight__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-30"></input>
                </div>
            </div>
            <div className="new-flight__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default FlightForm;