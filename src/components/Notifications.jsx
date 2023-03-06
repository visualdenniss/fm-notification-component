import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NotificationHeader from './NotificationHeader'
import NotificationList from './NotificationList'
import './Notifications.css'
import Loader from './Loader/Loader'

const Notifications = () => {

    const [notifications, setNotifications] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {

        const getData = async () => {
            setIsLoading(true)
            try {
                const resp = await axios.get("https://api.npoint.io/542a2703dbc512cd757d")
                setNotifications(resp.data.notifications)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error);
            }
        }
        getData()

    }, [])


    return (
        <div className='notifications-container'>
            {isLoading ? 
            <Loader/>
            : 
             <>
            <NotificationHeader 
            notifications={notifications} 
            setNotifications={setNotifications} />
            <NotificationList 
            notifications={notifications} 
            setNotifications={setNotifications} />
             </>
            }
        </div>
    )
}

export default Notifications
