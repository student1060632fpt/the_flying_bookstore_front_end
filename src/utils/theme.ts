// src/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { viVN } from '@mui/x-data-grid/locales';
const mainFont = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin','vietnamese'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: mainFont.style.fontFamily,
  },
  palette: {
    primary:{
      main: '#00254F'
    },
    secondary: {
      main: '#EAA451'
    },
    background: {
      // paper: '#FCFFF8'
    },
    
  },
},viVN);
export default theme;
