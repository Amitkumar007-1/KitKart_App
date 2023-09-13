import { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch
  } = CartState();
  const [PresentIncart, setPresentIncart] = useState(false);
  useEffect(() => {
    setPresentIncart(
      cart.find((prod) => {
        if (prod.id == product.id) {
          return true;
        } else return false;
      })
    );
  }, [cart]);
  return (
    <>
      <div
        class="card mb-3 col-md-8 m-5"
        style={{ maxWwidth: "540px", border: "2px solid black" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={product.image}
              class="img-fluid rounded-start"
              alt="..."
              style={{ height: "280px" }}
            />
          </div>
          <div class="col-md-8" style={{ backgroundColor: "#eecda3" }}>
            <div class="card-body">
              <h5 class="card-title mb-5">{product.title}</h5>
              <p class="card-text mb-5">
                <h5>Rs: {product.price} </h5>
              </p>
              <p class="card-text">
                <div class="d-grid gap-2 col-6 mx-auto">
                  {PresentIncart ? (
                    <button class="btn" style={{ backgroundColor: "#a8e063" }}>
                      Added
                    </button>
                  ) : (
                    <button
                      class="btn "
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: product })
                      }
                      style={{ backgroundColor: "#6dd5ed" }}
                      type="button"
                    >
                      Add To Cart
                      <i
                        class="fa-solid fa-cart-plus fs-5"
                        style={{ fontWeight: "bolder", color: "black" }}
                      />
                    </button>
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
