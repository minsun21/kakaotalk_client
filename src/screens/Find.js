import React from 'react'
import ScreenHeader from '../components/screen-header';

function Find() {
    return (
        <div className="main-screen">
            <ScreenHeader screen='Find' />
            <div className="screen__main">
                <div className="find__icons">
                    <div className="find-icons__icon"><i class="fas fa-qrcode " /><span>QR Code</span></div>
                    <div className="find-icons__icon"><i class="far fa-address-book" /><span>Add by Contacts</span></div>
                    <div className="find-icons__icon"><i class="fas fa-fingerprint" /><span>Add by ID</span></div>
                    <div className="find-icons__icon"><i class="far fa-envelope" /><span>Invite</span></div>
                </div>
                <div className="recommended-friends">
                    <h6 className="recommended-friends__title">Recommended Friends</h6>
                    <span>You have no recommended friends.</span>
                </div>
                <div className="open-chat">
                    <div className="open-chat__header"><h4 className="open-chat__title">Open Chat</h4>
                        <span>Go to Openchat Home<i className="fas fa-chevron-right fa-xs" /></span></div>
                </div>
                <div className="open-post">
                    <div className="open-post__column">
                        <h5 className="open-post__title">#News</h5>
                        <h6 className="open-post__hashtags">#news#friends</h6>
                        <div className="open-post__members">
                            <img src="https://images.unsplash.com/photo-1603883469847-20fc79700ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="open-post" />
                            <span className="open-post__member-count">800 members</span>
                            <div className="divider"></div>
                            <span className="open-post__member-status">Active</span>
                        </div>
                    </div>
                    <div className="open-post__column">
                        <div className="open-post__photo">
                            <img src="https://images.unsplash.com/photo-1603939041129-6a1ebe95d213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="open-post" />

                            <div className="open-post__heart-count">
                                <i class="fas fa-heart fa-xs" /><span>326</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-post">
                    <div className="open-post__column">
                        <h5 className="open-post__title">#News</h5>
                        <h6 className="open-post__hashtags">#news#friends</h6>
                        <div className="open-post__members">
                            <img src="https://images.unsplash.com/photo-1603883469847-20fc79700ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="open-post" />
                            <span className="open-post__member-count">800 members</span>
                            <div className="divider"></div>
                            <span className="open-post__member-status">Active</span>
                        </div>
                    </div>
                    <div className="open-post__column">
                        <div className="open-post__photo">
                            <img src="https://images.unsplash.com/photo-1603939041129-6a1ebe95d213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="open-post" />

                            <div className="open-post__heart-count">
                                <i class="fas fa-heart fa-xs" /><span>326</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find
