import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 32,
          textTransform: 'none',
        },
        sizeSmall: {
          height: 24,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 32,
          verticalAlign: 'middle',
        },
        sizeSmall: {
          height: 24,
        },
      },
    },
  },
});

export default theme;
