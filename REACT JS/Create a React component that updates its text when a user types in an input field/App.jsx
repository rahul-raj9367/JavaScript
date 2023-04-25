import { useState } from 'react'
//Create a React component that updates its text when a user types in an input field.
function App() {
  const [text, setText] = useState("")
  const handleChange=(e)=>{
    setText(e.target.value);
  }
  return (
    <>
    <input type="text" value={text} onChange={handleChange}/>  
    <p>You typed: {text}</p>
    </>
  )
}

export default App
