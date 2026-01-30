import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section-dark py-24 relative overflow-hidden">
            {/* Decorative Pattern - handled via opacity/mix-blend in CSS if needed, or simple img */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none z-0">
                <img src="/assets/project_pattern.png" alt="" className="w-full h-full" style={{ objectFit: 'cover' }} />
            </div>

            <div className="container relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-muted max-w-2xl">
                        A selection of projects that showcase my technical skills and design capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card flex flex-col h-full p-8"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-white rounded-lg bg-opacity-10" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                    <ArrowUpRight className="text-accent" size={24} />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-muted hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="text-muted hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-muted mb-6" style={{ flexGrow: 1 }}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-3 py-1 rounded-full text-white opacity-70 border border-white" style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://github.com/Chandra-Sekhar-02-45" target="_blank" className="btn btn-outline-light text-white border-white hover:bg-white hover:text-black" style={{ borderColor: '#fff', color: '#fff' }}>
                        View All Projects on Github
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
