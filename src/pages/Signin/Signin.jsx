import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux"
import { loginThunk } from "../../store/loginSlice"
import "./Signin.scss"

function Signin() {
    useEffect(() => {
        document.title = 'Argent Bank - Sign-in'
      }, []);
    const [isLogingIn, setLoginStatus] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function manageSignin() {
        if (!isLogingIn) {
            setLoginStatus(true)
            const email = document.getElementById("username").value
            const password = document.getElementById("password").value

            let response = await dispatch(loginThunk({email, password}))
            if (response.payload.error) {
                //TODO : Bad password
                setLoginStatus(false)
                return
            }
            if (response.payload.data.status == 200) {
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
                  <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={manageSignin} type="button">Sign In</button>
              </form>
            </section>
        </main>
    )
}

export default Signin