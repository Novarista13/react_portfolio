import Canvas from './decorations/pointer_effect/Pointer';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Nav />
      <Canvas />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
