import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from '../assets/logo.png';

export default function AppNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            expanded={expanded}
            onToggle={(isExpanded) => setExpanded(isExpanded)}
            expand="lg"
            fixed="top"
            className={`transition-all duration-300 ${scrolled || expanded ? 'bg-white shadow-sm' : 'bg-transparent'}`}
            style={{
                transition: "all 0.3s ease",
                backgroundColor: (scrolled || expanded) ? "rgba(255, 255, 255, 0.98)" : "transparent",
                backdropFilter: (scrolled || expanded) ? "blur(10px)" : "none",
                padding: "12px 0"
            }}
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                    <img src={logo} alt="Ashuliya Home Nursing" style={{ height: "40px", width: "auto", borderRadius: "8px" }} />
                    <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)" }}>
                        Ashuliya Home <span style={{ color: "var(--text-heading)" }}>Nursing</span>
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{ border: "none", padding: "8px" }}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? <X size={28} color="var(--primary)" /> : <Menu size={28} color="var(--primary)" />}
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center gap-2 gap-lg-4 mt-3 mt-lg-0">
                        {["Home", "Services", "About", "Reviews"].map((item) => (
                            <Nav.Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setExpanded(false)}
                                style={{
                                    fontWeight: 600,
                                    color: "var(--text-heading)",
                                    fontSize: "1rem",
                                    padding: "10px 15px"
                                }}
                            >
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <div className="d-flex justify-content-center mt-3 mt-lg-0">
                        <a
                            href="tel:+919798596303"
                            className="btn rounded-pill d-flex align-items-center gap-2"
                            style={{
                                background: "var(--primary)",
                                color: "white",
                                fontWeight: 700,
                                padding: "12px 28px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                            }}
                        >
                            <Phone size={18} />
                            Call Now
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
