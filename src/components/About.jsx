import { motion } from 'framer-motion';
import { SKILLS } from '../data';

const About = () => {
    return (
        <section id="about" className="section relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                    style={{ gridTemplateColumns: '1fr 1fr' }}
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                            <span className="text-accent">01.</span> About Me
                        </h2>
                        <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                            <p className="mb-4">
                                Hello! My name is Chandra. I started my journey in web development with a curiosity for how things move on the screen, and that curiosity has evolved into a passion for building robust, scalable web applications.
                            </p>
                            <p className="mb-4">
                                I strongly believe in user-centric design and writing clean, maintainable code. My experience ranges from building small landing pages to architecting complex platforms like Innovation Link.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new tech stacks or contributing to the developer community.
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-8" style={{ padding: '2rem' }}>
                        <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {SKILLS.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-4 py-2 rounded-full text-sm font-medium"
                                    style={{
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        color: 'var(--accent)',
                                        border: '1px solid rgba(139, 92, 246, 0.2)'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
