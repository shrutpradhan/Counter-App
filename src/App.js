// import React from 'react';
import CountdownTimer from './CountdownTimer';
import React,{useState} from "react"
import ToDoList from "./ToDoList"

import './App.css';

export default function App() {
  const [inputList,setInputList]=useState("")
  const [items,setItems]=useState([])
  const itemEvent=(event)=>{
    setInputList(event.target.value)   
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList]
    })
    setInputList('')
  }
    const deleteItems=(id)=>{
      console.log("deleted")
  
  setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
        return index!==id
     })
  })
}
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    
<>
<div className='Timer'>
<div className='count_timer'>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    
      <div className="main_div">
    <div className="center_div"></div>
    <br/>
     <h1>New timer</h1><br/>
    <input type="text"  value={inputList} onChange={itemEvent}/>
    <button onClick={listOfItems}>+</button>
    <ol>
     
      {items.map((itemval,index)=> {
       return <ToDoList key={index} 
       id={index}
       text={itemval}
       onSelect={deleteItems}/>
      })}
    </ol>
  </div>
  </div>
    </>
    
  );
}
