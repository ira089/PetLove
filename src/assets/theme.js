import {createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        desktop: 1280,
      },
    },
  });

  export default theme