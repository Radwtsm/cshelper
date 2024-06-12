'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import SearchAppBar from "./AppBar";
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import { getAllTips } from "./FireBaseWrapper";
import { createTheme,ThemeProvider } from "@mui/material";
import Button from "@mui/material";

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
          >
            {children}
          </Box>
        </ThemeProvider>

      </body>
    </html>
  );
}
