import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/ to get these.
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section-light py-16 bg-gray-50/50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-black">Let’s work together</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have a project in mind? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-video-shell mb-14"
                >
                    <div className="contact-video-shell mb-14 border-4 border-black shadow-[8px_8px_0px_#000000] rounded-[32px] overflow-hidden">
                        <video
                            className="contact-video"
                            src="https://goodies.icons8.com/landings/visualpharm/videos/animated-2d/weekday-business-team-strutting-confidently.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </motion.div>

                <div className="contact-grid grid grid-cols-1 md:grid-cols-2 items-start">

                    {/* Left: Contact Details */}
                    <div className="flex flex-col gap-6 md:pr-10 contact-list">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="contact-detail-card"
                        >
                            <div className="contact-detail-icon">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black mb-1">Email</h4>
                                <a href="mailto:rvcsraju@gmail.com" className="text-gray-500 hover:text-black transition-colors block">
                                    rvcsraju@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="contact-detail-card"
                        >
                            <div className="contact-detail-icon">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black mb-1">Phone</h4>
                                <a href="tel:+919876543210" className="text-gray-500 hover:text-black transition-colors block">
                                    +91 6281484445
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="contact-detail-card"
                        >
                            <div className="contact-detail-icon">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-black mb-1">Location</h4>
                                <p className="text-gray-500">
                                    India
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 flex flex-wrap items-center gap-4"
                        >
                            {PROFILE.social.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    className="social-link"
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-card max-w-2xl w-full mx-auto md:ml-auto"
                    >
                        <div className="contact-card-head">
                            <h3>Send a message</h3>
                            <p>I usually respond within one business day.</p>
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-3">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-5 py-4 bg-white rounded-[10px] border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 focus:outline-none transition-all placeholder-gray-400 text-base"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-3">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-5 py-4 bg-white rounded-[10px] border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 focus:outline-none transition-all placeholder-gray-400 text-base"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="6"
                                    className="w-full px-5 py-4 bg-white rounded-[10px] border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 focus:outline-none transition-all placeholder-gray-400 text-base"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn w-full justify-center py-4 bg-white text-black border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <><Loader2 className="animate-spin mr-2" size={20} /> Sending...</>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-sm text-center font-medium mt-2">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center font-medium mt-2">
                                    Failed to send details. Please ensure you have configured your EmailJS keys in the code.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
