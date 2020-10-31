import React from 'react'

function User({ img, name }) {
    return (
        <div className="user-component">
            <div className="user-component__column">
                <img className="user-component__avatar user-component__avatar--xl" alt="user-img" src={img} />
                <div className="user-component__text">
                    <h4 className="user-component__title">{name}</h4>
                </div>
            </div>
        </div>
    )
}

export default User
