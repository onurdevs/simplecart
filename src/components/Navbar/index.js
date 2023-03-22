import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartShow } from "../../stores/site";
function Navbar() {
  const dispatch = useDispatch();
  const { cartShow } = useSelector((state) => state.site);
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm border-bottom">
      <div className="container">
        <a className="navbar-brand" href="#">
          case1
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => dispatch(setCartShow(!cartShow))}
              >
                Sepet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
