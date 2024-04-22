import React from 'react'
import "./Sidebar.css"
import Avatar from '@mui/material/Avatar';
import { selectUser } from './features/userSlice';
import { useSelector} from 'react-redux'

function Sidebar() {
  const user = useSelector(selectUser)
    const recentItem = (topic) => (
      <div className='sidebar__recentItem'>
           
            <p> #{topic}</p>
      </div>
    );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=600' alt='backgroundImage' />
        <Avatar src={user.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar__stats'>
         <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,354</p>
         </div>

         <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,943</p>
         </div>
      </div>

         <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("developer")}
            {recentItem("programmng")}
            {recentItem("design")}
         </div>

    </div>
  )
}

export default Sidebar
