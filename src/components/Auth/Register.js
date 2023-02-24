import { useState } from "react"
import "./Register.scss"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import { validateEmail } from "../../utils/otherUtils";


const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("password")

    const navigate = useNavigate();
    //code tiep

    const handleClickBtnLogin = () => {
        navigate("/login")
    }

    const ShowPassword = () => {
        if (showPassword === "password") {
            setShowPassword("text")
        }
        else (setShowPassword("password"))
    }

    const handleRegister = () => {
        if (!email) {
            return toast.warning("Email not entered")
        }
        
        const isValidEmail = validateEmail(email)
        if(!isValidEmail){
            toast.error("Invalid email")
            return;
        }

        if (!password) {
            return toast.warning("Password not entered")
        }
        // toast.success("Account success")
        // setEmail("")
        // setPassword("")
        // setUsername("")
    }


    return (
        <div className="register-container">
            <div className="header">
                Do have an account yet?
                <button onClick={() => handleClickBtnLogin()}>Login</button>

            </div>
            <div className="title col-4 mx-auto">
                Typeform
            </div>
            <div className="welcome col-4 mx-auto">
                Get better data with conversational forms, surveys, quizzes & more.
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Username</label>
                    <input
                        type={"text"}
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type={showPassword}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input type="checkbox" onClick={() => ShowPassword()} /> Show password
                    {/* </div>
                <span className="forgot-password">Forgot password?</span>
                <div> */}

                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >Create my free account</button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}

export default Register