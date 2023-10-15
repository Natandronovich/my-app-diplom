import React from "react";
import "./index";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, Home, LoginForm } from "./components/ui";
import { NotFoundComponent } from "./components/ui/empty/empty";
import { ThemeContextProvider } from "./themeContext";

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
          {/* <LoginForm /> */}
          <Footer />
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
