import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import Porto from "./components/Porto";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    document.title = "Portofolio Rizki Jaelani Nugraha";
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Desc />
      <Porto />
      <Contact />
    </div>
  );
}

export default App;
