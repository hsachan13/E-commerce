import { NavLink } from "react-router-dom";

const ShoppingTop = () => {
    return (
      <nav class="top navbar bg-dark navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark">
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
              <NavLink className="nav-link" style={{"color":"#fff"}} to="/products">
                Shop&nbsp;&nbsp; <span className="remove">|</span>
              </NavLink>
            </li>
            <li className=" nav-item">
              <NavLink className="nav-link" to="">
                Help{" "}
              </NavLink>
            </li>
            <li>
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
  
  export default ShoppingTop;