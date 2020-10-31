import React from 'react'
import ScreenHeader from '../components/screen-header';
import User from './friends/section/User';

function More() {
    return (
        <>
            <ScreenHeader screen='More' />
            <div className="screen__main more-screen">
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
                <div className="icon-row">
                    <div className="icon-row__icon"><i class="far fa-calendar" /><span>Calendar</span></div>
                    <div className="icon-row__icon"><i class="far fa-smile" /><span>Emoticons</span></div>
                    <div className="icon-row__icon"><i class="fas fa-paint-roller" /><span>Themes</span></div>
                    <div className="icon-row__icon"><i class="fas fa-file-invoice-dollar" /><span>Account</span></div>
                </div>
                <div className="more-suggestions">
                    <h4 className="more-suggestions__title">Suggestions</h4>
                    <div className="more-suggestions__icons">
                        <div className="more-suggestions__icon">
                            <div className="more-suggestions__icon-image">
                                <i class="fas fa-quote-right" />
                            </div>
                            <span className="more-suggestions__icon-text">Kakao Story</span>
                        </div>
                        <div className="more-suggestions__icon">
                            <div className="more-suggestions__icon-image">
                                <i class="fas fa-quote-right" />
                            </div>
                            <span className="more-suggestions__icon-text">Kakao Story</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default More
