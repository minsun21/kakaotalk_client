import React from 'react'
import '../css/style.css';

function Header() {
    return (
        <div className="header">
            <div className="status-bar">
                <div className="status-bar__column">
                    <span>No Service</span>
                    <i class="fas fa-wifi"></i>
                </div>
                <div className="status-bar__column">
                    <span>18:43</span>
                </div>
                <div className="status-bar__column">
                    <span>81%</span>
                    <i class="fas fa-battery-three-quarters fa-lg"></i>
                    <i class="fas fa-bolt"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
