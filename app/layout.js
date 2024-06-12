'use client'

import { Cookie, Inter } from "next/font/google";
import "./globals.css";
import SearchAppBar from "./AppBar";
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import { getAllTips } from "./FireBaseWrapper";
import { createTheme,ThemeProvider, responsiveFontSizes } from "@mui/material";
import Button from "@mui/material";
// import { CookiesProvider } from 'next-client-cookies/server';

const theme = responsiveFontSizes(createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: red[700],
    },
    secondary: {
      main: red[200],
    },
  },
}))
const inter = Inter({ subsets: ["latin"] });

// theme = responsiveFontSizes(theme)

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          {/* <CookiesProvider> */}
          <SearchAppBar />

          <Box
            my={4}
            mx={0}
            p={2}
          >
            {children}
          </Box>
          {/* </CookiesProvider> */}
        </ThemeProvider>

      </body>
    </html>
  );
}
