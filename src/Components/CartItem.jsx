import "../styles.css";
import { CartState } from "../Context/Context";
const CartItem = ({ product }) => {
  const { dispatch } = CartState();

  return (
    <>
      <div class="containerfluid col-md-12  ms-2 me-4 ">
        <div
          class="card mb-3 boxshadow border border-dark"
          style={{ maxwidth: "540px" }}
        >
          <div class="row g-0">
            <div
              class="col-md-2"
              style={{
                boxShadow: "5px 1px gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={product.image}
                class="img-fluid rounded-start"
                alt="..."
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div class="col-md-6 ">
              <div class="card-body ">
                <h5 class="card-title">{product.title}</h5>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <h5>Rs: {product.price} </h5>
                  <h5 style={{ fontSize: "1.5rem" }}> Qty:{product.qty}</h5>
                </div>
              </div>
            </div>
            <div
              class=" col-md-2"
              role="group"
              aria-label="Basic mixed styles example"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto"
              }}
            >
              <div
                style={{
                  display: "flex",

                  alignItems: "center"
                }}
              >
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style={{ width: "70px" }}
                  onClick={() =>
                    dispatch({ type: "DECREASE_QUANTITY", payload: product })
                  }
                >
                  -
                </button>

                <button
                  type="button"
                  class="btn btn-outline-success"
                  style={{ marginRight: "20px", width: "70px" }}
                  onClick={() =>
                    dispatch({ type: "INCREASE_QUANTITY", payload: product })
                  }
                >
                  +
                </button>
                <i
                  class="fa-solid fa-trash fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: product })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
