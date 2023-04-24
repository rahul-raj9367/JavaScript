import React from 'react';
import ReactDOM from 'react-dom/client';

//Create a React component that displays a greeting message.
function Greeting(props) {//function component
  return(
    <h1>Hello {props.message}</h1>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />)

export default Greeting;