import React from 'react'
import { Link } from "react-router-dom";

function ScreenHeader({ screen }) {
    const renderIcons = () => {
        switch (screen) {
            case 'Friends':
                return (<><span> <i class="fas fa-search" /></span>
                    <span><i class="fas fa-music" /></span>
                    <span><Link to="/setting"><div className="nav__ellipsis" /><i class="fas fa-cog" /></Link></span></>);
            case 'Chats':
                return (<><span> <Link to="/find"><i class="fas fa-search" /></Link></span>
                    <span><i class="fas fa-comment-medical" /></span>
                    <span><i class="fas fa-music" /></span>
                    <span><Link to="/setting"><div className="nav__ellipsis" /><i class="fas fa-cog" /></Link></span></>);
            case 'Find':
                return (<><span> <Link to="/find"><i class="fas fa-search" /></Link></span>
                    <span><Link to="/setting"><div className="nav__ellipsis" /><i class="fas fa-cog" /></Link></span></>);
            case 'More':
                return (<><span><Link to="/find"><i class="fas fa-search" /></Link></span>
                    <span><i class="fas fa-music" /></span>
                    <span><Link to="/setting"><div className="nav__ellipsis" /><i class="fas fa-cog" /></Link></span></>);
            default:
                break;
        }
    }
    return (
        <div className="screen_header">
            <h1 className="header__title">{screen}</h1>
            <div className="screen_header__icons">
                {renderIcons()}
            </div>
        </div>
    )
}

export default ScreenHeader;