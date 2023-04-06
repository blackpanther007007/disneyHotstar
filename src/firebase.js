// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = 
{
  apiKey: "AIzaSyCjNq7Cl9s6EkhOkUcj_0lTICONB_kOylY",
  authDomain: "disneyplus-clone-89322.firebaseapp.com",
  projectId: "disneyplus-clone-89322",
  storageBucket: "disneyplus-clone-89322.appspot.com",
  messagingSenderId: "842805754624",
  appId: "1:842805754624:web:ad9fa65c05f5fec5d791e5",
  measurementId: "G-4YRZPLFSBG"
};

// Initialize Firebase

const app=firebase.initializeApp(firebaseConfig);
const db =app.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db;