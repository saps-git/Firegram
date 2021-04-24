import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB0tSjMN2kg0sAlXS_iTTYATs0JPhjLC3w",
    authDomain: "firegram-f690c.firebaseapp.com",
    projectId: "firegram-f690c",
    storageBucket: "firegram-f690c.appspot.com",
    messagingSenderId: "551548172067",
    appId: "1:551548172067:web:43a570ca68453bd42bfe96"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};