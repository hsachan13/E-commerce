import  Button  from '../HomePage/Header/button'
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../HomePage/Main/Loading";
import "./product.css";
import ItemButtonForm from '../HomePage/Main/itemButton';
// import { useContext } from 'react';
import CartContext from '../Store/cart-context';
// const Product=() =>{
//     const {id} = useParams();
//     const [item,setitem] = useState([]);
//     const [loading,setLoading] = useState(false);

//     useEffect(()=>{
//         const getProduct =async ()=>{
//             setLoading(true);
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//             const responseData = await response.json();
//             setitem(responseData);
//             setLoading(false);
//         };
//         getProduct();
//     },[]);

// const ShowProduct = () =>{
//     return (
//         <>
//         <div className="col-md-6">
//             <img src={item.image} alt={item.title} />
//         </div>
//         </>
//     )
// }
// return(
//     <div>
//         <div className="container py-5">
//             <div className="row py-4">
//                 {loading ? <Loading /> : <ShowProduct />}
//             </div>
//         </div>

//     </div>
// );
// }

// export default Product;

const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);


  //   console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);



  const ShowProduct = (props) => {
    const cartCtx= useContext(CartContext);
    // const price = `$${props.price.toFixed(2)}`
  
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.id,
          image:props.image,
          title: props.title,
          amount: amount,
          price: props.price,
        });
      };
  
    return (
      <>
        <div className="row">
          <div className="shift col-md-6">
            <img
              className="desc-img "
              src={product.image}
              alt={product.title}
              // height="400px"
              // width="400px"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="title display-6">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              &nbsp;&nbsp;<span> 2 Reviews</span>
            </p>
            <hr />
            <h3 className="price display-6 fw-bold my-4">
             ${product.price} 
              <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
    Select Model
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            </h3>
            <hr />
            <p className="lead">{product.description}</p>
            <ItemButtonForm onAddToCart={addToCartHandler}/>
          </div>
        </div>
        <hr />
      </>
    );
  };

 
  return (
    <div>
      <div className="container " style={{"position":"static"}}>
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
