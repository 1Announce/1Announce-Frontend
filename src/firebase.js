import firebase from 'firebase/compat/app'
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBaRLGZvIJY7YZuCHugptmfk0_2FosBU1M",
  authDomain: "announce-d9b77.firebaseapp.com",
  projectId: "announce-d9b77",
  storageBucket: "announce-d9b77.appspot.com",
  messagingSenderId: "252168177348",
  appId: "1:252168177348:web:83d700cc72aabefb24eb91",
  measurementId: "G-H0Q0Y49KQB"
})

export const auth = app.auth()
export default app
