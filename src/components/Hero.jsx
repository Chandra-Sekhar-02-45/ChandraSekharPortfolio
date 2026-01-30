import { motion } from 'framer-motion';
import { PROFILE } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section-light min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-white">
            {/* Grid Background */}
            <div className="bg-grid-light absolute inset-0 z-0 opacity-50"></div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 px-6">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left flex flex-col items-center md:items-start gap-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-base font-bold border-2 border-black shadow-[4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] transition-all cursor-default mb-6"
                    >
                        <span className="text-xl">👋</span> <span className="text-black">Welcome to my portfolio</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-6"
                        style={{ lineHeight: 1.1 }}
                    >
                        Hello, I am <br />
                        <span className="relative inline-block px-1 z-10">
                            {PROFILE.name}
                            <span className="absolute inset-0 bg-yellow-300 -z-10 transform -rotate-1 translate-y-2 rounded-sm border border-black/10"></span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium mb-8"
                    >
                        I craft accessible, pixel-perfect, and performant web experiences. Currently leading Innovation Link while exploring the frontiers of web technology.
                        <br className="hidden md:block" /> User Experience Designer and Frontend Developer based in India.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col md:flex-row gap-6 justify-center md:justify-start w-full md:w-auto mt-6 items-center"
                    >
                        <a href="#projects" className="btn bg-black text-white hover:bg-gray-900 text-lg py-4 px-8 group border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_#000000]">
                            Check my work
                            <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/resume.pdf" download="Chandra_Sekhar_Resume.pdf" className="btn bg-white text-black text-lg py-4 px-8 group border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000]">
                            Download CV
                            <Download size={22} className="ml-3 group-hover:translate-y-1 transition-transform" />
                        </a>

                        {(() => {
                            const linkedIn = PROFILE.social.find(s => s.label === 'LinkedIn');
                            if (!linkedIn) return null;
                            const Icon = linkedIn.icon;
                            return (
                                <a
                                    key={linkedIn.label}
                                    href={linkedIn.link}
                                    target="_blank"
                                    className="social-link"
                                >
                                    <Icon size={22} />
                                </a>
                            );
                        })()}
                    </motion.div>
                </motion.div>

                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative flex justify-center z-10"
                >
                    <motion.div
                        className="relative w-full max-w-[500px]"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        {/* Shadow Block */}
                        <div className="absolute inset-0 bg-black rounded-[32px] translate-x-4 translate-y-4"></div>

                        {/* Video Container */}
                        <div className="hero-video-shell border-4 border-black rounded-[32px] overflow-hidden relative bg-white z-10 aspect-video">
                            <video
                                className="hero-video w-full h-full object-cover"
                                src="https://goodies.icons8.com/landings/visualpharm/videos/animated-2d/dynamic-man-working-in-online-support-service-via-laptop-1.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>

                        {/* Decorative floating elements */}



                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
