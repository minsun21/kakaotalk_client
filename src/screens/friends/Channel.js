function Channel({ img, name }) {
    return (
        <div className="firends-screen__channel">
            <div className="firends_screen__channel-header">
                <span>Channel</span>
                <i className="fas fa-chevron-up fa-xs" />
            </div>
            <div className="user-component">
                <div className="user-component__column">
                    <img className="user-component__avatar user-component__avatar--sm" alt="channel-img" src={img} />
                    <div className="user-component__text">
                        <h4 className="user-component__title user-component__title--not-bold">{name}</h4>
                    </div>
                </div>
                <div className="user-component__column">
                    <span>2</span>
                    <i className="fas fa-chevron-right fa-xs" />
                </div>
            </div>
        </div>
    )
}

export default Channel
