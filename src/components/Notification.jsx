import React from 'react'
import './Notification.css'

const Notification = ({notification, notifications, setNotifications}) => {

    const {id, link, read, type, author ,timestamp} = notification
    const notif = notification.notification

    const handleMarkRead = (id) => {
        if(!notification.read) {
            const newNotificationList = notifications.map((notification) => {
                if (notification.id === id) {
                    return {...notification, read: true}
                } 
                return notification
            })
            setNotifications(newNotificationList)
        }
    }

    return (
        <li id={id} onClick={()=> handleMarkRead(id)} className={!read  ? 'unread' : ''}>
            <div className="left">
                <img src={author.img} alt="" />
            </div>
            <div className={author.message ? 'right type-private-message' : 'right'}>
                <div className="notification-message-container">
                    <p>
                        <span className='author-name'>
                        {author.name}
                        </span>
                        {' '}
                        {notif}
                        {' '}
                        <span  className={type === 'group' ? 
                        'notification-link notification-link-type-group' : 
                        "notification-link"
                        }>
                        {link && link}
                        </span>
                        {' '}
                        {!read &&
                        <span className="unread-red-dot"/>
                        }
                    </p>
                    <p className='timestamp'>{timestamp}</p>
                </div>
                {author.picture && 
                <img src={author.picture} className='picture-img' alt="" />
                }
                {author.message && read && 
                <div className="private-message">
                    <p>
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game. 
                    </p>
                </div>    
                }
            </div>
        </li>
    )
}

export default Notification
