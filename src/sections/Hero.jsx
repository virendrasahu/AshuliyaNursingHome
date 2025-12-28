import { motion } from "framer-motion";
import { Phone, Calendar, Heart, ShieldCheck, Activity, User } from "lucide-react";

export default function Hero() {
    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    const floatAnimationDelayed = {
        y: [0, -20, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
        },
    };

    return (
        <section id="home" style={{
            position: 'relative',
            minHeight: '100vh',
            paddingTop: '100px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 50%, rgba(239, 246, 255, 0.8) 0%, rgba(248, 250, 252, 1) 100%)'
        }}>
            {/* Background Blobs (Keep unchanged) */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'rgba(16, 185, 129, 0.05)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center gy-5">
                    {/* Left Content */}
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '8px 16px',
                                    background: 'var(--secondary-light)',
                                    color: 'var(--secondary)',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    marginBottom: '24px'
                                }}
                            >
                                <ShieldCheck size={18} />
                                <span>Verified & Trained Professionals</span>
                            </motion.div>

                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                                Trusted Home Nursing <br />
                                <span className="text-gradient">Care at Your Doorstep</span>
                            </h1>

                            <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', marginBottom: '40px', maxWidth: '500px' }}>
                                Expert bedside nursing, post-surgical care, and elderly support delivered with compassion in the comfort of your home.
                            </p>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '16px 32px',
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.4)'
                                    }}
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <Calendar size={20} />
                                    Book a Nurse
                                </motion.button>
                                <motion.a
                                    href="tel:+919798596303"
                                    whileHover={{ scale: 1.05, background: 'rgba(59, 130, 246, 0.1)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        background: 'transparent',
                                        color: 'var(--primary)',
                                        padding: '16px 32px',
                                        borderRadius: '50px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        border: '2px solid rgba(59, 130, 246, 0.2)',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Phone size={20} />
                                    Call Now
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visuals - Antigravity Floating Cards */}
                    <div className="col-lg-6">
                        <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            {/* Main Character / Central Element (Abstract Representation) */}
                            <div style={{
                                width: '100%',
                                maxWidth: '400px',
                                aspectRatio: '1/1',
                                background: 'white',
                                borderRadius: '40px',
                                position: 'relative',
                                boxShadow: 'var(--shadow-soft)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1
                            }}>
                                {/* Placeholder for an image - using an icon for now */}
                                <div style={{ padding: '40px', textAlign: 'center' }}>
                                    <div style={{ width: '120px', height: '120px', background: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                        <Heart size={60} color="var(--primary)" fill="var(--primary)" fillOpacity={0.2} />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Compassionate Care</h3>
                                    <p style={{ color: 'var(--text-body)' }}>Treating your loved ones like family.</p>
                                </div>
                            </div>

                            {/* Floating Card 1 */}
                            <motion.div
                                animate={floatAnimation}
                                className="glass-panel"
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    left: '-20px',
                                    padding: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    width: '200px',
                                    maxWidth: '90%',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ background: '#DCFCE7', padding: '10px', borderRadius: '12px', color: '#16A34A' }}>
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Vitals</div>
                                    <div style={{ fontWeight: 700, color: '#0F172A' }}>Monitoring</div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 */}
                            <motion.div
                                animate={floatAnimationDelayed}
                                className="glass-panel"
                                style={{
                                    position: 'absolute',
                                    bottom: '80px',
                                    right: '-10px',
                                    padding: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    width: '220px',
                                    maxWidth: '90%',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ background: '#E0E7FF', padding: '10px', borderRadius: '12px', color: '#4F46E5' }}>
                                    <User size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Staff</div>
                                    <div style={{ fontWeight: 700, color: '#0F172A' }}>Available 24/7</div>
                                </div>
                            </motion.div>

                            {/* Floating Circle decoration */}
                            <motion.div
                                animate={{ y: [0, 30, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    top: '20%',
                                    right: '-20px',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                                    zIndex: 0
                                }}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
