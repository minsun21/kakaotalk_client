import React from 'react'

function OpenPost({ PostInfo }) {
    return (
        <div className="open-post">
            <div className="open-post__column">
                <h5 className="open-post__title">{PostInfo.title}</h5>
                <h6 className="open-post__hashtags">{PostInfo.hashtag}</h6>
                <div className="open-post__members">
                    <img src={PostInfo.membersImg} alt="open-post" />
                    <span className="open-post__member-count">{PostInfo.memberCount} members</span>
                    <div className="divider"></div>
                    <span className="open-post__member-status">{PostInfo.status}</span>
                </div>
            </div>
            <div className="open-post__column">
                <div className="open-post__photo">
                    <img src={PostInfo.photoImg} alt="open-post" />

                    <div className="open-post__heart-count">
                        <i class="fas fa-heart fa-xs" /><span>{PostInfo.heart}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenPost
