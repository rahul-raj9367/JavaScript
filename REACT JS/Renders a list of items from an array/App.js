import React from 'react';
import ReactDOM from 'react-dom/client';

//Create a React component that renders a list of items from an array
function Car(props) {//function component
  return(
    <li>I am a {props.brand}</li>
  )
}
function Garage(){
  const car=["Ford","BMW","Audi"];//Array
  return(
    <>
      <h1>Who lives in My Garage ?</h1>
      <ul>
        {car.map((cars)=> <Car brand={cars} />)}
      </ul>
    </>
    
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />)

export default Garage;