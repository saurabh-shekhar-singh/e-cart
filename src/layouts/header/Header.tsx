import Hamburger from "@/components/Hamburger/Hamburger";
import Navbar from "@/components/Navbar/Navbar";
import Navicon from "@/components/Navicon/Navicon";
import "@styles/header.css";
import data from "@/assets/en.json";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
        <Link to="/" className="company-info">
          <img src="../../public/logo.png" alt="Company Logo" />
          <span className="title">{data.title}</span>
        </Link>
        <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Navbar isNavOpen={isNavOpen} />
        <Navicon isNavOpen={isNavOpen} />
      </nav>
    </header>
  );
}

export default Header;
