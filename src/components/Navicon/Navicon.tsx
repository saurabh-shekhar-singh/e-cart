import "./Navicon.css";

function Navicon() {
  return (
    <div className="navbar-icons">
      <a href="/cart">
        <img
          src="../../public/cart-32.png"
          alt="Shopping Cart"
          className="icon-shopping-cart"
        />
      </a>
      <a href="/account">
        <img
          src="../../public/account-32.png"
          alt="User Account"
          className="icon-user"
        />
      </a>
    </div>
  );
}

export default Navicon;
