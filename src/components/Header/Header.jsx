import { useEffect } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { revertAll } from "../../store/revertAll"
import { updateToken } from "../../store/updateToken"

import "./Header.scss"

function Header() {
    const token = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      if (token === "" && location.pathname !== "/" && location.pathname !== "/sign-in") {
        const cookieToken = localStorage.getItem('cookieToken')
        if (!cookieToken) {
          navigate("/")
        }
        dispatch(updateToken(cookieToken))
      }
    }) 
    function logout() {
      dispatch(revertAll())
      localStorage.setItem('cookieToken', "")
      navigate("/")
    }
    const profile = useSelector((state) => state.dashboard)
    let account
    if (!token) {
      account = (
        <Link className="main-nav-item" to="/sign-in">
          <div>
            <i className="fa fa-user-circle"></i>
            Sign In
          </div>
        </Link>
      )
    }
    else {
      account = (
        <div className="main-nav-item">
          <div>
            <i className="fa fa-user-circle"></i>
            {profile.firstName}
          </div>
          <div onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </div>
        </div>
      )
    }
    
    return (
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src="./img/argentBankLogo.png"
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            {account}
          </div>
        </nav>
    )
}

export default Header