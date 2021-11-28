// import Button from "../../HomePage/Header/button";
// import Cost from "./Cost";
import { useContext ,useState} from "react";
import CartContext from '../../Store/cart-context'

import "./ProductSummary.css";
import CartItem from "./cartItem";
import { NavLink } from "react-router-dom";
const ProductSummary = () => {

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
  let finalTotal = Number(subTotal) + Number(taxes)
  finalTotal =  `${Number(finalTotal).toFixed(2)}`;

  // console.log(finalTotal);

  if (couponValue === "BOOTCAMP2021") {
    couponAmount = (10 / 100) * Number(subTotal);
    couponAmount = `${Number(couponAmount).toFixed(2)}`
   finalTotal = Number(subTotal) + Number(taxes) - Number(couponAmount);
   finalTotal = `${Number(finalTotal).toFixed(2)}`

    // console.log(finalTotal);
  }


  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-5 col-sm-12">
            <h2>Shopping Cart</h2>
            <hr></hr>
            {/* <ul className={classes['cart-items']}> */}
            <ul style={{"list-style":"none"}}>
              {cartCtx.items.map((item) => (
                
                <CartItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  amount={item.amount}
                  price={item.price}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  onAdd={cartItemAddHandler.bind(null, item)}
                />
              ))}
            </ul>
            {/* <ul>
              {cartCtx.items.map((item)=>{
                <li>{item.title}</li>
              })} */}
            {/* <div>
                <img className="img-summary" />
                <h3>{cartCtx.items.title}</h3>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print
                </p>
                <p>$200</p>
              </div>

              <div>
                <img className="img-summary" />
                <h3>Product Name</h3>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print
                </p>
                <p>$200</p>
              </div> */}
            {/* </ul> */}

            <hr />
            <div className="btns">
              <NavLink to='ship'><button type="button" class="btn-a btn btn-secondary">Next</button></NavLink>
              <NavLink to="/"><button type="button" class="btn-b btn btn-light">Cancel</button></NavLink>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h3>Summary</h3>
            <hr />
            <input type="text" name="couponCode" onChange={getInputValue} placeholder="ENTER COUPON CODE" className="border-0" />
            <hr />
            <div class="d-flex justify-content-between mb-2"> <span>SUBTOTAL</span> <span>{subTotal}</span> </div>
            <div class="d-flex justify-content-between mb-2"> <span>SHIPPING</span> <span>FREE</span> </div>
            <div class="d-flex justify-content-between mb-2"> <span>TAXES</span> <span>{taxes}</span> </div>
            <div class="d-flex justify-content-between mb-2"> <span>COUPON</span> <span>{couponAmount}</span> </div>
            <hr />
            <div class="d-flex justify-content-between mb-2"> <span>TOTAL</span> <span>{finalTotal}</span> </div>
            

          </div>


        </div>
      </div>
    </>
  );
};

export default ProductSummary;
