import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00ADB5", //green
    },
    secondary: {
      main: "#FF2E63", //pink red
    },
    error: {
      main: "#ff9800", //yellow
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#252A34",
        },
      },
    },
  },
});

export default lightTheme;
