import React from 'react'
import { Link } from "react-router-dom";

function Main(props) {
    const submitHandler = () => {
        props.history.push('/friends');
    }
    return (
        <div className="main">
            <header className="welcome-header">
                <h1 className="welcome-header__title">Welcome to Kakao Talk</h1>
                <p className="welcome-header__text">If you have a Kakao Account, log in with your email or phone number.</p>
            </header>
            <form onSubmit={submitHandler} className="login-form">
                <input type="text" placeholder="Email or phone number" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Log In" />
                <Link to="#">Find Kakao Account or Password</Link>
            </form>
        </div>
    )
}

export default Main
