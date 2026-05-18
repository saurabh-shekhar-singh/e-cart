import "./Navbar.css";

function Navbar() {
  return (
    <ul className="navbar-list">
      <li>
        <a href="/collections">Collections</a>
      </li>
      <li>
        <a href="/newarrivals">New arrivals</a>
      </li>
      <li>
        <a href="/archive">Archive</a>
      </li>
      <li>
        <a href="/support">Support</a>
      </li>
    </ul>
  );
}

export default Navbar;
