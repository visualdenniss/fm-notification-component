import React from 'react'
import './NotificationHeader.css'

const NotificationHeader = ({notifications, setNotifications}) => {

    const notificationCount = notifications.filter((notification) => 
    notification.read === false).length


    const handleMarkRead = (boolean) => {
        const allReadList = notifications.map((notification)=> 
        {
            return {...notification, read: boolean}
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
            {notificationCount === 0 ? 
            <button onClick={()=> handleMarkRead(false)}>Mark all as unread</button> :
            <button onClick={()=> handleMarkRead(true)}>Mark all as read</button>
            }
        </header>
    )
}

export default NotificationHeader
