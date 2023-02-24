import { useState } from "react"
import "./Register.scss"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { validateEmail } from "../../utils/otherUtils";
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { postRegister } from "../../services/apiServices"


const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate();
    //code tiep

    const handleClickBtnLogin = () => {
        navigate("/login")
    }

    const handleRegister = async () => {
        if (!email) {
            return toast.warning("Email not entered")
        }

        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error("Invalid email")
            return;
        }

        if (!password) {
            return toast.warning("Password not entered")
        }
        const res = await postRegister(email, username, password)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            navigate("/login")

        }
        if (res && res.EC !== 0) {
            toast.error(res.EM)
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
                    <div className="form-group pass-group">

                        <label>Password</label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {isShowPassword ?
                            <span
                                className="icons-eye"
                                onClick={() => setIsShowPassword(false)}
                            >
                                <VscEye />
                            </span> :
                            <span
                                className="icons-eye"
                                onClick={() => setIsShowPassword(true)}
                            >
                                <VscEyeClosed />
                            </span>
                        }
                    </div>
                    {/* <input type="checkbox" onClick={() => setIsShowPassword(!isShowPassword)} /> Show password */}
                    {/* </div>
                <span className="forgot-password">Forgot password?</span>
                <div> */}

                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >Create my free account</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={() => { navigate("/") }}> &#60;&#60; Go to Homepage</span>
                </div>
            </div>

        </div>
    )
}

export default Register