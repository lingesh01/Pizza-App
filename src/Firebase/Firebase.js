// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlJ0ODZvLtnUfu4FZRYUjPmni-O2ae4Uo",
    authDomain: "pizza-app-auth.firebaseapp.com",
    projectId: "pizza-app-auth",
    storageBucket: "pizza-app-auth.appspot.com",
    messagingSenderId: "249305092991",
    appId: "1:249305092991:web:008898352d85c446c4804a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);