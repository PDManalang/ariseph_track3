// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3MWP2_4fzlH46qY8Vt8hsrZ_KhtAn61M",
  authDomain: "my-app-983f1.firebaseapp.com",
  projectId: "my-app-983f1",
  storageBucket: "my-app-983f1.appspot.com",
  messagingSenderId: "1090705762977",
  appId: "1:1090705762977:web:9f748a4bf7c3c22dcddee0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });

export default firebase;
