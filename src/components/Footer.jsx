import { PROFILE } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-sm text-muted border-t border-gray-100 bg-white">
            <div className="container flex flex-col items-center gap-2">
                <p className="font-medium text-black">
                    Designed & Built by {PROFILE.name}
                </p>
                <p className="text-gray-400 text-xs">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
