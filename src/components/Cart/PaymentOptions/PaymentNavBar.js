import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./PaymentNavBar.css";

const PaymentNavBar = () => {

  const[notValid,setNotValid] =useState(false);
  
  return (
    <div>
      <div class="shop-nav jumbotron">
        <div class="row">
          <div class="col-md-12 col-sm-12  centerfy">
            <br/>
            <NavLink to='/cart'> <button type="button" class="shop-btn" >
              1.SHOPPING CART
            </button>
            </NavLink>

            <NavLink to='/ship'><button type="button" class="shop-btn ">
              2.SHIPPING DETAILS
            </button>
            </NavLink>

             <button type="button" class="choose">
              3.PAYMENT OPTION
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentNavBar;
