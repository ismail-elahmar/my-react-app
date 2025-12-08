import { useEffect, useRef, useState } from "react";
import './Footer.css';
import LOGO from '../../source/logo.png';
import { Link } from 'react-scroll';

export default function Footer() {
  const footerRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 } // Trigger when 20% of footer is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${visible ? 'animate-footer' : ''}`}>
      <div className="footer-content">
        <div className="footer-left">
          <img src={LOGO} alt="logo" className="footer-logo" />
          <p>
            The official IT Club of FSA Agadir — where innovation meets collaboration.
            We empower students to learn, create, and share knowledge in tech, AI, and development.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <Link to="container-home" smooth={true} offset={-100} duration={1500} spy={true}><li>Home</li></Link>
            <Link to="About" smooth={true} offset={-350} duration={1000} spy={true}><li>About Us</li></Link>
            <Link to="cards-content" smooth={true} offset={-100} duration={1000} spy={true}><li>Activities</li></Link>
            <Link to="team-section" smooth={true} offset={-100} duration={1000} spy={true}><li>Team</li></Link>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact</h3>
          <ul>
            <li><i className="fa-solid fa-envelope"></i> itclubfsa@gmail.com</li>
            <li><i className="fa-solid fa-phone"></i> +212 6 12 34 56 78</li>
          </ul>
          <div className="social-icon">
             <a href="" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
             <a href="https://www.linkedin.com/company/it-club-fsa/posts/?feedView=all" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
             <a href="https://www.instagram.com/it_club_fsa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
             <a href="https://discord.gg/kBfmfYhE" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 IT Club FSA - All rights reserved.</p>
        <span>
          Developed by <a href="https://linktr.ee/elahmarismail" target="_blank" rel="noreferrer">Ismail ElAhmar</a>
        </span>
      </div>
    </footer>
  );
}
