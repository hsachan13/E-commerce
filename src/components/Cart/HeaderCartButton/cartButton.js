import { useContext } from 'react';
// import CartIcon from './cartIcon';
import classes from './cartButton.module.css';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Store/cart-context';

const CartButton = (props) => {
  const cartVal=useContext(CartContext);
  const numberOfCartItem=cartVal.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0)
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
      <i class="fa fa-shopping-cart" style={{"color" : "black"}}></i>      </span>
      <NavLink  to="/cart" className={classes.text}><span >Your Cart</span></NavLink>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default CartButton;