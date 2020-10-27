import React from 'react'

function ScreenHeader({ screen }) {
    const renderIcons = () => {
        switch (screen) {
            case 'Friends':
                return (<><span> <i class="fas fa-search" /></span>
                    <span><i class="fas fa-music" /></span>
                    <span><i class="fas fa-cog" /></span></>);
            case 'Chats':
                return (<><span> <i class="fas fa-search" /></span>
                    <span><i class="fas fa-comment-medical" /></span>
                    <span><i class="fas fa-music" /></span>
                    <span><i className="fas fa-cog" /></span></>);
            case 'Find':
                return (<><span> <i class="fas fa-search" /></span>
                    <span><div className="nav__ellipsis" /><i class="fas fa-cog" /></span></>);
            case 'More':
                return (<><span> <i class="fas fa-search" /></span>
                    <span><i class="fas fa-music" /></span>
                    <span><div className="nav__ellipsis" /><i class="fas fa-cog" /></span></>);
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