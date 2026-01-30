
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import './index.css';

function App() {
  return (
    <div className="App relative">
      <main>
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}

export default App;
