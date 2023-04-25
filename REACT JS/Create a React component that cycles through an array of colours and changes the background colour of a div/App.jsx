import {useState } from 'react'
//Create a React component that fetches data from an API and displays it in a table.
function ColorChange() {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
    const changeColor = () => {
      setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    };
  
    const currentColor = colors[currentColorIndex];
  
    return (
      <div style={{ backgroundColor: currentColor, width: '500px', height: '500px' }}>
        <center><button onClick={changeColor}>Change Color</button></center>
      </div>
    );

  

}
export default ColorChange
