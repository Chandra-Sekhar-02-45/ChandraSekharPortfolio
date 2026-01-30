import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import { Code, Layout, Database, Smartphone, Figma, Github, Globe, Cpu } from 'lucide-react';

const Skills = () => {
    const getIcon = (skillName) => {
        const lower = skillName.toLowerCase();
        if (lower.includes('react') || lower.includes('next')) return Code;
        if (lower.includes('figma')) return Figma;
        if (lower.includes('git')) return Github;
        if (lower.includes('node') || lower.includes('data')) return Database;
        if (lower.includes('mobile') || lower.includes('native')) return Smartphone;
        return Globe;
    };

    return (
        <section id="skills" className="section-light py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">My Skills</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {SKILLS.map((skill, index) => {
                        const Icon = getIcon(skill);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card flex flex-col items-center justify-center text-center gap-4 p-6"
                            >
                                <div className="p-4 bg-white rounded-full text-black shadow-sm">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-lg">{skill}</h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
