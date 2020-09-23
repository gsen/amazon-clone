import React, { useState } from 'react'
import {
    Link,
    useHistory
} from "react-router-dom";
import './Login.css'
import auth from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push('/');
        }).catch((error) => {
            alert(error);
        })
    }
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            history.push('/');
        }).catch(error =>
            alert(error));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/012015/amazon-logo-rgb.png" alt="" />

            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form >
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>Amazon terms of condition</p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
