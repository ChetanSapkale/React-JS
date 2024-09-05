import React from 'react'
import './Homepage.css'
import Login from './Login';


function Home() {

    var btn = document.getElementById("btn");
        var light = document.getElementById("light");
        const toggleBtn=()=>{
            btn.classList.toggle("active");
            light.classList.toggle("on");
        }
  return (
    <>
        <Login />
    </>
  )
}

export default Home