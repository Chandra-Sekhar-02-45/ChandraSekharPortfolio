import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PROFILE } from '../data';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white-90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex justify-between items-center">
                <a href="#" className="font-bold text-2xl text-black">
                    @{PROFILE.name.split(' ')[0]}
                </a>

                {/* Desktop Menu - Force hidden on mobile, flex on md */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-black"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary-light">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Toggle - flex on mobile, hidden on md */}
                <button
                    className="flex md:hidden text-black"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-white shadow-sm p-6 flex flex-col gap-4 md:hidden"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
