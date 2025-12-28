import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        text: "The nurse provided for my father was an angel. She handled his diabetic wound care with so much patience.",
        role: "Daughter of Patient"
    },
    {
        name: "Rahul Mehta",
        text: "We needed ICU setup at home for my mother. The team was efficient, and the 24/7 staff was incredibly professional.",
        role: "Son of Patient"
    },
    {
        name: "Anita Roy",
        text: "Post-surgery recovery was scary, but having a skilled nurse at home made it smooth. Highly recommended.",
        role: "Patient"
    }
];

export default function Testimonials() {
    return (
        <section id="reviews" style={{ padding: "100px 20px" }}>
            <div className="container">
                <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "60px" }}>Stories of <span className="text-gradient">Hope & Healing</span></h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: "white",
                                padding: "40px",
                                borderRadius: "24px",
                                boxShadow: "var(--shadow-soft)",
                                position: "relative"
                            }}
                        >
                            <Quote size={40} color="var(--primary-light)" style={{ position: "absolute", top: "20px", left: "20px", transform: "rotate(180deg)" }} fill="currentColor" />

                            <p style={{ position: "relative", zIndex: 1, fontSize: "1.05rem", color: "var(--text-heading)", fontStyle: "italic", marginBottom: "24px" }}>
                                "{t.text}"
                            </p>

                            <div>
                                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{t.name}</div>
                                <div style={{ fontSize: "0.85rem", color: "var(--text-body)" }}>{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
