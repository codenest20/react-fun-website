import { NavLink, useNavigate } from "react-router-dom";
import "../NavBar/Navbar.scss";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import {  useState } from "react";
import Sorting from "../Sorting/Sorting";



function Navbar({ isLogin, setIsLogin ,isDark , setIsDark ,isAscending,setIsAscending , isClickedOrder,setIsClickedOrder}) {
  let navigate = useNavigate();

  let [isCountryPage , setIsCountryPage] = useState(false)

  const handleLogout = () => {
    setIsCountryPage(false)
    setIsLogin(false); 
    navigate("/"); 
  };
  
  let handleMode = ()=>{
    setIsDark(!isDark)
  }
  localStorage.setItem("darkMode",JSON.stringify(isDark))

  let displaySortingDarkMode =()=>{
      setIsCountryPage(true)
  }

  let otherPageSortingHandler = ()=>{
    setIsCountryPage(false)
  }

  let navigateToLogin = ()=>{
    setIsCountryPage(false)
    navigate("/signup")
  }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={(e) => (e.isActive ? "active-link" : null)}
            onClick={otherPageSortingHandler}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(e) => (e.isActive ? "active-link" : null)}
            onClick={otherPageSortingHandler}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={(e) => (e.isActive ? "active-link" : null)}
            onClick={otherPageSortingHandler}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(e) => (e.isActive ? "active-link" : null)}
            onClick={otherPageSortingHandler}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toolbox"
            className={(e) => (e.isActive ? "active-link" : null)}
            onClick={otherPageSortingHandler}
          >
            Toolbox
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/country"
            className={(e) => (e.isActive ? "active-link" : null)}
            onClick={displaySortingDarkMode}
          >
            Country Details
          </NavLink>
        </li>
        {isLogin ? (
          <li>
            <button className="login-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <button
                className="signup-link"
                onClick={navigateToLogin}
              >
                Signup
              </button>
            </li>
            <li>
              <button className="login-link" onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
          </>
        )}
      </ul>
      {
        isCountryPage && <>
        <Sorting isAscending={isAscending} setIsAscending={setIsAscending} isClickedOrder={isClickedOrder} setIsClickedOrder={setIsClickedOrder} />
      <button className="dark-mode-btn" onClick={handleMode}>
      {isDark ? <FaSun className="icon-size" />
        : <FaMoon className="icon-size" />}
        
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
        </>
      }
    </nav>
  );
}

export default Navbar;
