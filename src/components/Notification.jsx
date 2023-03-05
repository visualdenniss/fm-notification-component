
import React from 'react';
import * as images from '../assets/images/index';



const people = [{
    name:"Angela Gray", image:"../assets/images/avatar-angela-grap.webp"
},
{ name:"Anna Kim", image:"../assets/images/avatar-anna-kim.webp"
},
{ name:"Jacob Thompson", image:"../assets/images/avatar-jacob-thompson.webp"
},
{ name:"Kimberly Smith", image:"../assets/images/avatar-kimberly-smith.webp"
},
{ name:"Mark Webber", image:"../assets/images/avatar-mark-webber.webp"
},
{ name:"Nathan Peterson", image:"../assets/images/avatar-nathan-peterson.webp"
},
{ name:"Rizky Hasanuddin", image:"../assets/images/avatar-rizky-hasanuddin.webp"
},
{ name:"Chess", image:"../assets/images/image-chess.webp"
}
]


const avatars = [Object.values(images).map(img =>(<img src={img} alt="avatar" key={img}/>)) ]



const avatarWithName = Object.keys(images).map(img => {
  const correspondingName=img.split('-')
  
  return(
  <div>
  <img src={images[img]} alt="avatar"key={img}/>
  <p>{correspondingName}</p>
  </div>
  )})


const Notification = () => {
  return (
    <div>

{/* {people.map(person => ( <p>{person.name}</p> ))}  */}
{avatarWithName}
    </div>
  )
}

export default Notification;