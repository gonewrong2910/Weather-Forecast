import React, { useState } from 'react'
import "./style.css"


const Main = () => {
    const [num, setNum] = useState(0);
  return (
    <>
      <div className="center_div">
        <p> {num}</p>
    <div className="button2" onClick={()=> setNum(num +1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
         INCRE</div>
    <div className="button2"onClick={()=> (num > 0 ? setNum(num-1): setNum(0))}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    
         DECRE</div>

      </div>
    </>
  )
}

export default Main
