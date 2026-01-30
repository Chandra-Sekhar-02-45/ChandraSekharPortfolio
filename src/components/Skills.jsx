import { motion } from 'framer-motion';
import {
    SiHtml5, SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiReact,
    SiCss3, SiTailwindcss, SiBootstrap, SiSass, SiMui,
    SiNodedotjs, SiExpress, SiDjango, SiRubyonrails,
    SiPython, SiC, SiCplusplus,
    SiMysql, SiPostgresql, SiMongodb, SiFirebase,
    SiGithub, SiGit,
    SiDocker, SiAmazon, SiGooglecloud, SiVercel,
    SiPostman, SiJest, SiSelenium,
    SiFigma
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Front-End Development',
            description: 'Interfaces that feel intentional, responsive, and accessible.',
            icons: [
                { Icon: SiHtml5, color: '#E34F26' },
                { Icon: SiJavascript, color: '#F7DF1E' },
                { Icon: SiTypescript, color: '#3178C6' },
                { Icon: SiNextdotjs, color: '#ffffff' },
                { Icon: SiRedux, color: '#764ABC' },
                { Icon: SiReact, color: '#61DAFB' },
            ],
        },
        {
            title: 'Styling & Design',
            description: 'Systematic visual language with purposeful motion.',
            icons: [
                { Icon: SiCss3, color: '#1572B6' },
                { Icon: SiTailwindcss, color: '#06B6D4' },
                { Icon: SiBootstrap, color: '#7952B3' },
                { Icon: SiSass, color: '#CC6699' },
                { Icon: SiMui, color: '#007FFF' },
            ],
        },
        {
            title: 'Back-End Development',
            description: 'APIs and services that stay fast and reliable.',
            icons: [
                { Icon: SiNodedotjs, color: '#339933' },
                { Icon: SiExpress, color: '#ffffff' },
                { Icon: SiDjango, color: '#092E20' },
                { Icon: SiRubyonrails, color: '#CC0000' },
            ],
        },
        {
            title: 'Programming Languages',
            description: 'Picking the right tool to solve problems elegantly.',
            icons: [
                { Icon: SiPython, color: '#3776AB' },
                { Icon: SiC, color: '#A8B9CC' },
                { Icon: SiCplusplus, color: '#00599C' },
                { Icon: FaJava, color: '#007396' },
            ],
        },
        {
            title: 'Database Management',
            description: 'Data models that balance scale, cost, and speed.',
            icons: [
                { Icon: SiMysql, color: '#4479A1' },
                { Icon: SiPostgresql, color: '#4169E1' },
                { Icon: SiMongodb, color: '#47A248' },
                { Icon: SiFirebase, color: '#FFCA28' },
            ],
        },
        {
            title: 'Mobile App Development',
            description: 'Shared codebases that feel native and fluid.',
            icons: [
                { Icon: SiReact, color: '#61DAFB' },
            ],
        },
        {
            title: 'Version Control & Collaboration',
            description: 'Clean histories, thoughtful reviews, and fast delivery.',
            icons: [
                { Icon: SiGithub, color: '#ffffff' },
                { Icon: SiGit, color: '#F05032' },
            ],
        },
        {
            title: 'Cloud & Deployment',
            description: 'Resilient infra with modern tooling and observability.',
            icons: [
                { Icon: SiDocker, color: '#2496ED' },
                { Icon: VscAzure, color: '#0078D4' },
                { Icon: SiAmazon, color: '#FF9900' },
                { Icon: SiGooglecloud, color: '#4285F4' },
                { Icon: SiVercel, color: '#ffffff' },
            ],
        },
        {
            title: 'Testing & Debugging',
            description: 'Confidence through coverage, automation, and observability.',
            icons: [
                { Icon: SiPostman, color: '#FF6C37' },
                { Icon: SiJest, color: '#C21325' },
                { Icon: SiSelenium, color: '#43B02A' },
            ],
        },
        {
            title: 'UI/UX Design',
            description: 'End-to-end product thinking from flows to polish.',
            icons: [
                { Icon: SiFigma, color: '#F24E1E' },
            ],
        },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-backdrop" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="skills-header"
                >
                    <div className="skills-pill">Capabilities</div>
                    <h2 className="skills-title">Skills that fuel my passion</h2>
                    <p className="skills-subtitle">
                        A curated mix of design, engineering, and delivery disciplines I lean on to ship polished products.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="skill-card"
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="skill-icons">
                                {category.icons.map((item, idx) => (
                                    <span key={idx} className="skill-icon-badge">
                                        <item.Icon size={18} style={{ color: item.color }} />
                                    </span>
                                ))}
                            </div>
                            <div className="skill-copy">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
