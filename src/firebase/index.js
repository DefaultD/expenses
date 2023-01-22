// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2GnEgA74Djh1MhDQhHmVxjMnzpEuUnNU',
  authDomain: 'expenses-8f49e.firebaseapp.com',
  projectId: 'expenses-8f49e',
  storageBucket: 'expenses-8f49e.appspot.com',
  messagingSenderId: '755224095236',
  appId: '1:755224095236:web:cdedf4d874620f754f6351',
  measurementId: 'G-GYTCPK9GCD'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
