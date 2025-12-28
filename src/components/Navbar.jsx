import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Phone, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from '../assets/logo.png';

export default function AppNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-3'}`}
            style={{
                transition: "all 0.3s ease",
                backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                boxShadow: scrolled ? "0 4px 20px -5px rgba(0,0,0,0.1)" : "none"
            }}
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                    <img src={logo} alt="Ashuliya Home Nursing" style={{ height: "45px", width: "auto", objectFit: "contain", borderRadius: "10px", border: "1px solid black", padding: "4px" }} />
                    <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--primary)" }}>
                        Ashuliya Home <span style={{ color: "var(--text-heading)" }}>Nursing</span>
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "none" }}>
                    <Menu size={24} color="var(--text-heading)" />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center gap-4">
                        {["Home", "Services", "About", "Reviews"].map((item) => (
                            <Nav.Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                style={{ fontWeight: 500, color: "var(--text-body)" }}
                            >
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        <a
                            href="tel:+919798596303"
                            className="btn rounded-pill d-flex align-items-center gap-2"
                            style={{
                                background: "var(--primary)",
                                color: "white",
                                fontWeight: 600,
                                padding: "10px 24px",
                                border: "none"
                            }}
                        >
                            <Phone size={18} />
                            +91 9798596303
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
