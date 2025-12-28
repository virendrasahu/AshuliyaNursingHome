import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" style={{ padding: "100px 20px", background: "var(--bg-subtle)", textAlign: "center" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "32px" }}>More Than Just Nursing, <br /> We Are <span className="text-gradient">Family</span></h2>

                    <p style={{ fontSize: "1.1rem", color: "var(--text-body)", marginBottom: "32px", lineHeight: "1.8" }}>
                        At Ashuliya Home Nursing, we believe healing happens best at home. Founded by a team of specialist doctors and senior nurses, our mission is to bridge the gap between hospital care and home comfort.
                    </p>

                    <p style={{ fontSize: "1.1rem", color: "var(--text-body)", marginBottom: "48px", lineHeight: "1.8" }}>
                        Whether it's post-operative support, elderly companionship, or critical ICU management, we stand by your side with professional expertise and human warmth.
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
                        <div>
                            <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--primary)" }}>5+</div>
                            <div style={{ fontSize: "0.9rem", color: "var(--text-body)" }}>Years of Service</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--secondary)" }}>10k+</div>
                            <div style={{ fontSize: "0.9rem", color: "var(--text-body)" }}>Home Visits</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#8B5CF6" }}>500+</div>
                            <div style={{ fontSize: "0.9rem", color: "var(--text-body)" }}>Certified Nurses</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
