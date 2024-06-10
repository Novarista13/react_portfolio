import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Footer/Socials";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work/Work";
import ParticlesComponent from "./decorations/Particle";
import Canvas from "./decorations/pointer_effect/Pointer";
import Preloader from "./decorations/Preloader";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="app" id={load ? "not-scroll" : "scroll"}>
        {scroll.scrollToTop()}

        <ParticlesComponent />
        <Canvas />
        <Nav />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Socials />
        <Footer />
      </div>
    </>
  );
}

export default App;
