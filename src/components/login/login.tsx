
import "./login.css"

import Textbar from "../textbar/textbar"
import Button from "../button/button"
import { useState } from "react"

export default function Login() {

    return(

        <div className="login-wrapper">

        <h1 className="login-logo">LABFULL</h1>
            
            <Textbar label="Email" placeholder="Email" type="email" />

            
            <Textbar label="Password" placeholder="Password" type="password"/>
            <Button buttonTitle="Log In"  />
            
        </div>
    )
}