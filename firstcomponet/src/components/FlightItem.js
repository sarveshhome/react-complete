import React,{useState} from 'react';
import './FlightItem.css';

function FlightItem(props){

    const [title,setTitle]=  useState(props.title);

    const month=  props.date.toLocaleString('en-US',{month:'long'});
    const day= props.date.toLocaleString('en-US',{day:'2-digit'});
    const year= props.date.getFullYear();

    
    // function clickHandler(){
    //     console.log('Click Me!');
    // }

    const clickHandler = () =>{
        //console.log('Click Me!');
        //title ='update';
        setTitle('updated');
        console.log(title);
    };


    return (        
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>      
             <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
             </div>
             <button onClick={clickHandler} >Change Title</button>
            {/* onClick={()=>{console.log('ClickMe!')}} */}
        </div>
    );
}

export { FlightItem};