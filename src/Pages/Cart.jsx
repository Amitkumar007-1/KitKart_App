import { CartState } from "../Context/Context";
import sad from "../Images/sad.png";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import Aside from "../Components/Aside";
const Cart = () => {
  const {
    state: { cart }
  } = CartState();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div class="col-7">
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <CartItem key={index} product={product} />
            ))
          ) : (
            <div class="mt-5">
              <h4>
                Your Cart is Empty <img src={sad} alt="..." />
              </h4>
            </div>
          )}

          <h5>
            <Link to="/">
              <button type="button" class="btn btn-info">
                HOME
              </button>
            </Link>
          </h5>
        </div>
        <div class="col-4">
          <Aside />
        </div>
      </div>
    </>
  );
};
export default Cart;
