import React from "react";
import "./index";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header, Main } from "./components/ui";
import { ThemeContextProvider } from "./themeContext";

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
