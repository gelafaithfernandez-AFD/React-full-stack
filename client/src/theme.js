import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#08CB00',
      light: '#08CB00',
      dark: '#08CB00',
    },
    secondary: {
      main: '#FF6D00',
    },
    background: {
      default: '#000000',
      paper: '#253900',
    },
    text: {
      primary: '#EEEEEE',
      secondary: '#EEEEEE',
    },
    success: { main: '#1E8E3E' },
    error: { main: '#D93025' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: '8px 20px' },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
});

export default theme;