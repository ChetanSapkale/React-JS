import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-evenly fixed-top p-2' style={{backgroundColor:'white'}}>
      <Link to={"/login"} style={{textDecoration:"none"}} className='fs-4 text-dark fw-bold'>LOGIN</Link>
      <Link to={"/"} style={{textDecoration:"none"}} className='fs-4 text-dark fw-bold'>PRODUCTS</Link>
      
    </div>
  )
}

export default Navbar
