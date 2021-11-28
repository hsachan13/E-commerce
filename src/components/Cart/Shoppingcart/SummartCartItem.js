import classes from './CartItem.module.css';

const SummartCartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
          <img src={props.image} alt="brand-logo" style={{"width":"180px","height":"150px" , "border" : "none"}}/>
        <h5 style={{"font-size":"18px","width": "200px"}}>{props.title}</h5>
        <div className={classes.summary}>
          <span style={{"text-align":"center"}}className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
    </li>
  );
};

export default SummartCartItem;