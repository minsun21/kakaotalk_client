import React from 'react'
import AltScreenHeader from '../components/alt-screen-header';

function Setting() {
    return (
        <div className="main-screen">
            <AltScreenHeader name="Setting" page="Setting" />
            <div className="screen__main">
                <ul className="settings-list">
                    <li className="settings__setting">
                        <div className="settings__setting-column">
                            <i class="fas fa-bullhorn" /><span>Notices</span>
                        </div>
                    </li>
                    <li className="settings__setting">
                        <div className="settings__setting-column">
                            <i class="fas fa-flask" />
                            <span>Kakao Lab</span>
                        </div>
                    </li>
                    <li className="settings__setting">
                        <div className="settings__setting-column">
                            <i class="fas fa-info-circle" />
                            <span>Version</span>
                        </div>
                        <div className="settings__setting-column">
                            <span>Latest Version</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Setting
