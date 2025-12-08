import logo from '../../source/logo.png';
import {Link}  from 'react-scroll';
import { useEffect, useState } from 'react';
import '../Navbar/Nav.css';

export default function Navbar() {  
  const [sticky, setSticky] = useState(false);
  const [move, setMove] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 30 ? setMove(true) : setMove(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} ${move ? 'move' : ''}`}>
      <Link to="container-home"  smooth={true}  offset={-80} duration={1500} spy={true} ><img src={logo} alt="logo" className="logo" /></Link>
      <label className="hamburger">
  <input 
    type="checkbox" 
    onChange={(e) => setOpenMenu(e.target.checked)} 
  />
  <svg viewBox="0 0 32 32">
    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className="line" d="M7 16 27 16"></path>
  </svg>
</label>

       <ul className={`content-link ${openMenu ? 'open' : ''}`}>

  <li>
    <Link to="container-home"  smooth={true}  offset={-100} duration={1500} spy={true}  activeClass="active" className="nav-item">Home</Link>
  </li>

   <li>
    <Link  to="About"  smooth={true}  offset={-350}  duration={1000}  spy={true}  activeClass="active" className="nav-item" > About us </Link>
  </li>
  <li>
    <Link to="stats-section"  smooth={true}  offset={-90} duration={1000} spy={true}  activeClass="active" className="nav-item">statistics</Link>
  </li>
  
  <li>
    <Link to="cards-content"  smooth={true}  offset={-100} duration={1000} spy={true} activeClass="active"className="nav-item">Activities</Link>
  </li>
  <li>
    <Link to="team-section" smooth={true} offset={-100} duration={1000} spy={true} activeClass="active" className="nav-item">Team</Link>
  </li>
  <li>
    <Link  to="partner-section" smooth={true}  offset={20}  duration={1500} spy={true} activeClass="active" className="nav-item">Partners</Link>
  </li>
  <li>
    <Link  to="Contacte-content" smooth={true}  offset={-350}  duration={1000} spy={true} activeClass="active" className="nav-item">Contact</Link>
  </li>
   <li>
  <button class="neon-button"><span>Register</span></button>
</li>

</ul>



    </nav>
  );
}
