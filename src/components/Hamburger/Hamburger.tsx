import "./hamburger.css";

function Hamburger({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
}) {
  return (
    <a
      className={`navbar-hamburger ${isNavOpen ? "open" : ""}`}
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </a>
  );
}

export default Hamburger;
