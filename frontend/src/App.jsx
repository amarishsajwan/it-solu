import "./App.css";
import React from "react";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar1";
import Carousel from "./components/Carousel";
import Services from "./components/Section-1";
import { Element } from "react-scroll";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Carousel />
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  )
}

export default App;
