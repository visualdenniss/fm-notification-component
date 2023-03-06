import React from 'react'
import Notification from './Notification'

const NotificationList = ({notifications, setNotifications}) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <ul style={style}>
            {notifications?.map((notification)=> {
                return <Notification key={notification.id} 
                 notifications={notifications}
                 setNotifications={setNotifications}
                 notification={notification} />
            })}
        </ul>
    )
}

export default NotificationList
