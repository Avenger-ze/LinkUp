import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login'
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets"


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  React.useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
        if(userAuth) {
          dispatch(login(
            {email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL}
          ))
        } else {
            dispatch(logout()) 
        }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (<Login />) : 
        (<div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div> 
        )  
      }

     
    </div>
  );
}

export default App;
