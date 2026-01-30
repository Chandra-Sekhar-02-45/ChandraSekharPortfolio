import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section-dark py-24">
            <div className="bg-grid-dark"></div>
            <div className="container relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">My Experience</h2>
                    <p className="text-muted max-w-xl">
                        A timeline of my professional journey and career milestones.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-white-50 text-accent mt-1 bg-opacity-10" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-white font-medium mb-2 opacity-80">
                                            {exp.company}
                                        </div>
                                        <p className="text-muted max-w-2xl">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:text-right min-w-[140px]">
                                    <span className="inline-block px-4 py-2 rounded-full border border-white text-sm font-medium text-white opacity-60" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                                        {exp.period}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
