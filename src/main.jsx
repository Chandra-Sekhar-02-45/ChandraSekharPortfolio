const { useState, useEffect, useRef } = React;

// --- Data ---
const PROFILE_IMAGE = "assets/profile-new.jpg"; // Updated image
const HERO_TITLE = "Chandra Sekhar";
const HERO_SUBTITLE = "Full Stack Architect & Cloud Engineer";
const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

// --- Components ---

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-content">
                <a href="#" className="logo">CS.</a>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {NAV_LINKS.map(link => (
                        <li key={link.name}>
                            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-glow"></div>
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <h2>Hello, I'm</h2>
                    <h1 className="gradient-text">{HERO_TITLE}</h1>
                    <p>{HERO_SUBTITLE}</p>
                    <p className="hero-desc">
                        Founder of <strong>InnovationLink</strong>. I build scalable digital ecosystems
                        and intuitive user experiences using modern tech stacks.
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/Chandra-Sekhar-02-45" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/chandrasekhar45" target="_blank" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        <a href="mailto:rvcsraju@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
                    </div>

                    <div className="cta-container">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="image-wrapper">
                        <img src={PROFILE_IMAGE} alt="Chandra Sekhar" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ number, label }) => (
    <div className="about-card stat-item">
        <h3 className="gradient-text">{number}</h3>
        <p>{label}</p>
    </div>
);

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p className="text-secondary">
                            I am a B.Tech Computer Science student at KL University with a passion for building startups and complex software systems.
                            As the <strong>Founder of InnovationLink</strong>, I bridge the gap between startups and investors.
                        </p>
                        <br />
                        <p className="text-secondary">
                            My expertise lies in Full Stack Development (React, Spring Boot) and DevOps (Docker, Kubernetes).
                            I love tackling challenges that require both architectural thinking and precise coding.
                        </p>
                    </div>
                    <div className="stats">
                        <StatCard number="3+" label="Major Projects" />
                        <StatCard number="1st" label="Place in Hackathons" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ icon, name }) => (
    <div className="skill-card">
        <i className={icon}></i>
        <span className="skill-name">{name}</span>
    </div>
);

const Skills = () => {
    const skills = [
        { icon: "fab fa-java", name: "Java" },
        { icon: "fab fa-python", name: "Python" },
        { icon: "fab fa-react", name: "React" },
        { icon: "fab fa-node-js", name: "Node.js" },
        { icon: "fas fa-leaf", name: "Spring Boot" },
        { icon: "fab fa-docker", name: "Docker" },
        { icon: "fas fa-cubes", name: "Kubernetes" },
        { icon: "fab fa-aws", name: "Azure" }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <div className="skills-container">
                    {skills.map(s => <SkillCard key={s.name} {...s} />)}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ title, desc, tags, link, github }) => {
    return (
        <div className="project-card">
            <div className="project-content">
                <div className="project-header">
                    <i className="fas fa-folder-open folder-icon"></i>
                    <div className="project-links">
                        {link && <a href={link} target="_blank"><i className="fas fa-external-link-alt"></i></a>}
                        {github && <a href={github} target="_blank"><i className="fab fa-github"></i></a>}
                    </div>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-tech">
                    {tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "InnovationLink",
            desc: "A comprehensive startup ecosystem platform connecting entrepreneurs, investors, and mentors. Designed to streamline the funding and incubation process.",
            tags: ["React", "Spring Boot", "MySQL"],
            link: "https://innovationlink.in"
        },
        {
            title: "Fluite Banking Suite",
            desc: "Robust banking application offering secure transactions, loan management, and real-time portfolio analytics. Built with microservices architecture.",
            tags: ["Spring Boot", "React", "Kafka"],
            github: "#"
        },
        {
            title: "Muzic Streaming",
            desc: "A Spotify-inspired streaming platform with seamless playback and a modern responsive interface. Optimized for high performance.",
            tags: ["React", "Bootstrap", "Vercel"],
            github: "#"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" style={{ paddingBottom: '100px' }}>
            <div className="container contact-section">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-card">
                    <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <a href="mailto:rvcsraju@gmail.com" className="email-btn">
                        <i className="fas fa-paper-plane"></i> Say Hello
                    </a>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>Designed & Built by Chandra Sekhar | 2026</p>
    </footer>
);

// --- Main App ---
const App = () => {
    // Scroll Reveal Effect Hook
    useEffect(() => {
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, observerOptions);

        document.querySelectorAll('.project-card, .skill-card, .about-grid').forEach(el => {
            el.classList.add('fade-up'); // Add class via JS to ensure logic works
            observer.observe(el);
        });
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
