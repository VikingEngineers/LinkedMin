import React from 'react';
import Typewriter from "typewriter-effect";
import './style.css';
  
function App() {
  return (
    <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </div>
  );
}
  
export default App;