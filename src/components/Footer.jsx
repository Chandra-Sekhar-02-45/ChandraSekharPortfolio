import { PROFILE } from '../data';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 bg-white border-t-4 border-black cursor-default">
            <div className="container">

                {/* Visual Call to Action inspired by image */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <p className="text-gray-500 text-lg mb-4">That's all for now.</p>
                        <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-[0.9]">
                            Got a project? <br />
                            Let's talk.
                        </h2>
                    </div>

                    <div>
                        <a href="mailto:rvcsraju@gmail.com" className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-black font-bold text-lg hover:scale-110 transition-transform shadow-[8px_8px_0px_#000000] border-4 border-black">
                            <span className="group-hover:hidden">Get in touch</span>
                            <ArrowUpRight className="hidden group-hover:block w-12 h-12" />
                        </a>
                    </div>
                </div>

                {/* Big Marquee / Name */}
                <div className="border-t border-gray-100 pt-12">
                    <h1 className="text-[10vw] md:text-[12vw] font-bold text-black leading-none tracking-tighter text-center md:text-left opacity-90">
                        {PROFILE.name.split(' ')[0]}
                        <span className="text-gray-400 ml-4 font-bold opacity-50">.Dev</span>
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm text-gray-500 font-medium uppercase tracking-wider">
                    <p>Designed & Built by {PROFILE.name}</p>
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
