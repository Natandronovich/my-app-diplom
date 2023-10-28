import React from "react";
import "./index";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header, Main } from "./components/ui";
import { ThemeContextProvider } from "./themeContext";
import { AuthContextProvider } from "./authContext/authProvider";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <ThemeContextProvider>
          <div className="app">
            <Header />
            <Main />
            <Footer />
          </div>
        </ThemeContextProvider>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
