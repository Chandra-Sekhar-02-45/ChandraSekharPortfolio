import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

export const PROFILE = {
    name: "Chandra Sekhar",
    role: "Frontend Developer & Founder",
    bio: "I craft accessible, pixel-perfect, and performant web experiences. Currently leading Innovation Link while exploring the frontiers of web technology.",
    social: [
        { icon: Github, link: "https://github.com/Chandra-Sekhar-02-45", label: "Github" },
        { icon: Linkedin, link: "https://linkedin.com/in/chandrasekhar45", label: "LinkedIn" },
        { icon: Mail, link: "mailto:rvcsraju@gmail.com", label: "Email" },
        { icon: Instagram, link: "https://www.instagram.com/_vcsr_45", label: "Instagram" },
        { icon: Twitter, link: "https://x.com/_Chanduu45_", label: "Twitter" }
    ]
};

export const SKILLS = [
    "React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS",
    "Node.js", "Framer Motion", "Git", "Figma", "Next.js"
];

export const EXPERIENCE = [
    {
        period: "2024 - Present",
        role: "Founder & Lead Developer",
        company: "Innovation Link",
        description: "Founded a platform bridging the gap between student startups and investors. Leading a team of 4 developers and architecting the core platform."
    },
    {
        period: "2023 - 2024",
        role: "Frontend Intern",
        company: "Tech Solutions Inc",
        description: "Collaborated on building a SaaS dashboard using React and Redux. Optimized performance and improved load times by 40%."
    },
    {
        period: "2022 - Present",
        role: "CS Student",
        company: "KL University",
        description: "Focusing on Web Technologies, Data Structures, and Software Engineering. Active member of the university coding club."
    }
];

export const PROJECTS = [
    {
        title: "Innovation Link",
        description: "A startup ecosystem platform connecting entrepreneurs, investors, and mentors. Comprehensive dashboard and networking features.",
        tags: ["React", "Node.js", "MongoDB", "Framer Motion"],
        link: "https://innovationlink.in",
        github: "#"
    },
    {
        title: "Portfolio V1",
        description: "My previous portfolio utilizing advanced CSS animations and 3D tilt effects. A playground for creative development.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "#"
    },
    {
        title: "Task Master",
        description: "A productivity application with drag-and-drop features and local storage persistence for efficient task management.",
        tags: ["React", "DND Kit", "Vite"],
        link: "#",
        github: "#"
    }
];
