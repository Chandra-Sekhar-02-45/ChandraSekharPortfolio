import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section-light py-24 relative overflow-hidden">
            {/* Light Grid Background */}
            <div className="bg-grid-light absolute inset-0 z-0"></div>

            <div className="container relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-black">My Experience</h2>
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
                            className="glass-card p-8 bg-white border border-gray-100 shadow-sm"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-gray-50 text-accent mt-1 border border-gray-100">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-1">
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-gray-600 font-medium mb-2">
                                            {exp.company}
                                        </div>
                                        <p className="text-muted max-w-2xl">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:text-right min-w-[140px]">
                                    <span className="inline-block px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-500 bg-white">
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
