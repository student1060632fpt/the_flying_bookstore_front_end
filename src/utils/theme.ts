// src/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import { Open_Sans } from 'next/font/google';

const mainFont = Open_Sans({
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
});
export default theme;
