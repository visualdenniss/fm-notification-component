import React,{useState, useEffect} from 'react'

const Header = ({notifications}) => {
  
    const [notificationCount, setNotificationCount] = useState(0)


  useEffect(() =>{
    setNotificationCount(notifications);
  }, [notifications])

return (
    <>
    
  
      <header className="header-wrapper">
            <div className="element1">
                <h1>Notifications
                  {notificationCount > 0 ? <span className="notification-icon m">{notificationCount}</span>  : <span className='notification-icon m'></span>}
                </h1>
            </div>
  

            <div className="header-select-all">            
              <button className='element2 no-button'>Mark all as read</button>            
            </div>
      </header>
      

      
      
</>


)
}

export default Header