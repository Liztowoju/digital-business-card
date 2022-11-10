import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Info from "./Components/Info.jsx";
import About from "./Components/About.jsx";
import Interest from "./Components/Interests.jsx";
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <div className="app">
      <Info />
      <div className="main-section">
      <About />
      <Interest />
      </div>
      <Footer />
    </div>
  );
}

export default App;
