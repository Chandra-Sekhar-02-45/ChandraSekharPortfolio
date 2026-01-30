import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PROFILE } from '../data';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            className={`nav-shell ${scrolled ? 'nav-shell--scrolled' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container nav-bar">
                <a href="#" className="nav-brand">
                    <span className="nav-dot" />
                    <div>
                        <p className="nav-eyebrow">Portfolio of</p>
                        <p className="nav-title">{PROFILE.name}</p>
                    </div>
                </a>

                <button
                    className="nav-toggle md:hidden"
                    aria-label="Toggle navigation"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <nav className="nav-links md:flex hidden">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <a href="#contact" className="nav-cta">
                    Get in touch
                    <ArrowUpRight size={16} />
                </a>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="nav-mobile"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-mobile-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="nav-mobile-cta"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get in touch
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;
