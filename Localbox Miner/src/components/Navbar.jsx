import React, { useContext } from 'react'
import { themecontext } from '../context/Context'
// import { authcontext } from '../context/Login'

const Navbar = () => {
    const {theme}=useContext(themecontext)
    // const {user,Login,Logout}=useContext(authcontext)
  return (
    <div>
      <h1>Navbar</h1>
      <h3>The Theme Is {theme}</h3>
      {/* <h2>The User is Login :{user?"yes":"no"}</h2>
      <button onClick={Login} style={{marginRight:"10px"}}>Login</button>
      <button onClick={Logout}>Log out</button> */}
    </div>
  )
}

export default Navbar
