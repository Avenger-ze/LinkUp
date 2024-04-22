import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption'; 
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from "./features/userSlice"
import { auth } from './firebase'


function Header() {

  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="header">
     
      <div className="header__left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEUAfrv///8AerkAcLUpgbzE2urI2OnR4u4Adbfs9PlUksUAeLgAbbPN3+30+PuQt9fk7vVpoMtHjsK0z+RAhr8AZbC+1ejb6PIAarKXvdqFs9Z9rtNspc1Xm8ktisGlxt+AqdBjmMfy32DQAAAFJElEQVR4nO2d2ZKjIBRAEckEJcGFjlsW0///k6OxZ5JOFOwBK1znnpepmipbTi67LCQYaAQBi2i+JMjwz5G/O0U28OODjEzou9NjB03kXxnFoMsw9UemzAEXmAGRl4OMbEAXmAHeyJvMHnxcesS+l5GnFQSmC81JdjLp7t3pcMMu7WSSVQSmC03SyayixPSIgKSHdyfCFYeUqPDdiXBFqMgaGpkB3pDzesrMmVyAd8vu0Mu7U4AgCBCo6KArqP06ERZ/ZlkW54TDbppoeLnWaptGUVTuVZJRwN0GzpJNFNwp1UlAjU542gdPRMUFZHCoaOWzS0d6AjhCFcOU1Cuyqd6dtp9Cp1z6+WlwsWknXYIA2LyOOGpcggjU+IHmkU4m+AVJhusyWR8aSJ9CmN4lCAr27iTOhtcmmQhOHXAYay2/U8Pp1hhdggLKLAI/mWXKGEiFFhrqsh6ZAclnYWGWCa5AZHYvPf8xGSDV2bpk1pTN5lQAEZQKYFVVM6VmmQLMKKDSDwB6aiDlf1ZHE0qR6eAmGQUlk3WINQ3OKNOXGgXIpbM56YY0aQynxPQwTUaTULoyf6Bsuk8DqcAMTE7PQpsCvCFYMlZuyk+ALqRfALl9cWkZrLJ/h4bn9JuK+oAZlgFRkXobyZ6oOPEdoIZ/lLCq6OVyEYcQclQeoAJ6SBAEQZD/DkopYezjC8b6/4DZnFFB8vhUq66vdBvvReVGNf06sCVWGt0WzE0y9gNqn3h6gNP42r52yQO5ba8xcd5tijMd51cbdtY98G3+k9OsLSfHsWV7ZW6X9jOVaoheZ2doXmgeKB9G2kKcVDqpcotPkTCX0WEb7et+vfx0dGQg95C8+2Ydnivz5K/cH7m7umApGcoTfVT+PuFwHLiQjDD83UfSsyubZWT4xZzDHjg6qgcWkeHnn6h01G5slpARMz7IPds4yWkLyOjX403ZuOgPuJcRR/PqohFc7CZzLlNlPyr79yczexvXMs3HdP9Fz9Z+a7xrmXrG0oIJWu9k9v9UYG5E1hnNsYwVynY9qE8yge1neq9kbEPjlUzwaRcav2RqKxfPZCK7fOaXTPBpNez0TMau4fRMRlq1m57JBFaFxjcZq0UhC8ukG9WqYju/w7ax2ea2nIzc1vmu2oUdVcWacp5QarMDcSkZucnC8F41UX7I5sXHQ5my4c+Zn4tkzhiUWLQ0y8hs8rG5I3GcMclpcxjLIjKbielwejTHxqY6W0Jm+zH161LzoNpmPnABGTndkRcX4y/R+iWj68eHo+v0HrE5Wsq9TKldcUtNM1E2raZ7mURbHRl3uex9kkn1sxIiN+Qzr2RM+4d3hrbGKxlT1RpOn6XgnUxkWqTODR88fJIx7uqiORyZjfGNhi07PskUxjbPsNPdJxlzA17pqzOfZMxdq52+NvRIRpo/Gxv2IPskYz7o1rDVHWVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQZg0yKtIgX5cp03yjeSA1n4UTKql7pXlhtIY81pH/9Anz3VvU8EabTfRUz0+fsH+lhQuCIKsGzJ1LRuiFjJy4ChR6Ji7Op/MD3hCbzcJ+ESoSHd6dCFccImJ1kINP0E4F0LVrenjdyaQrKTRh2slIeFcvjcGPspMJtqsoNLQb4ZJZY1n/4f2BFf3VzGUM3obH/XkVt3umCwY8p33dxjZcml1Dlxnuyvy6ATwBbUOTweI3D+SEwl4CpEIAAAAASUVORK5CYII=" alt="Logo" />
      
            <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="Search" type='text'/>
            </div>
      </div>

      <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={PeopleIcon} title="My Connections" />
            <HeaderOption Icon={WorkIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messages" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption onClick={logoutOfApp} avatar={true} title="me" />
      </div>
    </div>
  )
}

export default Header
