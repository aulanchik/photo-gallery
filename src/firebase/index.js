import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_ID,
});

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    storage,
    firestore,
    timestamp
}
