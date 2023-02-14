import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: 36,
        },
        sizeSmall: {
          height: 30,
        },
        outlined: {
          fontWeight: 'normal',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          verticalAlign: 'middle',
          fontSize: 14,
        },
        input: {
          paddingTop: 8,
          paddingBottom: 8,
          height: 20,
        },
        inputSizeSmall: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 20,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          transform: 'translate(14px, 8px) scale(1)',
        },
        shrink: {
          transform: 'translate(14px, -8px) scale(0.8)',
        },
        sizeSmall: {
          transform: 'translate(14px, 6px) scale(1)',
        },
      },
    },
  },
});

export default theme;
