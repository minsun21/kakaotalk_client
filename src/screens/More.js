import React from 'react'
import ScreenHeader from '../components/screen-header';
import NavigationBar from '../components/NavigationBar';
import Suggestions from './more/Suggestions';
import UserComponent from './more/User-component';

function More() {
    return (
        <>
            <ScreenHeader screen='More' />
            <div className="screen__main more-screen">
                <UserComponent />
                <div className="icon-row">
                    <div className="icon-row__icon"><i class="far fa-calendar" /><span>Calendar</span></div>
                    <div className="icon-row__icon"><i class="far fa-smile" /><span>Emoticons</span></div>
                    <div className="icon-row__icon"><i class="fas fa-paint-roller" /><span>Themes</span></div>
                    <div className="icon-row__icon"><i class="fas fa-file-invoice-dollar" /><span>Account</span></div>
                </div>
                <Suggestions />
            </div>
            <NavigationBar page="more" />
        </>
    )
}

export default More
