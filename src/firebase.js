// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCHBRBEvPwqAOahSrFeEN_EU_2caIAKJSs",
  // authDomain: "netflix-reactjs-clone-e766b.firebaseapp.com",
  // projectId:  "netflix-reactjs-clone-e766b",
  // storageBucket:  "netflix-reactjs-clone-e766b.appspot.com",
  // messagingSenderId:  "895777655826" ,
  // appId: "1:895777655826:web:ea67fa14c6118696f91ccb"
  
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER ,
  appId: process.env.REACT_APP_APP_ID

};
// REACT_APP_FIREBASE_API_KEY= AIzaSyCHBRBEvPwqAOahSrFeEN_EU_2caIAKJSs
// REACT_APP_FIREBASE_AUTH_DOMAIN= netflix-reactjs-clone-e766b.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-reactjs-clone-e766b
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-reactjs-clone-e766b.appspot.com
// REACT_APP_MESSAGING_SENDER=895777655826
// REACT_APP_APP_ID=1:895777655826:web:ea67fa14c6118696f91ccb

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
