import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const navStyles = {
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={navStyles}
            className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'py-4' : 'py-6'}`}
        >
            <div className="container flex items-center justify-between">
                <a href="#" className="logo text-2xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    CS<span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="nav-desktop">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
