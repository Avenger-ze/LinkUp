import React from 'react'
import './Login.css'
import { auth } from './firebase'
import { login } from './features/userSlice' 
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'

function Login() {
const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')
const [Name, setName] = React.useState('')
const [profilePic, setProfilePic] = React.useState('')
const dispatch = useDispatch()

const register = () => {
    console.log(Name)
    // console.log(e.target.value)
    if (!Name) {
        return alert("Please enter full name")
    }

    createUserWithEmailAndPassword(auth, email, password).then(
        (userAuth) => {
            const user = userAuth.user
            updateProfile(user, {
                displayName: Name, 
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: Name,
                    photoURL: profilePic
                }))
            })
        }).catch(error => alert(error))
}

const loginToApp = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password).then(
        (userAuth) => {
            const user = userAuth.user
            dispatch(login({
                email: user.email,
                    uid: user.uid,
                    displayName: Name,
                    photoURL: profilePic
            }))
        }
    ).catch(error => alert(error))
}

  return (
    <div className='login'>
     <img src='https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

     <form>
        <input value={Name} onChange={e => setName(e.target.value)} placeholder='Full name' type='text'></input>
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type='text'></input>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email'></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password'></input>

        <button type='submit' onClick={loginToApp}>Sign In</button>
     </form>

     <p>Not a member?
     <span className='login__register' onClick={register}>Register Now</span>
     </p>
    </div>
  )
}

export default Login
