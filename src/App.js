import { ThemeProvider } from "@mui/material";

import lightTheme from "./theme";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Skill from "./skills/Skill";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <Home />
        <Skill />
      </ThemeProvider>
    </div>
  );
}

export default App;
