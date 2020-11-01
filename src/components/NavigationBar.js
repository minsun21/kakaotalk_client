import React from 'react'
import { Link } from "react-router-dom";

function NavigationBar({ page }) {
    //</i>
    //</i>
    return (
        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__btn">
                    <Link className="nav__a" to="/friends">
                        {page === 'friends' ? <i class="fas fa-user fa-lg" /> : <i class="far fa-user fa-lg" />}</Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__a" to="/chats">
                        <span className="nav__notification badge">1</span>
                        {page === 'chats' ? <i class="fas fa-comment fa-lg" /> : <i class="far fa-comment fa-lg" />}</Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__a" to="/find">
                        {page === 'chats' ? <i class="fas fa-search fa-lg" /> : <i class="fas fa-search-plus fa-lg" />}</Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__a" to="/more">
                        {page === 'more' ? null : <div className="nav__ellipsis" />}
                        <i class="fas fa-ellipsis-h fa-lg" /></Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavigationBar
