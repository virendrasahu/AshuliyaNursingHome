import { motion } from "framer-motion";
import { Bed, Activity, Syringe, HeartPulse, Stethoscope, UserPlus } from "lucide-react";

const services = [
    {
        title: "Bedside Nursing Care",
        description: "Holistic care for elderly & bedridden patients, assisting with daily hygiene, mobility, and feeding.",
        icon: <Bed size={32} color="#3B82F6" />,
        color: "#EFF6FF"
    },
    {
        title: "Wound Dressing & Injection",
        description: "Professional wound care, diabetic foot dressing, and IV/IM injections administered safely at home.",
        icon: <Syringe size={32} color="#10B981" />,
        color: "#ECFDF5"
    },
    {
        title: "Vitals & Medication",
        description: "Regular monitoring of BP, sugar levels, and heart rate, along with timely medication management.",
        icon: <Activity size={32} color="#F59E0B" />,
        color: "#FFFBEB"
    },
    {
        title: "Post-Surgery Care",
        description: "Dedicated support for recovery after surgery, focusing on pain management and mobilization.",
        icon: <UserPlus size={32} color="#8B5CF6" />,
        color: "#F5F3FF"
    },
    {
        title: "Critical Care / ICU",
        description: "ICU-level setup at home with specialized nursing for critical patients requiring ventilator support.",
        icon: <HeartPulse size={32} color="#EF4444" />,
        color: "#FEF2F2"
    },

];

export default function Services() {
    return (
        <section id="services" style={{ padding: "100px 20px", background: "var(--bg-surface)" }}>
            <div className="container">

                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: "2.5rem", marginBottom: "16px" }}
                    >
                        Specialized Home Nursing Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: "1.1rem", color: "var(--text-body)", maxWidth: "600px", margin: "0 auto" }}
                    >
                        We bring hospital-quality care to your bedside with certified nurses trained for every need.
                    </motion.p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "32px"
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)" }}
                            style={{
                                background: "white",
                                borderRadius: "24px",
                                padding: "32px",
                                border: "1px solid rgba(0,0,0,0.04)",
                                boxShadow: "var(--shadow-soft)",
                                cursor: "pointer",
                                transition: "box-shadow 0.3s ease"
                            }}
                        >
                            <div style={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "16px",
                                background: service.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px"
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>{service.title}</h3>
                            <p style={{ color: "var(--text-body)", lineHeight: "1.6" }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
