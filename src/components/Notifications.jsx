import React from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationList from './NotificationList'
import './Notifications.css'

const Notifications = () => {
    return (
        <div className='notifications-container'>
            <NotificationHeader />
            <NotificationList />
        </div>
    )
}

export default Notifications
