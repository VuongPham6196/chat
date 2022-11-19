// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDbGvNOLGnAdEPbu6iezWvCfBSwYlUh-c',
  authDomain: 'chat-d433c.firebaseapp.com',
  projectId: 'chat-d433c',
  storageBucket: 'chat-d433c.appspot.com',
  messagingSenderId: '575331593328',
  appId: '1:575331593328:web:53fc56d58885337960d8b5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
