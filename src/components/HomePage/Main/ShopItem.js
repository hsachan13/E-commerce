import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ItemButtonForm from './itemButton';
import CartContext from '../../Store/cart-context'
import './Shoptem.css';

const ShopItem = (props) => {
    const cartCtx=useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.id,
          image:props.image,
          title: props.title,
          amount: amount,
          price: props.price,
        });
      };
//     return (
        // <div className="d col-6 mb-5">
        //     {/* <div className="card"> */}
        //     <div className="container d">
        //         <img className="image card-img-top" src={props.image} alt="brand-logo" />
        //             <div className="middle">
        //            <ItemButtonForm onAddToCart={addToCartHandler}/>
        //             </div>
        //     </div>

        //     <div clas="card-body c">
        //         <NavLink className="title-style card-title" to={`/product/${props.id}`}>{props.title}</NavLink>
        //         <p className="c card-text">{price}</p>
        //         <div>{props.category}</div>
        //         {/* <div className="c card-text">{props.description}</div> */}
        //     </div>
        // </div>



/* <div class="container">
<div class="row">
    <div class="main-content col-lg-4 col-md-6">
        <div class="image ">
            <img class="image1 image" src={props.image} width="160px" height="160px" />

        </div>
        <div class="product-details">
        <NavLink className="title-style card-title" to={`/product/${props.id}`}>{props.title}</NavLink>
                    <h5 class="price">{price}$</h5>
            <p class="discripction">{props.descr}</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span><br />
          
        </div>
    </div>
</div>
</div> */


/* <div className="col-lg-4 col-md-6 mb-4 col-sm-12">
<div class="row" key={props.id}>
    <div className="left">
<img class="image1 image" src={props.image} />
<ItemButtonForm onAddToCart={addToCartHandler}/>
</div>
        <div class="product-details">
        <NavLink className="title-style card-title" to={`/product/${props.id}`}>{props.title}</NavLink>
                    <h5 class="price">{price}$</h5>
            <p class="discripction">{props.descr}</p>
            <span class="far fa-star checked"></span>
            <span class="far fa-star checked"></span>
            <span class="far fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span><br />
          
        </div>
    </div>
</div> */



    return (
        
        <div className=" col-lg-4 col-md-6 mb-4 col-sm-12 mb-5">
            {/* <div className="card"> */}
            <div className="container " style={{"position":"static","float":"left"}}>
                <img className="image1 image card-img-top" src={props.image} alt="brand-logo" />
                    <div className="middle">
                   <ItemButtonForm onAddToCart={addToCartHandler}/>
                    </div>
            </div>

            <div clas="product-details card-body c">
                 <NavLink className="title-style card-title" to={`/product/${props.id}`}>{props.title}</NavLink>
                 {/* <p className="c card-text">{price}</p> */}
                 <h5 class="price">{price}$</h5>
                 <p class="discripction">{props.descr}</p>

                 {/* <div>{props.category}</div> */}
                 <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span><br />
                 {/* <div className="c card-text">{props.description}</div> */}
             </div>
             </div>

    );
};

export default ShopItem;