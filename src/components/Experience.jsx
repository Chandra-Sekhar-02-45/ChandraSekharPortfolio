import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section bg-secondary" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-accent">02.</span> Experience
                    </h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2" style={{ background: 'var(--border-color)' }}></div>

                        {EXPERIENCE.map((exp, index) => (
                            <div key={index} className="relative mb-12 md:flex justify-between items-center group">
                                {/* Dot */}
                                <div className="absolute left-0 w-4 h-4 rounded-full bg-accent border-4 border-bg-secondary transform -translate-x-[7px] md:left-1/2 md:-translate-x-1/2 z-10"
                                    style={{
                                        left: '0',
                                        top: '0',
                                        transform: 'translate(-50%, 5px)',
                                        background: 'var(--accent)',
                                        border: '4px solid var(--bg-secondary)'
                                    }}
                                ></div>

                                {/* This layout needs specific CSS to be truly responsive timeline. 
                     For simplicity/robustness without heavy Tailwind, I'll stick to a simple vertical list with left border.
                 */}
                            </div>
                        ))}

                        <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem', marginLeft: '10px' }}>
                            {EXPERIENCE.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="mb-10 relative"
                                >
                                    <div style={{
                                        position: 'absolute',
                                        left: '-2.6rem',
                                        top: '0.5rem',
                                        width: '12px',
                                        height: '12px',
                                        background: 'var(--accent)',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 0 4px var(--bg-secondary)'
                                    }}></div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <h4 className="text-accent text-lg mb-2">{exp.company}</h4>
                                    <p className="text-sm text-muted font-heading mb-4" style={{ fontFamily: 'monospace' }}>{exp.period}</p>
                                    <p className="text-muted leading-relaxed max-w-2xl">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
