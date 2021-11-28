import { NavLink } from "react-router-dom";
import NavbarPart from "../../HomePage/Header/navbar-2";

const PlaceOrderHeader = () => {
    return (
        <div className="header jumbotron text-center bg-light">
            <NavbarPart />
            <div className="jumb mb-5 bg-light">
                <h1>Your Order Has Been Placed</h1>
            </div>
            <div style={{"text-align": "-webkit-center"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div>
              <NavLink to='/'><button type="button" class="btn btn-primary">Continue Shopping</button></NavLink>
            </div>
        </div>
    )
}

export default PlaceOrderHeader;