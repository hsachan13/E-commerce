import './ShippingButton.css';

const ShippingBtn = () =>{
return(
    <div class="container-fluid">
    <div class="row">
        <div class="main d-flex">
            <div class="div1 border-dark bg-light" >

                <div class="border ">

                    <div class="form-check ">
                        <div class="radio-button" >
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" for="flexRadioDefault1">
                     <h5 className="heading">Free shipping</h5>
                    </label>
                            <p className="head-text">between 2-5 working days</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="div2 ms-3 bg-light">
                <div class="border ">

                    <div class="form-check ">
                        <div class="radio-button" >
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                     <h5 className="heading">Next day delivery:$20</h5>
                    </label>
                            <p className="head-text">24 hours from checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}

export default ShippingBtn;
