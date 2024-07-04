import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux"
import { loginThunk } from "./loginSlice"
import "./Signin.scss"

function Signin() {
    useEffect(() => {
        document.title = 'Argent Bank - Sign-in'
      }, []);
    const dispatch = useDispatch()
    async function manageSignin() {
      await dispatch(loginThunk({email:"tony@stark.com", password: "password123"}))
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
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                <Link className="sign-in-button" to="/dashboard">Sign In</Link>
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                <button className="sign-in-button" onClick={manageSignin} type="button">Sign In</button>
                {/* <!--  --> */}
              </form>
            </section>
        </main>
    )
}

export default Signin