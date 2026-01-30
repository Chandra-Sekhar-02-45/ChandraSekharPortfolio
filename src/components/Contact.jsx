import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-light py-24 bg-white-50" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
                    <p className="text-muted text-lg">
                        Have a project in mind? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Mail className="text-black" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Email</h4>
                                <a href="mailto:rvcsraju@gmail.com" className="text-muted hover:text-black transition-colors">
                                    rvcsraju@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Phone className="text-black" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Phone</h4>
                                <p className="text-muted">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                                <MapPin className="text-black" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Location</h4>
                                <p className="text-muted">India</p>
                            </div>
                        </div>
                    </div>

                    <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">Send a message</h3>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-600">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-white-50 rounded-lg border border-gray-200 focus:border-black outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-600">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-white-50 rounded-lg border border-gray-200 focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-600">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-white-50 rounded-lg border border-gray-200 focus:border-black outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button className="btn btn-primary-light w-full justify-center mt-2">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
