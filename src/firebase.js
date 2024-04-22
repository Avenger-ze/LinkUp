import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import required Firestore methods
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD0GssR487sKyD478IbwmNg_1cG8rUxyQo",
    authDomain: "linkup-32828.firebaseapp.com",
    projectId: "linkup-32828",
    storageBucket: "linkup-32828.appspot.com",
    messagingSenderId: "974636515561",
    appId: "1:974636515561:web:db41bf51af1d97bdc67078",
    measurementId: "G-FVBFP6XVYR"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};