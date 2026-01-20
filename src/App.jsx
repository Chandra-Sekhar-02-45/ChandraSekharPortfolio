import { useState, useEffect } from 'react';
import './index.css';

// --- Data ---
const DATA = {
  profile: {
    name: "Chandra Sekhar",
    role: "Frontend Developer & Founder",
    description: "I build accessible, pixel-perfect, and performant web experiences. Currently leading Innovation Link while pursuing my degree.",
    image: "https://github.com/Chandra-Sekhar-02-45.png",
    social: {
      github: "https://github.com/Chandra-Sekhar-02-45",
      linkedin: "https://linkedin.com/in/chandrasekhar45",
      email: "mailto:rvcsraju@gmail.com"
    }
  },
  skills: [
    "React", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS",
    "Tailwind CSS", "Git", "Figma", "Responsive Design",
    "Performance Optimization", "Accessibility (a11y)"
  ],
  projects: [
    {
      title: "Innovation Link",
      desc: "A startup ecosystem platform connecting entrepreneurs, investors, and mentors. Led the frontend architecture and design.",
      stack: ["React", "Node.js", "MongoDB"],
      link: "https://innovationlink.in",
      github: "#"
    },
    {
      title: "Portfolio V1",
      desc: "My previous portfolio utilizing advanced CSS animations and 3D tilt effects to showcase creative developer skills.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Master",
      desc: "A productivity application with drag-and-drop features and local storage persistence.",
      stack: ["React", "DND Kit", "Vite"],
      link: "#",
      github: "#"
    }
  ],
  experience: [
    {
      period: "2024 - Present",
      role: "Founder & Lead Developer",
      company: "Innovation Link",
      desc: "Founded a platform to bridge the gap between student startups and investors. Managed a team of 4 developers and designed the core UI system."
    },
    {
      period: "2023 - 2024",
      role: "Frontend Intern",
      company: "Tech Solutions Inc (Hypothetical)",
      desc: "Collaborated on building a SaaS dashboard using React and Redux. Improved load times by 40% through code splitting."
    },
    {
      period: "2022 - Present",
      role: "Computer Science Student",
      company: "KL University",
      desc: "Focusing on Web Technologies, Data Structures, and Software Engineering. Active member of the coding club."
    }
  ]
};

// --- Icons (Simple SVG Components) ---
const GithubIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const MailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const SunIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const MoonIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;

// --- Components ---

const Navbar = ({ theme, toggleTheme }) => (
  <nav>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
      <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, textDecoration: 'none', color: 'var(--text-primary)' }}>
        CS<span className="text-accent">.</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Work</a>
          <a href="#experience" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Experience</a>
        </div>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div className="reveal active">
          <p className="text-accent" style={{ fontWeight: 600, marginBottom: '1rem', letterSpacing: '1px' }}>HI, MY NAME IS</p>
          <h1>{DATA.profile.name}</h1>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>I build things for the web.</h2>
          <p style={{ maxWidth: '500px', margin: '1.5rem 0 2.5rem', fontSize: '1.1rem' }}>
            {DATA.profile.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">Check out my work</a>
            <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); alert("Resume download would happen here!") }}>Resume</a>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
            <a href={DATA.profile.social.github} target="_blank" style={{ color: 'var(--text-secondary)' }}><GithubIcon /></a>
            <a href={DATA.profile.social.linkedin} target="_blank" style={{ color: 'var(--text-secondary)' }}><LinkedinIcon /></a>
            <a href={DATA.profile.social.email} style={{ color: 'var(--text-secondary)' }}><MailIcon /></a>
          </div>
        </div>

        <div className="reveal active" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '300px', height: '300px' }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '20px',
              background: 'var(--accent)', opacity: 0.2, transform: 'translate(15px, 15px)'
            }}></div>
            <img
              src={DATA.profile.image}
              alt="Profile"
              style={{
                width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px',
                position: 'relative', zIndex: 1, border: '1px solid var(--border)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="text-accent" style={{ fontSize: '1.5rem' }}>01.</span> About Me
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div className="reveal">
          <p style={{ marginBottom: '1rem' }}>
            Hello! My name is Chandra and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to try editing custom portfolio themes — turns out hacking together clean UI was highly addictive!
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Fast-forward to today, and I’ve had the privilege of founding <strong>Innovation Link</strong>, a student-led startup platform. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <div className="skills-grid" style={{ marginTop: '1.5rem' }}>
            {DATA.skills.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="text-accent" style={{ fontSize: '1.5rem' }}>02.</span> Experience
      </h2>
      <div className="timeline reveal">
        {DATA.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{exp.role} @ <span className="text-accent">{exp.company}</span></h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', fontFamily: 'monospace' }}>{exp.period}</p>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="text-accent" style={{ fontSize: '1.5rem' }}>03.</span> Some Things I've Built
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        {DATA.projects.map((project, index) => (
          <div key={index} className="card reveal">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} className="text-accent"><GithubIcon /></a>
                <a href={project.link} className="text-accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{project.desc}</p>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              {project.stack.map(tech => <span key={tech}>{tech}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
    <p className="text-accent" style={{ fontFamily: 'monospace', marginBottom: '1rem' }}>04. What's Next?</p>
    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
    <p style={{ marginBottom: '3rem' }}>
      I'm currently looking for new internships and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    <a href={`mailto:rvcsraju@gmail.com`} className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Say Hello</a>
  </section>
);

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
    <p>Built by Chandra Sekhar.</p>
  </footer>
);

// --- Main App ---
function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
