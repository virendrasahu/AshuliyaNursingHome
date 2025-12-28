import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{ background: "#0F172A", color: "white", padding: "60px 20px 20px" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", marginBottom: "40px" }}>

                {/* Brand */}
                <div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Heart size={24} fill="var(--primary)" color="var(--primary)" />
                        Ashuliya Home Nursing
                    </div>
                    <p style={{ color: "#94A3B8", lineHeight: "1.6" }}>
                        Professional home nursing care you can trust. bringing hospital-quality healthcare to your doorstep.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "20px", color: "white" }}>Quick Links</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                        {["Home", "Services", "About Us", "Contact"].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase().replace(' ', '')}`} style={{ color: "#CBD5E1", textDecoration: "none", transition: "color 0.2s" }}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "20px", color: "white" }}>Contact Us</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#CBD5E1" }}>
                        <div>📞 <a href="tel:+919798596303" style={{ color: "inherit", textDecoration: "none" }}>+91 9798596303</a></div>
                        <div>📧 care@ashuliyahomenursing.com</div>
                        <div>📍Surya Colony Near Oxford Public School, Ranchi, Jharkhand</div>
                    </div>
                </div>

            </div>

            <div style={{ borderTop: "1px solid #1E293B", paddingTop: "20px", textAlign: "center", color: "#64748B", fontSize: "0.9rem" }}>
                &copy; {new Date().getFullYear()} Ashuliya Home Nursing. All rights reserved.
            </div>
        </footer>
    )
}
