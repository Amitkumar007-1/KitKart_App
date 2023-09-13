import { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import rupee from "../Images/rupee.png";
const Aside = () => {
  const {
    state: { cart }
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0)
    );
  }, [cart]);
  return (
    <>
      <div
        class="card text-center"
        style={{ background: "#bdc3c7", color: "black", height: "70vh" }}
      >
        <div class="card-header" style={{ fontWeight: "bold" }}>
          Billing Area
        </div>
        <span class="text-start">
          <h5 style={{ fontSize: "1.5rem" }}>Hi Amit</h5>
        </span>
        <div
          class="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}
        >
          <h5 class="card-title">Your Cart Bill</h5>
          <p class="card-text">
            <h5>
              Total <img src={rupee} alt="..." /> {total}
            </h5>
          </p>
          <a href="/" class="btn btn-primary">
            Proceed To Checkout
          </a>
        </div>
        <div class="card-footer text-body-secondary">Made In India </div>
      </div>
    </>
  );
};
export default Aside;
