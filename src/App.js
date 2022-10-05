import { ThemeProvider } from "@mui/material";

import lightTheme from "./theme";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Skill from "./skills/Skill";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <Home />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
