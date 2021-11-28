import "./Cost.css";
const Cost = () =>{
  const total= 111;
return(
    <>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h3>Summary</h3>
            <hr />
            <p>ENTER COUPON CODE</p>
            <hr />
            <div class="d-flex justify-content-between mb-2"> <span>SUBTOTAL</span> <span>$400</span> </div>
            <div class="d-flex justify-content-between mb-2"> <span>SHIPPING</span> <span>FREE</span> </div>
            <div class="d-flex justify-content-between mb-2"> <span>TAXES</span> <span>$13</span> </div>
            <hr />
            <div class="d-flex justify-content-between mb-2"> <span>TOTAL</span> <span>{total}</span> </div>

          </div>
        
    </>
)
}

export default Cost;