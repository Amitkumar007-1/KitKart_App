import { useState } from "react";
import { createSearchParams, useNavigate, Link } from "react-router-dom";
import "../styles.css";
import { CartState } from "../Context/Context";

const Navbar = () => {
  const {
    state: { cart }
  } = CartState();
  const navigate = useNavigate();
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const handleQuery = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary boxshadow sticky-top">
        <div
          className="container-fluid"
          style={{ justifyContent: "space-around" }}
        >
          <Link className="navbar-brand" to="/">
            <h4 style={{ fontStyle: "italic" }}>KitKart.com</h4>
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Here"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              onClick={handleQuery}
              type="submit"
            >
              Search
            </button>
          </form>
          <Link to="/cart">
            <div style={{ color: "black", fontSize: "1.5rem" }}>
              <i class="fa-solid fa-cart-shopping"></i>
              <sup>{cart.length}</sup>
              <span
                style={{
                  display: "inline",
                  fontSize: "1rem",
                  textDecoration: ""
                }}
              >
                Cart
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
