import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#222831", //black
      light: "#00ADB5", //green
    },
    secondary: {
      main: "#FF2E63", //pink red
    },
    background: {
      default: "#F5F5F5", //white
      light: "#eeeeee", //light grey #EAEAEA
    },
  },
});

export default lightTheme;
