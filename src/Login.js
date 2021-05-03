import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom' 
function Login(){

    return(
        <div className="login">
            <Link>
            <img className="login__logo"
            src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" 
            alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type ="email"/>
                    <h5>password</h5>
                    <input type="password" />
                    <button type="submit" className="login__signInButton">Signin</button> 
                    </form>
                    <p>By signing-in, you agree to Amazon's termns and condition</p>
                    <button className="login__registerButton">Create your Amazon Account</button>
                </div>
        </div>
    )
}

export default Login;