// import Button from './button';
import './navbar2.css';
import { NavLink } from "react-router-dom";



import CartButton from "../../Cart/HeaderCartButton/cartButton";

const NavbarPart = () => {
  return (
    <nav class="top navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark" style={{ "background-color": "#232f3e" }}>
     {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home &nbsp;&nbsp;
              <span className="remove">|</span>
            </NavLink>
          </li>
          <li className=" nav-item">
            <NavLink className="nav-link" to="">
              About &nbsp;&nbsp;<span className="remove">|</span>
            </NavLink>
          </li>
          
          <li className=" nav-item">
            <NavLink className="nav-link" style={{"color":"#fff"}} to="/">
              Shop&nbsp;&nbsp; <span className="remove">|</span>
            </NavLink>
          </li>
          <li className=" nav-item">
            <NavLink className="nav-link" to="">
              Help{" "}
            </NavLink>
          </li>
          <li>
            <CartButton/>
            {/* <button type="button" className="nav-btn btn btn-secondary">
              <i className="fas fa-shopping-cart"></i>Your Cart
              <CartIcon/>
            </button> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarPart;
