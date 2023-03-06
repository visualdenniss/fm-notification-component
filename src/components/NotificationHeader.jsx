import React from 'react'
import './NotificationHeader.css'

const NotificationHeader = ({notifications, setNotifications}) => {

    const notificationCount = notifications.filter((notification) => 
    notification.read === false).length

    const handleClick = () => {
        const allReadList = notifications.map((notification)=> 
        {
            return {...notification, read: true}
        })

        setNotifications(allReadList)
    }

    return (
        <header>
            <h1>
                Notifications
                {notificationCount !== 0 &&
                <span>{notificationCount}</span>
                }
            </h1>
            <button onClick={handleClick}>Mark all as read</button>
        </header>
    )
}

export default NotificationHeader
