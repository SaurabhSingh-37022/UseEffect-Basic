import './UseEffect.css'
import React, {useState,useEffect} from 'react'

function UseEffect1(){
    const [count,setCount] = useState(0)

    function Inc(){
        setCount(count + 1)
        

    }

    useEffect(()=>{
        document.title = `WhatApp (${count})`
    })
    console.log("Hello Outside")
       
    return(
        <div className="use">
            <h1>{count}</h1>
            <button className="btn" onClick={Inc}>Click Me</button>

        </div>

    )
}
export default UseEffect1;