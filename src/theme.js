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
    background: {
      default: "#EAEAEA",
    },
  },
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       colorPrimary: {
  //         backgroundColor: "#252A34",
  //       },
  //     },
  //   },
  // },
});

export default lightTheme;
