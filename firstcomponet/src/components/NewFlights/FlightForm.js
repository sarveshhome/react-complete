import React,{useState} from 'react';

import './FlightForm.css';
const FlightForm = () => {
    // const [enteredTitle,setEnteredTitle]= useState('');
    // const [enteredAmount,setEnteredAmount]=  useState('');
    // const [enteredDate, setEnteredDate] = useState('');
   const [userInput,setUserInput]=  useState({
                                            enteredTitle:'',
                                            enteredAmount:'',
                                            enteredDate:''
                                    });



    const titlechangeHandle = (event) =>{
        // console.log('update');
        // console.log(event.target.value);

        // setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });

        setUserInput((prevState)=>{
            return {...prevState,enteredTitle:event.target.value}
        });
    };

    const amountChangeHandler =(event)=>{
        //setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });

        setUserInput((prevState)=>{
            return {...prevState,enteredAmount:event.target.value}
        });
    };
    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });

        setUserInput((prevState)=>{
            return {...prevState,enteredDate:event.target.value}
        });
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
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} ></input>
                </div>
                <div className="new-flight__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-30" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-flight__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default FlightForm;