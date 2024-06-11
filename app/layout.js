'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import SearchAppBar from "./AppBar";
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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
            mx={4}
            p={2}
            sx={{ border: '2px solid grey' }}
          >

            {children}

          </Box>
        </ThemeProvider>

      </body>
    </html>
  );
}
