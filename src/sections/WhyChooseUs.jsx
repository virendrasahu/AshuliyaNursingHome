import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield, HeartHandshake } from "lucide-react";

const features = [
    {
        title: "100% Verified Nurses",
        description: "Every nurse undergoes a rigorous background check and skills assessment.",
        icon: <Shield size={24} color="#3B82F6" />,
        bg: "#EFF6FF"
    },
    {
        title: "Personalized Care Plans",
        description: "We design care routines tailored to the specific medical needs of your loved one.",
        icon: <HeartHandshake size={24} color="#10B981" />,
        bg: "#ECFDF5"
    },
    {
        title: "24/7 Emergency Support",
        description: "Our support team is always active to handle any medical emergencies or queries.",
        icon: <Clock size={24} color="#F59E0B" />,
        bg: "#FFFBEB"
    },
    {
        title: "Hospital-Grade Quality",
        description: "Experience the same level of professional care and hygiene as a top-tier hospital.",
        icon: <CheckCircle2 size={24} color="#8B5CF6" />,
        bg: "#F5F3FF"
    }
];

export default function WhyChooseUs() {
    return (
        <section style={{ padding: "100px 20px" }}>
            <div className="container">
                <div className="row align-items-center gy-5">

                    {/* Left: Text & Features */}
                    <div className="col-lg-6 order-2 order-lg-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{
                                display: "inline-block",
                                padding: "8px 16px",
                                background: "rgba(59, 130, 246, 0.1)",
                                color: "var(--primary)",
                                borderRadius: "30px",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                marginBottom: "16px"
                            }}>
                                Why Choose Us
                            </div>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "24px", maxWidth: "400px" }}>
                                We Treat Your Family Like <span className="text-gradient">Our Own</span>
                            </h2>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-body)", marginBottom: "40px" }}>
                                Choosing home care is a big decision. We make it easier by ensuring transparency, safety, and the highest medical standards.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                                    >
                                        <div style={{
                                            minWidth: "48px", height: "48px",
                                            borderRadius: "12px",
                                            background: feature.bg,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            marginTop: "4px"
                                        }}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px" }}>{feature.title}</h4>
                                            <p style={{ fontSize: "0.95rem", color: "var(--text-body)" }}>{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual Abstract Composition */}
                    <div className="col-lg-6 order-1 order-lg-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{ position: "relative", height: "500px", display: "flex", justifyContent: "center" }}
                        >
                            <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
                                {/* Card 1 */}
                                <div style={{
                                    position: "absolute", top: "0", right: "20px",
                                    width: "100%", height: "380px",
                                    background: "#F1F5F9",
                                    borderRadius: "32px",
                                    transform: "rotate(3deg)",
                                    zIndex: 0
                                }} />

                                {/* Card 2 (Main) */}
                                <div style={{
                                    position: "absolute", top: "20px", right: "40px",
                                    width: "100%", height: "380px",
                                    background: "var(--primary)",
                                    borderRadius: "32px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "white",
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                    zIndex: 1
                                }}>
                                    <div style={{ textAlign: "center", padding: "30px" }}>
                                        <div style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "8px" }}>2K+</div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 500, opacity: 0.9 }}>Patients Recovered<br />Happily at Home</div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="glass-panel"
                                    style={{
                                        position: "absolute", bottom: "60px", left: "0",
                                        padding: "20px 24px",
                                        display: "flex", alignItems: "center", gap: "12px",
                                        borderRadius: "20px",
                                        zIndex: 2,
                                        background: "rgba(255, 255, 255, 0.9)",
                                        maxWidth: "80%"
                                    }}
                                >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <span style={{ fontSize: "3rem", lineHeight: 1 }}>⭐</span>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>4.9/5</div>
                                        <div style={{ fontSize: "0.85rem", color: "var(--text-body)" }}>Google Rating</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
