// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// can todo: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy88R5eR_DREI_xYVM0hCOu7Se0EliHds",
  authDomain: "netflix-clone-7d5a8.firebaseapp.com",
  projectId: "netflix-clone-7d5a8",
  storageBucket: "netflix-clone-7d5a8.appspot.com",
  messagingSenderId: "777794577053",
  appId: "1:777794577053:web:ea070d1d6be8d2d2f72a74"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }