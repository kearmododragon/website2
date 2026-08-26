import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
          <a
        href="https://www.instagram.com/kearmododragon/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
            <a
        href="https://www.linkedin.com/in/ciarankearney92/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </nav>
  );
}

export default Navbar;