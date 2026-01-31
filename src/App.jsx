import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MarqueeLine from "./components/MarqueeLine";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Ourservices from "./components/Ourservices";
import Card from "./components/Card";
import Expertise from "./components/Expertise";
import Digitalgrowth from "./components/Digitalgrowth";
import Data from "./components/Data";
import Twitter from "./components/Twitter";
import Joinagency from "./components/Joinagency";
import Features from "./components/Features";
import Customers from "./components/Customers";
import Innovation from "./components/Innovation";
import Branding from "./components/Branding";
import Clients from "./components/Clients";
import Subscribe from "./components/Subscribe";
import Work from "./components/Work";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <section className="bg-black">
      <Header />
      <MarqueeLine />
      <About />
      <Ourservices />
      <Card />
      <Expertise />
      <Digitalgrowth />
      <Data />
      <Joinagency />
      <Twitter />
      <Features />
      <Customers />
      <Innovation />
      <Branding />
      <Clients />
      <Subscribe />
      <Work />
    </section>
  );
}

export default App;
