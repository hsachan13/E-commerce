// import Button from './button';
import './navbar2.css';
import { NavLink } from "react-router-dom";
// import CartButton from "../../Cart/HeaderCartButton/cartButton";
// const NavbarPart = () => {
//     return (
// <>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="header-inside collapse navbar-collapse" id="navbarNav">
//           <ul className="main-nav navbar-nav ">
//             <li className="main-li nav-item active">
//               <NavLink className="nav-link" to="/">
//                 Home<span className="space">|</span>
//                 {/* <span className="sr-only">(current)</span> */}
//               </NavLink>
//             </li>
//             <li className="main-li nav-item">
//               <NavLink className="nav-link" to="#">
//                 About <span className="space">|</span>
//               </NavLink>
//             </li>
//             <li className="main-li nav-item">
//               <NavLink className="nav-link" to="/products">
//                 Shop <span className="space">|</span>
//               </NavLink>
//             </li>
//             <li className="main-li nav-item">
//               <NavLink className="nav-link" to="#">
//                 Help{" "}
//               </NavLink>
//             </li>
//             <li>
//               <CartButton/>
//               {/* <button type="button" className="nav-btn btn btn-secondary">
//                 <i className="fas fa-shopping-cart"></i>Your Cart
//                 <CartIcon/>
//               </button> */}
//             </li>
//           </ul>
//           </div>
// </nav>
//               </>      

//                 )
// }

// export default NavbarPart;


import CartButton from "../../Cart/HeaderCartButton/cartButton";

const NavbarPart = () => {
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