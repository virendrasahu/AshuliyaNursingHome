import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mykypjeb"); // Replace with your Formspree ID

    if (state.succeeded) {
        return (
            <section id="contact" style={{ padding: "100px 20px", background: "linear-gradient(to bottom, #FAFAFA, #EFF6FF)", textAlign: "center" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ background: "white", padding: "60px", borderRadius: "24px", boxShadow: "var(--shadow-soft)", maxWidth: "500px", margin: "0 auto" }}
                >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        <CheckCircle size={64} color="var(--secondary)" />
                    </div>
                    <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Booking Received!</h2>
                    <p style={{ color: "var(--text-body)" }}>
                        Thank you for choosing Ashuliya Home Nursing. Our care coordinator will reach out to you shortly to confirm the details.
                    </p>
                </motion.div>
            </section>
        )
    }

    return (
        <section id="contact" style={{ padding: "100px 20px", background: "linear-gradient(to bottom, #FAFAFA, #EFF6FF)" }}>
            <div className="container" style={{ maxWidth: "600px" }}>

                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Book a <span className="text-gradient">Nurse Now</span></h2>
                    <p style={{ color: "var(--text-body)" }}>Fill out the form and our care coordinator will call you within 15 minutes.</p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: "white",
                        padding: "40px",
                        borderRadius: "24px",
                        boxShadow: "var(--shadow-soft)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Full Name</label>
                        <input id="name" name="name" type="text" placeholder="John Doe" required style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #CBD5E1", fontSize: "1rem" }} />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div>
                        <label htmlFor="phone" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Phone Number</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91 9798596303" required style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #CBD5E1", fontSize: "1rem" }} />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>

                    <div>
                        <label htmlFor="service" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Service Required</label>
                        <select id="service" name="service" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #CBD5E1", fontSize: "1rem", background: "white" }}>
                            <option>Bedside Nursing</option>
                            <option>Post-Surgery Care</option>
                            <option>Critical Care / ICU</option>
                            <option>Elderly Care</option>
                            <option>Injection / Wound Dressing</option>
                            <option>Other</option>
                        </select>
                        <ValidationError prefix="Service" field="service" errors={state.errors} />
                    </div>

                    <div>
                        <label htmlFor="date" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Preferred Date</label>
                        <input id="date" name="date" type="date" required style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #CBD5E1", fontSize: "1rem" }} />
                        <ValidationError prefix="Date" field="date" errors={state.errors} />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={state.submitting}
                        style={{
                            background: "var(--primary)",
                            color: "white",
                            padding: "16px",
                            borderRadius: "16px",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            marginTop: "10px",
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                            opacity: state.submitting ? 0.7 : 1
                        }}
                    >
                        <Send size={18} />
                        {state.submitting ? 'Submitting...' : 'Confirm Booking'}
                    </motion.button>

                </motion.form>

            </div>
        </section>
    )
}
