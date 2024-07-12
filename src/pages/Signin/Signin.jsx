import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux"
import { loginThunk } from "../../store/loginSlice"
import "./Signin.scss"

function Signin() {
    useEffect(() => {
        document.title = 'Argent Bank - Sign-in'
      })
    const [isLogingIn, setLoginStatus] = useState(false)
    const [errorClasses, setErrorClasses] = useState("error hidden")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function manageSignIn() {
        if (!isLogingIn) {
            setLoginStatus(true)
            let response = await dispatch(loginThunk({email, password}))
            if (response.payload.error) {
                setLoginStatus(false)
                setErrorClasses("error")
                return
            }
            if (response.payload.data.status === 200) {
              if (remember) {
                  localStorage.setItem('cookieToken', response.payload.data.body.token)
              }  
                navigate("/dashboard")
            }
        }
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <form>
                <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="input-remember">
                  <input type="checkbox" id="remember-me" onChange={e => setRemember(e.target.checked)}/>
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <p className={errorClasses}>Incorrect email or password, please try again.</p>
                <button className="sign-in-button" onClick={manageSignIn} type="button">Sign In</button>
              </form>
            </section>
        </main>
    )
}

export default Signin