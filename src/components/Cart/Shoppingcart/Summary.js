// import Button from "../../HomePage/Header/button";
// import Cost from "./Cost";
import { useContext , useState} from "react";
import CartContext from "../../Store/cart-context";

import "./ProductSummary.css";
import CartItem from "./cartItem";
import { NavLink } from "react-router-dom";
import SummartCartItem from "./SummartCartItem";
import './Summary.css';
const Summary = () => {
  const [couponValue, setCouponValue] = useState();
  // const [couponDisabled,setCouponDisabled]=useState(false);

  const cartCtx = useContext(CartContext);
  const subTotal = `${Number(cartCtx.totalAmount).toFixed(2)}`;
  let taxes = (5 / 100) * Number(subTotal);
  taxes = `${Number(taxes).toFixed(2)}`

  // const hasItems = cartCtx.items.length > 0;

  const getInputValue = (event) => {
    setCouponValue(event.target.value);
    // console.log(event.target.value);
  }
  let couponAmount = "Not Apllied";
  let finalTotal = Number(subTotal) + Number(taxes);
  finalTotal =  `${Number(finalTotal).toFixed(2)}`;
  // console.log(finalTotal);

  if (couponValue === "BOOTCAMP2021") {
    couponAmount = (10 / 100) * Number(subTotal);
    couponAmount = `${Number(couponAmount).toFixed(2)}`
   finalTotal = Number(subTotal) + Number(taxes) - Number(couponAmount);
   finalTotal = `${Number(finalTotal).toFixed(2)}`

    // console.log(finalTotal);
  }
  return (
    <>
      <div className=" container-fluid" style={{"text-align":"center"}}>
        <div className="row justify-content-between" style={{"display": "flex","width": "400px","border":"1px solid black","flex-direction": "column"}}>
          <div className="col-lg-6 col-md-5 col-sm-12">
            <ul style={{"list-style":"none"}}>
              {cartCtx.items.map((item) => (
                <SummartCartItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  amount={item.amount}
                  price={item.price}
                />
              ))}
            </ul>
          </div>


          <div>
            <h3>Summary</h3>
            <hr />
            <input type="text" name="couponCode" onChange={getInputValue} placeholder="ENTER COUPON CODE" className="border-0" />
            <hr />
            <div class="d-flex justify-content-between mb-2">
              {" "}
              <span>SUBTOTAL</span> <span>{subTotal}</span>{" "}
            </div>
            <div class="d-flex justify-content-between mb-2">
              {" "}
              <span>SHIPPING</span> <span>FREE</span>{" "}
            </div>
            <div class="d-flex justify-content-between mb-2">
              {" "}
              <span>TAXES</span> <span>{taxes}</span>{" "}

            </div>
            <div class="d-flex justify-content-between mb-2">
              {" "}
              <span>COUPON</span> <span>{couponAmount}</span>{" "}
            </div>
            <hr />
            <div class="d-flex justify-content-between mb-2">
              {" "}
              <span>TOTAL</span> <span>{finalTotal}</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
