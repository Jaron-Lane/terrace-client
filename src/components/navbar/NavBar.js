import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/todays_plants">Today</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/plants">Plants</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/locations">Locations</Link>
                    </li>
                </ul>
                <ul className="logout">
                    <li className="navbar__item">
                        <Link className="navbar__link" 
                        onClick={() => {
                            localStorage.removeItem("terrace_token")}} to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}