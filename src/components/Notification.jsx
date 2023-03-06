import React from 'react'
import {motion} from 'framer-motion'
import './Notification.css'
import { notificationMotion } from '../animations'

const Notification = ({notification, onMarkRead, index}) => {

    const {id, link, read, type, author ,timestamp} = notification
    const notif = notification.notification

    const handleClick = () =>  {
        if(!notification.read)
        onMarkRead(id)
    }

    return (
        <motion.li 
        // initial={{opacity: 0,
        // y: 10}}
        // animate={{opacity:1, 
        // y: 0,
        // transition: {
        //     duration: .8, delay: 1 + (0.05 * index), 
        //     ease: [0.25, 0.46, 0.45, 0.94]
        // }}}
        
        id={id} 
        onClick={handleClick} 
        className={!read  ? 'unread' : ''}>
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
        </motion.li>
    )
}

export default Notification
