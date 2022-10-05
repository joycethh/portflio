import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Toolbar, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import lightTheme from "./theme";
import ScrollTop from "./ScrollTop";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import MainPage from "./MainPage";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Toolbar id="back-to-top-anchor" />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
        <Footer />
        <ScrollTop>
          <Button size="medium" variant="contained">
            <KeyboardDoubleArrowUpIcon />
          </Button>
        </ScrollTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
