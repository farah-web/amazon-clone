import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully new user created with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch((error) => {
                alert(error.message);
            })
    }
    return (
        <>
            <div className="login">
                <Link to='/'>
                    <img src="./images/logo.png" className="login-logo" alt="logo" />
                </Link>
                <div className="login-container">
                    <h1>Sign-in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        <button type="submit" className='login-signInButton' onClick={signIn}>Sign In</button>
                    </form>
                    <p>By signing in you agree to AMAZON FAKE CLONE Conditions of Use and Sale.
                        Please see our PRivacy Notice, our Cookies Notice and out
                        Interest-Based Ads Notice.
                    </p>

                    <button className='login-registerButton' onClick={register}>Create your Amazon Account</button>
                </div>
            </div>
        </>
    )
}

export default Login

