import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./navbar/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Terrace.css"

export const Terrace = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("terrace_token")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)