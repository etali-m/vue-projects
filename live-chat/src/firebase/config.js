import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAmsuXyBzRcaxZzasySoU6fD91AqSIl9rw",
    authDomain: "udemy-vue-firebase-77fe5.firebaseapp.com",
    projectId: "udemy-vue-firebase-77fe5",
    storageBucket: "udemy-vue-firebase-77fe5.firebasestorage.app",
    messagingSenderId: "636209881864",
    appId: "1:636209881864:web:c8b569fb6e40f1b9d802bd"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)


  //init authentication service
  const projectAuth = firebase.auth()
  
  //init firestore
  const projectFirestore = firebase.firestore()
  
  //init timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }