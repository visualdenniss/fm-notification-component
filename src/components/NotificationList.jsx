import React from 'react'
import Notification from './Notification'

const NotificationList = () => {

    const style = {
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <ul style={style}>
            <Notification />
            <Notification />
            <Notification />
        </ul>
    )
}

export default NotificationList
