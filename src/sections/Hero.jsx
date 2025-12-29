import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ShieldCheck, Activity, User, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from '../assets/hero_bg_8k.png';
import nurseImg1 from '../assets/nurse_young.png';
import nurseImg2 from '../assets/nurse_feature.png';
import nurseImg3 from '../assets/nurse_feature_2.png';

const nurses = [
    {
        name: "Priya Sharma",
        role: "Certified Caregiver",
        image: nurseImg1,
        experience: "3+ Years",
        tag: "Young & Energetic"
    },
    {
        name: "Neha Gupta",
        role: "Junior Staff Nurse",
        image: nurseImg2,
        experience: "5+ Years",
        tag: "Compassionate"
    },
    {
        name: "Anjali Singh",
        role: "Healthcare Assistant",
        image: nurseImg3,
        experience: "4+ Years",
        tag: "Dedicated"
    }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % nurses.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundColor: '#F8FAFC'
        }}>
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
                                        boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.4)',
                                        border: 'none'
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
                        <div style={{ position: 'relative', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            {/* Main Character / Central Element (Nurse Carousel) */}
                            <div style={{
                                width: '100%',
                                maxWidth: '300px',
                                aspectRatio: '1/1.4',
                                background: 'white',
                                borderRadius: '32px',
                                position: 'relative',
                                boxShadow: '0 40px 100px -10px rgba(0,0,0,0.3)',
                                overflow: 'visible', // Changed for indicators
                                zIndex: 1,
                                transform: 'translateX(40px)',
                                border: 'none'
                            }}>
                                <div style={{ height: '100%', overflow: 'hidden', borderRadius: '32px', position: 'relative' }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.6 }}
                                            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                            <div style={{ width: '100%', height: '72%', overflow: 'hidden', position: 'relative' }}>
                                                <img
                                                    src={nurses[currentIndex].image}
                                                    alt={nurses[currentIndex].name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                                <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
                                                    <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.9)', color: 'var(--primary)', padding: '5px 12px', borderRadius: '20px', fontWeight: 700, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>{nurses[currentIndex].tag}</span>
                                                </div>
                                            </div>
                                            <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'white' }}>
                                                <h3 style={{ fontSize: '1.2rem', marginBottom: '2px', color: 'var(--text-heading)', fontWeight: 800 }}>{nurses[currentIndex].name}</h3>
                                                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>{nurses[currentIndex].role}</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{ display: 'flex', gap: '2px' }}>
                                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} fill="#FACC15" color="#FACC15" />)}
                                                    </div>
                                                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>{nurses[currentIndex].experience} exp.</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Dot Indicators - Positioned inside container but at bottom */}
                                <div style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '6px', zIndex: 10 }}>
                                    {nurses.map((_, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: i === currentIndex ? '18px' : '6px',
                                                height: '6px',
                                                borderRadius: '3px',
                                                background: i === currentIndex ? 'var(--primary)' : 'rgba(0,0,0,0.1)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Card 1 - Shifted to avoid overlap */}
                            <motion.div
                                animate={floatAnimation}
                                className="glass-panel"
                                style={{
                                    position: 'absolute',
                                    top: '40px',
                                    left: '-30px',
                                    padding: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    width: '180px',
                                    maxWidth: '90%',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ background: '#DCFCE7', padding: '10px', borderRadius: '12px', color: '#16A34A' }}>
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Vitals</div>
                                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>Monitoring</div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 - Adjusted position */}
                            <motion.div
                                animate={floatAnimationDelayed}
                                className="glass-panel"
                                style={{
                                    position: 'absolute',
                                    bottom: '60px',
                                    right: '-20px',
                                    padding: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    width: '200px',
                                    maxWidth: '90%',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ background: '#E0E7FF', padding: '10px', borderRadius: '12px', color: '#4F46E5' }}>
                                    <User size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Staff</div>
                                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>Available 24/7</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
