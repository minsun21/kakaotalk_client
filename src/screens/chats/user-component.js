import React, { useEffect, useState } from 'react'
import { dateToStr } from '../../util';

function UserComponent({ title, subtitle, img }) {
    const [Now, setNow] = useState();
    useEffect(() => {
        let now = dateToStr(new Date());
        setNow(now);
    }, [])
    return (
        <div className="user-component">
            <div className="user-component__column">
                <img className="user-component__avatar user-component__avatar--sm" alt="user-img" src={img} />
                <div className="user-component__text">
                    <h4 className="user-component__title">{title}</h4>
                    <h6 className="user-component__subtitle">{subtitle}</h6>
                </div>
            </div>
            <div className="user-component__column">
                <span>{Now}</span>
                <div className="badge">1</div>
            </div>
        </div>
    )
}

export default UserComponent
