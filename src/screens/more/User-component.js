import React from 'react'

function UserComponent() {
    return (
        <div className="user-component">
            <div className="user-component__column">
                <img className="user-component__avatar user-component__avatar--xl" alt="user-img" src="https://images.unsplash.com/photo-1603700501120-de2ebf0ae131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <div className="user-component__text">
                    <h4 className="user-component__title">Park</h4>
                    <h6 className="user-component__subtitle">+ 777 666 555</h6>
                </div>
            </div>
            <div className="user-component__column">
                <i class="far fa-comment-alt fa-2x"></i>
            </div>
        </div>
    )
}

export default UserComponent
