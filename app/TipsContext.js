// 'use client'

import { createContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { create } from '@mui/material/styles/createTransitions';
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

// const ciao = await getAllTips()

// export const TipsContext = createconte

export const TipsContext = createContext([
    {
        title: 'SMOKE JUNGLE AND CONNECTOR  (T SPAWN)',
        description: 'da fermo, jump + throw',
        utility: 'smoke',
        embed_code: 'https://www.youtube.com/watch?v=xLvP5PpF5Kk',
        map: 'mirage',
        side: 'T',
    },
    {
        title: 'SMOKE MARKET WINDOW (APARTMENT)',
        description: 'da fermo, salto + throw',
        utility: 'smoke',
        embed_code: 'https://www.youtube.com/watch?v=2ptE605BU8Q',
        map: 'mirage',
        side: 'T',
    },
    {
        title: 'SMOKE MID WINDOW (T SPAWN)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/8ebhtZwv-vI?si=B0w1OTTd1xLbOsgj',
        map: 'mirage',
        side: 'T',
    },
    {
        title: 'SMOKE STAIRS (T SPAWN)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/P9Acab2U9UU?si=NUu-s02vT4jAfw4x',
        map: 'mirage',
        side: 'T',
    },
    {
        title: 'SMOKE CONNECTOR DA ENTRATA APPS (T)',
        description: 'salto + throw',
        utility:'smoke',
        embed_code: 'https://www.youtube.com/watch?v=dpvwU6uoSws',
        map: 'mirage',
        side: 'T',
    },
    {
        title: 'SMOKE CT (BANANA)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/dc1mf9NX3uU?si=9YlhSfysNI91ziKN',
        map: 'inferno',
        side: 'T',
    },
    {
        title: 'SMOKE BARA SITO B (ENTRATA B)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://www.youtube.com/watch?v=DlwHH_Jiqo0',
        map: 'inferno',
        side: 'T',
    },
    {
        title: 'SMOKE LIBRARY E LONG SITO A (MID)',
        description: 'jump + throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/3s6unVWPMuQ?si=M-ZzkitO8rxLYQhT',
        map: 'inferno',
        side: 'T',
    },

    {
        title: 'SMOKE TOP MID (USCITA T SPAWN)',
        description: 'jump + throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/4A-5-7rXnKI?si=QCFd8it1it-4F4g0',
        map: 'inferno',
        side: 'T',
    },

    {
        title: 'SMOKE PIT (SECOND MID)',
        description: 'jump + throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/ShIGlHWr2q0?si=wynqfRopEYrH-xKr',
        map: 'inferno',
        side: 'T',
    },
    {
        title: 'SMOKE SHORT (SECOND MID)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/6K181VstgnE?si=yZd3xFftSoTyFuan',
        map: 'inferno',
        side: 'T',
    },
    {
        title: 'SMOKE ANGOLO LONG (SECOND MID)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/XqrwexeWbu4?si=dOxPF4fHKadD0DBY',
        map: 'inferno',
        side: 'T',
    },
    {
        title: 'SMOKE MID XBOX (SECOND MID)',
        description: 'throw',
        utility:'smoke',
        embed_code: 'https://youtu.be/XqrwexeWbu4?si=dOxPF4fHKadD0DBY',
        map: 'dust',
        side: 'T',
    },




    

    



    
    


]);