import { useState, useEffect } from "react";
import Canvas from './decorations/pointer_effect/Pointer';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer';
import ParticlesComponent from './decorations/Particle';
import Preloader from './decorations/Preloader';
import { animateScroll as scroll } from "react-scroll";

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
        <Nav />
        <Canvas />
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
