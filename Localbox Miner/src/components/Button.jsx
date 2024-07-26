import React, { useContext } from 'react'
import { themecontext } from '../context/Context'
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Button = () => {
    const {ThemeUpdateFun,theme}=useContext(themecontext)
  return (
    <div>
      {/* <button style={{backgroundColor:theme=="Light"?"white":"black",color:theme=="light"?"black":"white",marginTop:"10px"}} onClick={ThemeUpdateFun}>ChangeTheme</button> */}

      <h2 style={{marginTop:"10px"}} onClick={ThemeUpdateFun}>{theme=="Light"? <FaMoon /> : <IoSunnySharp />}</h2>

      
    </div>
  )
}

export default Button
