import { NavLink } from 'react-router-dom';
import './footer.css';
const Footer = () => {
  return (
   
<>
<div className="foot-style">
    <footer>

  <ul class="footer justify-content-center">
     <li>
       <NavLink className="style link" to="/">
         Home &nbsp;&nbsp;
         <span>|</span>
       </NavLink>
     </li>
     <li>
       <NavLink className="style link" to="#">
         About &nbsp;&nbsp;<span>|</span>
       </NavLink>
     </li>
     <li >
       <NavLink className="style link" to="/">
         Shop&nbsp;&nbsp; <span>|</span>
       </NavLink>
     </li>
     <li >
       <NavLink className="style link" to="#">
         Help{" "}
       </NavLink>
     </li>
    
       {/* <button type="button" className="nav-btn btn btn-secondary">
         <i className="fas fa-shopping-cart"></i>Your Cart
         <CartIcon/>
       </button> */}
    </ul>
    </footer>
    <svg class="bi" width="30" height="24"></svg>

    <span class="text-muted">© 2021 Company, Inc</span>
    </div>
    </>
  );
};

export default Footer;
