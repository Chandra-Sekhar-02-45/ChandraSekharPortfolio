import { useState, useEffect, useRef } from 'react';
import './index.css';

// --- Data ---
const PROFILE_IMG = "https://github.com/Chandra-Sekhar-02-45.png";
const RESUME_LINK = "#"; // Placeholder for resume

const PROJECTS = [
  {
    title: "InnovationLink",
    desc: "A comprehensive startup ecosystem platform connecting entrepreneurs, investors, and mentors.",
    tech: ["React", "Spring Boot", "MySQL", "AWS"],
    link: "https://innovationlink.in",
    color: "#8b5cf6"
  },
  {
    title: "Fluite Banking",
    desc: "Secure banking suite with real-time transaction processing and portfolio analytics.",
    tech: ["Microservices", "Kafka", "React", "Docker"],
    link: "#",
    color: "#06b6d4"
  },
  {
    title: "Muzic Stream",
    desc: "High-performance music streaming application with spatial audio features.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "#",
    color: "#ec4899"
  }
];

const SKILLS = [
  { name: "Java / Spring Boot", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Cloud (AWS/Azure)", level: 80 },
  { name: "DevOps (Docker/K8s)", level: 75 },
  { name: "System Design", level: 85 }
];

// --- Components ---

const Cursor = () => {
  const dot = useRef(null);
  const outline = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dot.current) {
        dot.current.style.left = `${posX}px`;
        dot.current.style.top = `${posY}px`;
      }
      if (outline.current) {
        outline.current.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot"></div>
      <div ref={outline} className="cursor-outline"></div>
    </>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 2rem' : '2rem',
      background: scrolled ? 'rgba(3,3,3,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      zIndex: 100,
      transition: 'all 0.4s',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.2rem', fontWeight: 700 }}>CS<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Work', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: -1
      }} className="floating"></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', alignItems: 'center', gap: '4rem' }}>
        <div>
          <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Architect & Developer</h3>
          <h1 className="title-hero">
            Chandra <br />
            <span style={{ color: 'var(--accent-primary)' }}>Sekhar</span>
          </h1>
          <p style={{ maxWidth: '500px', color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
            I engineer digital ecosystems where precise code meets visionary design.
            Founder of InnovationLink. Full Stack Architect.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#work" className="btn-primary">View Projects</a>
            <a href="https://github.com/Chandra-Sekhar-02-45" target="_blank" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '1.5rem' }}><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/chandrasekhar45" target="_blank" style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '1.5rem' }}><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '30px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            zIndex: 1
          }}>
            <img
              src={PROFILE_IMG}
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.1)' }}
            />
            {/* Overlay Gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
          </div>
          {/* Decorative Border */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            border: '1px solid var(--accent-primary)',
            borderRadius: '40px',
            zIndex: 0,
            opacity: 0.3
          }}></div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-header">Selected Works</h2>
        <div className="grid-projects">
          {PROJECTS.map((project, index) => (
            <div key={index} className="glass-card">
              <div style={{
                height: '4px',
                width: '40px',
                background: project.color,
                marginBottom: '1.5rem',
                borderRadius: '2px'
              }}></div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', lineHeight: '1.6' }}>{project.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-header">Technical Arsenal</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginBottom: '2rem' }}>
              I don't just write code; I architect solutions. With a deep focus on scalability and performance,
              I build systems that stand the test of time. My background spans from low-level systems to modern web interfaces.
            </p>
            <div className="glass-card" style={{ display: 'inline-block', padding: '1.5rem 2.5rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-primary)' }}>3+</div>
              <div style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Years Experience</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {SKILLS.map(skill => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ color: 'var(--accent-secondary)' }}>{skill.level}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                    borderRadius: '3px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '4rem', fontFamily: 'Syncopate', marginBottom: '2rem' }}>Let's Build</h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
          Have an idea? I'm currently available for freelance projects and startup collaborations.
        </p>
        <a href="mailto:rvcsraju@gmail.com" className="btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1rem' }}>
          Initiate Protocol
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
    <p>© 2026 Chandra Sekhar. Crafted in the Void.</p>
  </footer>
);

function App() {
  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
