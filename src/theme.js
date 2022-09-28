import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#252A34", //black
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF2E63", //pink red
    },
    error: {
      main: "#ff9800", //yellow
    },
    custom: {
      main: "#00ADB5", //green
    },
  },
});

export default lightTheme;
