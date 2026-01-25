import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-accent">03.</span> Some Things I've Built
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 flex flex-col justify-between"
                                style={{ height: '100%' }}
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <Folder className="text-accent" size={40} />
                                        <div className="flex gap-4">
                                            <a href={project.github} className="hover:text-accent transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.link} className="hover:text-accent transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 hover:text-accent transition-colors">
                                        <a href={project.link}>{project.title}</a>
                                    </h3>

                                    <p className="text-muted mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-accent" style={{ fontFamily: 'monospace' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
