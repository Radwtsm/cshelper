import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtMFjnjvJ_z7Gwb0ZGqbM8KhyGW3XUZRA",
  authDomain: "cs2smokesutil.firebaseapp.com",
  projectId: "cs2smokesutil",
  storageBucket: "cs2smokesutil.appspot.com",
  messagingSenderId: "545492270696",
  appId: "1:545492270696:web:f42cc3cf767f991f8b85dd",
  measurementId: "G-FM09YRJTH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)

// Get a list of cities from your database
export async function getAllTips() {
  const UtilsCol = collection(db, 'utilities');
  const utilsSnapshot = await getDocs(UtilsCol);
  const utilsList = utilsSnapshot.docs.map(doc => doc.data());
  return utilsList;
}
