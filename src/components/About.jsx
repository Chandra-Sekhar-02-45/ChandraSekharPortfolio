import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-light py-24">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Illustration Left */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:order-1 order-2"
                >
                    <img
                        src="/assets/about_illustration.png"
                        alt="About Illustration"
                        className="max-w-full"
                        style={{ maxHeight: '400px' }}
                    />
                </motion.div>

                {/* Content Right */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:order-2 order-1"
                >
                    <h2 className="text-4xl font-bold mb-8">About Me</h2>
                    <div className="text-lg text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p>
                            Hello! I'm <strong className="text-black">Chandra Sekhar</strong>, a passionate developer who finds joy in creating digital experiences that are not only functional but also beautiful.
                        </p>
                        <p>
                            My journey began with a curiosity for how websites work, which quickly turned into a career obsession. I love bridging the gap between design and engineering, ensuring that every pixel serves a purpose.
                        </p>
                        <p>
                            When I'm not pushing code, I'm likely exploring new design systems, contributing to open source, or finding the perfect cup of coffee.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
