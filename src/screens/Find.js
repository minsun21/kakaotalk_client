import React from 'react'
import ScreenHeader from '../components/screen-header';
import OpenPost from './find/OpenPost';
import NavigationBar from '../components/NavigationBar';

const openpost = [{
    title: '#News',
    hashtag: '#news#friends',
    membersImg: 'https://images.unsplash.com/photo-1603883469847-20fc79700ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    memberCount: '800',
    status: 'Active',
    photoImg: 'https://images.unsplash.com/photo-1603939041129-6a1ebe95d213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    heart: '326'
}, {
    title: '#News2',
    hashtag: '#news#friends',
    membersImg: 'https://images.unsplash.com/photo-1603883469847-20fc79700ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    memberCount: '800',
    status: 'Active',
    photoImg: 'https://images.unsplash.com/photo-1603939041129-6a1ebe95d213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    heart: '326'
}]

function Find() {
    return (
        <>
            <ScreenHeader screen='Find' />
            <div className="screen__main">
                <div className="icon-row">
                    <div className="icon-row__icon"><i class="fas fa-qrcode " /><span>QR Code</span></div>
                    <div className="icon-row__icon"><i class="far fa-address-book" /><span>Add by Contacts</span></div>
                    <div className="icon-row__icon"><i class="fas fa-fingerprint" /><span>Add by ID</span></div>
                    <div className="icon-row__icon"><i class="far fa-envelope" /><span>Invite</span></div>
                </div>
                <div className="recommended-friends">
                    <h6 className="recommended-friends__title">Recommended Friends</h6>
                    <span>You have no recommended friends.</span>
                </div>
                <div className="open-chat">
                    <div className="open-chat__header"><h4 className="open-chat__title">Open Chat</h4>
                        <span>Go to Openchat Home<i className="fas fa-chevron-right fa-xs" /></span></div>
                </div>
                {openpost.map(post => {
                    return <OpenPost key={post.title} PostInfo={post} />
                })}
            </div>
            <NavigationBar page="find" />
        </>
    )
}

export default Find
