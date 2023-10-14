import React from "react";
import "./index";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./components/ui";
import { NotFoundComponent } from "./components/ui/empty/empty";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
