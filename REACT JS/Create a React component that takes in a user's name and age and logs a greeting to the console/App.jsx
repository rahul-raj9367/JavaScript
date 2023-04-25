import React from 'react';
//Create a React component that takes in a user's name and age and logs a greeting to the console.
function Greeting({name,age}){
  console.log(`Hello ${name}, you are ${age} years old!`);
  return null;
}
function App(){
  return(
    <div>
      <Greeting name="Rahul Raj" age={20}/>
    </div>
  )
}
export default App;