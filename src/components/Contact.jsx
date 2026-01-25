import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section relative text-center">
            <div
                className="absolute bottom-0 left-0 right-0 h-[300px]"
                style={{
                    height: '400px',
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: -1
                }}
            />
            <div className="container max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-accent font-medium mb-4" style={{ fontFamily: 'monospace' }}>04. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-muted text-lg mb-10">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <a href="mailto:rvcsraju@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
