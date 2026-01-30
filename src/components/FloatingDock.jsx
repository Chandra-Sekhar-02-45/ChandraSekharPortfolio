import { motion } from 'framer-motion';
import { Home, TerminalSquare, Box, FileText, Github, ArrowUpRight } from 'lucide-react';

const DOCK_ITEMS = [
  { label: 'Home', href: '#', icon: Home },
  { label: 'Skills', href: '#skills', icon: TerminalSquare },
  { label: 'Projects', href: '#projects', icon: Box },
  { label: 'About', href: '#about', type: 'avatar' },
  { label: 'Experience', href: '#experience', icon: FileText },
  { label: 'GitHub', href: 'https://github.com/Chandra-Sekhar-02-45', icon: Github, external: true },
  { label: 'Contact', href: '#contact', icon: ArrowUpRight },
];

const FloatingDock = () => {
  return (
    <div className="dock-shell" role="navigation" aria-label="Quick section navigation">
      <div className="dock-track">
        {DOCK_ITEMS.map((item, index) => {
          if (item.type === 'avatar') {
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className="dock-item dock-avatar"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
              >
                <div className="dock-avatar-circle">
                  <img src="/assets/about_illustration.png" alt="About avatar" />
                </div>
              </motion.a>
            );
          }

          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              className="dock-item"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="dock-icon">
                <Icon size={22} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDock;
