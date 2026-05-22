import { Link } from "react-router-dom";
import "./Navicon.css";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

function Navicon() {
  const { cart } = useContext(AppContext);
  const cartItemCount = cart.reduce((total, item) => total + item?.quantity, 0);
  // const [cartItemCount, setCartItemCount] = useState(0);

  // useEffect(() => {
  //   setCartItemCount(cart.reduce((total, item) => total + item?.quantity, 0));
  // }, [cart]);

  return (
    <div className="navbar-icons">
      <Link to="/cart">
        {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
        <img
          src="../../public/cart-32.png"
          alt="Shopping Cart"
          className="icon-shopping-cart"
        />
      </Link>
      <Link to="/account">
        <img
          src="../../public/account-32.png"
          alt="User Account"
          className="icon-user"
        />
      </Link>
    </div>
  );
}

export default Navicon;
