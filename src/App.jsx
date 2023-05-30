import React, { useState } from 'react';
import './App.css'


    const App = () => {
      const [count, setCount] = useState(0);

      const handleIncrement = () => {
        setCount(count + 1);
      };
    
      const handleDecrement = () => {
        setCount(count - 1);
      };
    
      const handleIncrementTen = () => {
        setCount(count + 10);
      };
    
      const handleDecrementTen = () => {
        setCount(count - 10);
      }; //
    
      return (
        <div style={{ boxShadow:"0 0 10px rgb(207, 206, 206)",backgroundColor:"ThreeDHighlight",margin:"5%",padding:"40px",display: 'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent:"center", border:"5px solid transparent", borderRadius:"15px"}}>
        <button onClick={handleIncrement} style={{ color:"Window", backgroundColor:"ThreeDLightShadow",marginBottom: '5px', border:"5px solid red", borderRadius:"10px 10px 32px 32px" }}>+1</button>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ color:"Window", backgroundColor:"ThreeDLightShadow",border:"5px solid red", borderRadius:"10px 32px 32px 10px"}} onClick={handleDecrementTen}>-10</button>
        <div style={{ margin:"10px", color:"Highlight" }}>{count}</div>
          <button style={{ color:"Window", backgroundColor:"ThreeDLightShadow",border:"5px solid red", borderRadius:"32px 10px 10px 32px"}} onClick={handleIncrementTen}>+10</button>
        </div>
        <button onClick={handleDecrement} style={{color:"Window", backgroundColor:"ThreeDLightShadow", marginTop: '5px',border:"5px solid red", borderRadius:"32px 32px 10px 10px" }}>-1</button>
      </div>
      );
    };

    export default App;