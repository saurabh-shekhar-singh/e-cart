import Hamburger from "@/components/Hamburger/Hamburger";
import Navbar from "@/components/Navbar/Navbar";
import Navicon from "@/components/Navicon/Navicon";
import "@styles/header.css";
import data from "@/assets/en.json";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
        <div className="company-info">
          <img src="../../public/company-logo-2.png" alt="Company Logo" />
          <div className="title">{data.title}</div>
        </div>
        <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Navbar isNavOpen={isNavOpen} />
        <Navicon isNavOpen={isNavOpen} />
      </nav>
    </header>
  );
}

export default Header;
