'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import SearchAppBar from "./AppBar";
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import { getAllTips } from "./FireBaseWrapper";
import { createTheme,ThemeProvider } from "@mui/material";
import Button from "@mui/material";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDtMFjnjvJ_z7Gwb0ZGqbM8KhyGW3XUZRA",
//   authDomain: "cs2smokesutil.firebaseapp.com",
//   projectId: "cs2smokesutil",
//   storageBucket: "cs2smokesutil.appspot.com",
//   messagingSenderId: "545492270696",
//   appId: "1:545492270696:web:f42cc3cf767f991f8b85dd",
//   measurementId: "G-FM09YRJTH9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore(app)

// // Get a list of cities from your database
// async function getTips(db) {
//   const UtilsCol = collection(db, 'utilities');
//   const utilsSnapshot = await getDocs(UtilsCol);
//   const utilsList = utilsSnapshot.docs.map(doc => doc.data());
//   return utilsList;
// }

const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <SearchAppBar />

          <Box
            my={4}
            mx={0}
            p={2}
            // sx={{ border: '2px solid grey' }}
          >

            {children}
            {/* <p>{getAllTips()}</p> */}
          </Box>
        </ThemeProvider>

      </body>
    </html>
  );
}
