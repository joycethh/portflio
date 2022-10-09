import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Toolbar } from "@mui/material";
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
        <Toolbar
          id="back-to-top-anchor"
          sx={{ backgroundColor: "primary.main" }}
        />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
