import React from 'react';
import ReactDOM from 'react-dom/client';

//Create a React component that renders two buttons and logs which one was clicked.
function Buttons() {//function component
  const handleChange=(buttonName)=>{
    console.log(`Button ${buttonName} clicked!`);
  }
  return(
    <>
      <button onClick={()=>handleChange('one')}>button 1</button>
      <button onClick={()=>handleChange('two')}>button 2</button>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Buttons />)

export default Buttons;