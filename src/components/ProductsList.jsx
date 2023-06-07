import productsJson from '../data/products.json';
import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice.js";

const ProductsList = () => {
  const dispatch = useDispatch();

  const handleAddCart = (id) => {
    dispatch(addCart({ id }));
  };

  return (
    <>
      {productsJson.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <img src={product.picture} alt={product.name} />
          <button onClick={() => handleAddCart(product)}>Buy</button>
        </div>
      ))}
    </>
  );
};

export default ProductsList;
