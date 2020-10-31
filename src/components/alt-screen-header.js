import React from 'react'
import { Link } from "react-router-dom";

function AltScreenHeader({ name, page }) {
    const render = () => {
        switch (page) {
            case 'Setting': return <i class="fas fa-search" />;
            case 'Chat': return <><span><i class="fas fa-search fa-lg" /></span><span><i class="fas fa-bars fa-lg" /></span></>;
            default:
                break;
        }
    }
    return (
        <header className="alt-header">
            <div className="alt-header__column"><i class="fas fa-angle-left fa-2x" /></div>
            <div className="alt-header__column"><h1 className="alt-header__title">{name}</h1></div>
            <div className="alt-header__column">{render()}</div>
        </header>
    )
}

export default AltScreenHeader
