import React from 'react'
import mark from '../assets/images/avatar-mark-webber.webp'
import chess from '../assets/images/image-chess.webp'
import './Notification.css'

const Notification = () => {
    return (
        <li>
            <div className="left">
                <img src={mark} alt="" />
            </div>
            <div className="right">
                <div className="notification-message-container">
                    <p>
                        <span className='author-name'>
                        Mark Webber
                        </span>
                        {' '}
                        reacted to your recent post
                        {' '}
                        <span className='notification-link'>
                        {/* My first tournament today! */}
                        </span>
                        {' '}
                        <span className="unread-red-dot"/>
                    </p>
                    <p className='timestamp'>1m ago</p>
                </div>
                {/* <img src={chess} className='picture-img' alt="" /> */}
                {/* <div className="private-message">
                    <p>
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game. 
                    </p>
                </div> */}
            </div>
        </li>
    )
}

export default Notification
