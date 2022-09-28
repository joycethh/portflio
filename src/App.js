import { ThemeProvider } from "@mui/material";

import lightTheme from "./theme";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
