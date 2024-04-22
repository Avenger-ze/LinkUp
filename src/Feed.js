import React from 'react'
import "./Feed.css"
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { selectUser } from './features/userSlice';
import { useSelector} from 'react-redux'
import FlipMove from 'react-flip-move';

import {db} from './firebase'
import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query } from 'firebase/firestore';

function Feed() {
  const [input, setinput] = React.useState([])
  const [posts, setPosts] = React.useState([])
  const user = useSelector(selectUser)


  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
  
    // Cleanup function to unsubscribe from the snapshot listener
    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
      e.preventDefault();
    await addDoc(collection(db,  'posts'), {
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoURL || '',
          timestamp: serverTimestamp()
    })

      setinput('')

    }

  return (
    <div className='feed'>
     <div className='feed__inputContainer'>
       <div className='feed__input'>
       <CreateIcon/>
        <form>
            <input value={input} onChange={e => setinput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
        </form>
       </div> 
       <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7Fc15E"/>
        </div>
     </div>
      <FlipMove>
      {posts.map(({id, data: {name, description, message, photoUrl}}) =>(
        <Post 
         key={id}
         name={name}
         description={description}
         message={message}
         photoUrl={photoUrl}
        />
    ))}
      </FlipMove>
      
    
    </div>
  )
}

export default Feed
