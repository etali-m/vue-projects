import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAmsuXyBzRcaxZzasySoU6fD91AqSIl9rw",
    authDomain: "udemy-vue-firebase-77fe5.firebaseapp.com",
    projectId: "udemy-vue-firebase-77fe5",
    storageBucket: "udemy-vue-firebase-77fe5.firebasestorage.app",
    messagingSenderId: "636209881864",
    appId: "1:636209881864:web:8f3a6b40e1f73013d802bd"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp }