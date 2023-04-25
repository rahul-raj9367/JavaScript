import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

//Create a React component that renders an HTML input tag.
function Form() {//function component
  const [name,setName]=useState("")//useState
  const handleSubmit=()=>{
    alert(`The Name was Enterted :${name}`)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <input type="submit"/>
      </form>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />)

export default Form;