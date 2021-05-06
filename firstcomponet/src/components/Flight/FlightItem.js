import React,{useState} from 'react';
import FlightCard from '../UI/FlightCard';
import FlihgtDate from './FlightDate';
import './FlightItem.css';

function FlightItem(props){

    const [title,setTitle]=  useState(props.title);

    // const month=  props.date.toLocaleString('en-US',{month:'long'});
    // const day= props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year= props.date.getFullYear();

    
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
        <FlightCard className='flight-item'> 
             <FlihgtDate date={props.date}></FlihgtDate>     
             <div className='flight-item__description'>
                    {/* <h2>{title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className='flight-item__price'>${props.amount}</div>
             </div>
            {/* <button onClick={clickHandler} >Change Title</button> */}
            {/* onClick={()=>{console.log('ClickMe!')}} */}
       </FlightCard>  
    );
}

export { FlightItem};