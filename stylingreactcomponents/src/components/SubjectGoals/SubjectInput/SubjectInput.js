import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './SubjectInput.css';

const SubjectInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  //set true false for color
  const [isValid,setIsValid]= useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length >0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label >Subject Goal</label>
        <input         
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default SubjectInput;
