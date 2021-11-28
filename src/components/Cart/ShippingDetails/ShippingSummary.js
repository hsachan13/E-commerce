import './ShippingSummary.css';

const ShippingSummary = () =>{
    return(
    <>
<div class="div2 ms-auto " style={{"align-items": "end"}}>
                <div class="div2-heading ms-auto">
                    <h2>Summary</h2>
                    <hr />
                </div>
                <div class="product-summary d-flex ms-auto" style={{"align-items": "end"}}>
                    <div class="product-image ms-4">
                        <img src="https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets-500x500.jpg" style={{"height":"120px","width":"120px","background-color":"lightsalmon"}} />
                    </div>
                    <div class="product-name ms-4">
                        <h4>Jacket</h4>
                        <h5 style={{"color":"red"}}>$300</h5>
                    </div>

                </div>
                <div class="product-summary d-flex pt-4 ">
                    <div class="product-image ms-4">
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{"height":"120px","width":"120px","background-color":"lightsalmon"}}/>
                    </div>
                    <div class="product-name ms-4">
                        <h4>Painting</h4>
                        <h5 style={{"color":"red"}}>$500</h5>
                    </div>

                </div>
                <hr />
                <select class="form-select ms-4" aria-label="Default select example" style={{"width": "500px !important"}}>
                    <option selected>HAVE A VOUCHER?</option>
                    <option value="1"></option>
                </select>
                <div class="product-summary d-flex  justify-content-between pt-4 ">
                    <div class=" ms-4">
                        <h5>SUBTOTAL</h5>
                    </div>
                    <div class="product-name ms-4 me-4">
                        <h5>$800</h5>
                    </div>
                </div>
                <div class=" d-flex  justify-content-between pt-2 ">
                    <div class=" ms-4">
                        <h5>SHIPPING</h5>
                    </div>
                    <div class="product-name ms-4 me-4">
                        <h5>FREE</h5>
                    </div>
                </div>
                <div class="d-flex  justify-content-between pt-2 ">
                    <div class=" ms-4">
                        <h5>TAXES</h5>
                    </div>
                    <div class="product-name ms-4 me-4">
                        <h5>$13</h5>
                    </div>
                </div>
                <hr />
                <div class=" d-flex  justify-content-between pt-0 ">
                    <div class=" ms-4">
                        <h5>TOTAL</h5>
                    </div>
                    <div class="product-name ms-4 me-4">
                        <h5>$813</h5>
                    </div>
                </div>

            </div>
        </>
    )}

export default ShippingSummary;