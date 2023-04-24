import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

//Create a React component that tracks the number of clicks a button has received.
function Clickcounter(){
  const [count,setCount]=useState(0);//default set the value 0 in count
  const handleChange=()=>{
    setCount(count+1);
  }
  return(
    <>
      <h1>Number of clicks: {count}</h1>
      <button onClick={handleChange}>Click me </button>
    </>
    
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clickcounter />)

export default Clickcounter;