import React from 'react'
import Hero from "../components/Hero";
import Canvas from "../decorations/pointer_effect/Pointer";
import About from "../components/About";
import Work from "../components/Work";
import ParticlesComponent from "../decorations/Particle";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <ParticlesComponent />
      <Canvas />
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Socials />
    </>
  );
}

export default Home