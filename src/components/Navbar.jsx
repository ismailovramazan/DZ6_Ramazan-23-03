import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Navbar</h2>
      <p>Items in cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
    </div>
  );
};

export default Navbar;
