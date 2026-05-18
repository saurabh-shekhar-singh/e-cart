import Hamburger from "@/components/Hamburger/Hamburger";
import Navbar from "@/components/Navbar/Navbar";
import Navicon from "@/components/Navicon/Navicon";
import "@styles/header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="title">AETHER</div>
        <Navbar />
        <Hamburger />
        <Navicon />
      </nav>
    </header>
  );
}

export default Header;
