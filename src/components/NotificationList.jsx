import React from 'react'
import Notification from './Notification'

const NotificationList = ({notifications, onMarkRead}) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <ul style={style}>
            {notifications?.map((notification)=> {
                return <Notification key={notification.id} 
                 onMarkRead={onMarkRead}
                 notification={notification} />
            })}
        </ul>
    )
}

export default NotificationList
