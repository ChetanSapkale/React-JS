import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const{loginUser}=useContext(AuthContext) 
  const navigate=useNavigate()
  
  const handlesubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,password
    }
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      loginUser(res.data.token)
      navigate("/dashboard")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <form data-testid="login-form" onSubmit={handlesubmit}>
        <div><br />
          <label>
            Email:-
            <input  onChange={(e)=>setemail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div> <br />
        <div>
          <label>
            Password:-
            <input onChange={(e)=>setpassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div> <br />
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div><br />
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;