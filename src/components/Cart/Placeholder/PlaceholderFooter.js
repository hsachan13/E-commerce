import { NavLink } from 'react-router-dom';
import './PlaceholderFooter.css';
const PlaceholderFooter = () => {
  return (
    // <div>
    //   <hr></hr>
    //   <footer className="text-muted main-footer">
    //   <p>
    //     Home<span className="space">|</span>
    //     About <span className="space">|</span>
    //     Shop <span className="space">|</span>
    //     Help </p>
        
    //       <svg class="bi" width="30" height="24"></svg>

    //       <span class="text-muted">© 2021 Company, Inc</span>
        
    //   </footer>
    // </div>
<>
<div className="foot">
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
       <NavLink className="style link" to="/products">
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

export default PlaceholderFooter;
