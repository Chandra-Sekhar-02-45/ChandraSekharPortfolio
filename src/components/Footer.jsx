import { PROFILE } from '../data';

const Footer = () => {
    return (
        <footer className="py-6 text-center text-sm text-muted" style={{ padding: '2rem', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ fontFamily: 'monospace' }}>
                Designed & Built by {PROFILE.name}
            </p>
        </footer>
    );
};

export default Footer;
