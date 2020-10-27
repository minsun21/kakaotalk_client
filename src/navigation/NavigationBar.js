import React from 'react'
import { Link } from "react-router-dom";

function NavigationBar() {
    //<i class="far fa-user"></i>
    //<i class="fas fa-comment"></i>
    return (
        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__btn">
                    <Link className="nav__a" to="/friends">
                        <i class="fas fa-user fa-lg" /></Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__a" to="">
                        <span className="nav__notification">1</span>
                        <i class="far fa-comment fa-lg" /></Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__a" to="">
                        <i class="fas fa-search fa-lg" /></Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__a" to="">
                        <div className="nav__ellipsis" />
                        <i class="fas fa-ellipsis-h fa-lg" /></Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavigationBar
