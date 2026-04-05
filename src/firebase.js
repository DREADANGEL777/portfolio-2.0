import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB26sLK1Zrd1MzgxmWP-WyrBTAi_4lu9ck",
  authDomain: "port-from.firebaseapp.com",
  projectId: "port-from",
  storageBucket: "port-from.firebasestorage.app",
  messagingSenderId: "458313561421",
  appId: "1:458313561421:web:9e611c199ce871267d7304",
}

//measurementId: "G-6SY80KSR0Z"

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
