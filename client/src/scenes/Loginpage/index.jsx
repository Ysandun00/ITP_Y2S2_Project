import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './index.css'

function Loginpage() {
    const navigate = useNavigate()
    const [emai, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const findUsers = async (e, p) => {
        if (e != '' && p != '') {
            const request = await fetch('http://localhost:3001/user/login', {
                method: 'POST',
                body: JSON.stringify({ email: e, password: p }),
                headers: { "Content-Type": "application/json" }
            }
            )
            const reply = request.json()
            return reply
        }
    }

    const submit = async (e, p) => {
        await findUsers(e, p).then((res) => { if (res.role) { navigate(`/${res.role}`) } })
    }

    return (
        <>
            <div className="limiter" id="login">
                <div className="container-login100"
                    style={{ "backgroundImage": "url(assets/img/slide/slide-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-5 col-md-offset-1">
                                <div className="login_topimg">
                                </div>
                                <div className="wrap-login100">
                                    <form className="login100-form validate-form"> <span className="login100-form-title "> Login </span>
                                        <span className="login100-form-subtitle m-b-16"> to your account </span>
                                        <div className="wrap-input100 validate-input m-b-16"
                                            data-validate="Valid email is required: ex@abc.xyz"> <input className="input100" onChange={(e) => setEmail(e.target.value)} type="text" name="Username" placeholder="E-mail" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100"> <span className="glyphicon glyphicon-user"></span> </span>
                                        </div>
                                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                            <input className="input100" onChange={(e) => setPassword(e.target.value)} type="password" name="pass" placeholder="Password" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100"> <span className="glyphicon glyphicon-lock"></span> </span>
                                        </div>
                                        <div className="flex-sb-m w-full p-b-30">
                                            <div>
                                                <a href="#" className="txt1">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="container-login100-form-btn p-t-25">
                                            <button className="login100-form-btn" onClick={() => submit(emai, password)}> Login </button> </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loginpage