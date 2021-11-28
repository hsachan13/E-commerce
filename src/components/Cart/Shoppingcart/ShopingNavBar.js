import "./ShoppingNavBar.css";

const ShopingNavBar = () => {
  return (
    <div>
      <div class="shop-nav jumbotron">
        <div class="row">
          <div class="col-md-12 col-sm-12  centerfy">
            <br/>
            <button type="button" class="choose" >
              1.SHOPPING CART
            </button>
            <button type="button" class="shop-btn ">
              2.SHIPPING DETAILS
            </button>
            <button type="button" class="shop-btn ">
              3.PAYMENT OPTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingNavBar;
