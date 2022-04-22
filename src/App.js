import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
