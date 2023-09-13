import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
import "../styles.css";
export default function Item({ product }) {
  const {
    state: { cart },
    dispatch
  } = CartState();
  return (
    <>
      <div
        class="card my-3"
        style={{
          width: "15rem",
          height: "100%",
          border: "1px solid black"
        }}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product?.image}
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "30vh" }}
          />
        </Link>

        <div class="card-body">
          <Link
            to={`/product/${product.id}`}
            style={{ color: "black", textDecorationLine: "none" }}
          >
            <h5 class="card-title  hover-color">{product?.title}</h5>
          </Link>
          <p class="card-text">Price: Rs {product?.price}/-</p>
          {cart.find((prod) => {
            if (prod.id == product.id) {
              return true;
            } else return false;
          }) ? (
            <button class="btn" style={{ backgroundColor: "#a8e063" }}>
              Added
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: product });
              }}
              class="btn "
              style={{ backgroundColor: "#6dd5ed" }}
            >
              Add To Cart{" "}
              <i
                class="fa-solid fa-cart-plus fs-5"
                style={{ fontWeight: "bolder", color: "black" }}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
