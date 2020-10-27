import React from 'react'
import NavigationBar from '../navigation/NavigationBar';
import ScreenHeader from '../screen-header/screen-header';
import { Link } from "react-router-dom";

function Friends() {
    return (
        <div>
            <ScreenHeader screen='Friends' />
            <Link id="firends-display-link" to="#"><i class="fas fa-info-circle" />Friends'Names Display
            <i class="fas fa-chevron-right fa-xs" /></Link>
            <NavigationBar />
        </div>
    )
}

export default Friends
