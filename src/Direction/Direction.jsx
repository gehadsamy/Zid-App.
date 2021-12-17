import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from '../components/Homepage/Homepage';

const theme = createTheme({
  direction: 'rtl',
});

export default function Direction() {
  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
      <Homepage></Homepage>
      </div>
    </ThemeProvider>
  );
}