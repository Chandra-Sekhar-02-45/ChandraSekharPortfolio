import { motion } from 'framer-motion';
import { PROFILE } from '../data';

const Hero = () => {
    return (
        <section className="section relative flex items-center justify-center min-h-screen pt-20">
            {/* Background Gradient Element */}
            <div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            />

            <div className="container relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center md:text-left" // Centered on mobile, left on desktop if desired, or just mx-auto
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-medium mb-4"
                        style={{ letterSpacing: '0.1em' }}
                    >
                        HI, I AM
                    </motion.p>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ lineHeight: 1.1, fontSize: 'clamp(3rem, 8vw, 6rem)' }}
                    >
                        {PROFILE.name}
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-4xl text-muted mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontWeight: 400, color: 'var(--text-muted)' }}
                    >
                        {PROFILE.role}
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto md:mx-0" // Centered on mobile
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ lineHeight: 1.6 }}
                    >
                        {PROFILE.bio}
                    </motion.p>

                    <motion.div
                        className="flex gap-4 justify-center md:justify-start" // Centered buttons on mobile
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex gap-6 mt-12 justify-center md:justify-start" // Centered icons on mobile
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                    >
                        {PROFILE.social.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted hover:text-accent transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Abstract shapes */}
                <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: -1, opacity: 0.5 }} className="hidden md:block">
                    {/* Decoration */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
