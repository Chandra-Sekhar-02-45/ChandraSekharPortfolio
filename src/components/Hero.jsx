import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section-light min-h-screen flex items-center pt-20 relative">
            <div className="bg-grid-light"></div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left z-10"
                >
                    <div className="inline-block px-4 py-2 bg-white-50 rounded-full text-sm font-medium mb-6 border border-gray-200">
                        👋 Welcome to my portfolio
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black" style={{ lineHeight: 1.1 }}>
                        Hello, I am <br />
                        <span className="text-accent">
                            {PROFILE.name}
                        </span>
                    </h1>

                    <p className="text-xl text-muted mb-8 max-w-lg mx-auto md:mx-0">
                        {PROFILE.bio}
                        User Experience Designer and Frontend Developer based in India.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="btn btn-primary-light">
                            Check my work
                            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline-light">
                            Download CV
                            <Download size={18} style={{ marginLeft: '8px' }} />
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-4 justify-center md:justify-start">
                        {PROFILE.social.map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                className="p-3 bg-white hover:bg-black hover:text-white transition-colors border border-gray-200 rounded-full flex items-center justify-center text-black"
                                style={{ width: '48px', height: '48px' }}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative flex justify-center z-10"
                >
                    <motion.div
                        className="hero-video-shell"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <video
                            className="hero-video"
                            src="https://goodies.icons8.com/landings/visualpharm/videos/animated-2d/dynamic-man-working-in-online-support-service-via-laptop-1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
