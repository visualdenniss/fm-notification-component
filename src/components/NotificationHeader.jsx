import React from 'react'
import './NotificationHeader.css'

const NotificationHeader = () => {
    return (
        <header>
            <h1>
                Notifications
                <span>3</span>
            </h1>
            <button>Mark all as read</button>
        </header>
    )
}

export default NotificationHeader
