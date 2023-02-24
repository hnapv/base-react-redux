import { useState } from "react"
import "./Login.scss"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    const navigate = useNavigate();

    const handleClickBtnSignUp = ()=>{
        navigate("/register")
    }

    const handleLogin = ()=>{
        alert("click me")
    }

    return (
        <div className="login-container">
            <div className="header">
                Don't have an account yet?
                <button onClick={()=>handleClickBtnSignUp()}>Sign up</button>

            </div>
            <div className="title col-4 mx-auto">
                Typeform
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who’s this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type={"email"}
                     className="form-control"
                      value={email}
                      onChange={(event)=>setEmail(event.target.value)}
                      />
                    <label>Password</label>
                    <input 
                    type={"password"}
                     className="form-control"
                     value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                     />
                </div>
                <span className="forgot-password">Forgot password?</span>
                <div>

                <button
                 className="btn-submit"
                 onClick={()=>handleLogin()}
                 >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login