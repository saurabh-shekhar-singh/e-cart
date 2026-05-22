import Hamburger from "@/components/Hamburger/Hamburger";
import Navbar from "@/components/Navbar/Navbar";
import Navicon from "@/components/Navicon/Navicon";
import "@styles/header.css";
import data from "@/assets/en.json";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="company-info">
          <img src="../../public/company-logo-2.png" alt="Company Logo" />
          <div className="title">{data.title}</div>
        </div>

        <Navbar />
        <Hamburger />
        <Navicon />
      </nav>
    </header>
  );
}

export default Header;
