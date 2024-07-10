import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { revertAll } from "../../store/revertAll"


import "./Header.scss"

function Header() {
    const token = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function logout() {
      dispatch(revertAll())
      navigate("/")
    }
    let account
    if (!token) {
      account = (
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )
    }
    else {
      account = (
        <div className="main-nav-item" onClick={logout}>
          <i className="fa fa-user-circle"></i>
          Sign Out
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