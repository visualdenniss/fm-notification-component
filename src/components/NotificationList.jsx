import React from 'react'
import {motion} from 'framer-motion'
import Notification from './Notification'
import { basic } from '../animations'

const NotificationList = ({notifications, onMarkRead}) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <motion.ul 
        {...basic} 
        style={style}>
            {notifications?.map((notification, index)=> {
                return <Notification key={notification.id} 
                 onMarkRead={onMarkRead}
                 index={index}
                 notification={notification} />
            })}
        </motion.ul>
    )
}

export default NotificationList
