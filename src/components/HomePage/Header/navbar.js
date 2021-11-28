

import NavbarPart from "./navbar-2";
import Button from './button';


import "./navbar.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

// import CartButton from "../Cart/cartButton";

const Navbar = (props) => {
  const [searchText,setSearchText]=useState('');
  const handelSearchInput=(inputText)=>{
      setSearchText(inputText)
  }
  // console.log(searchText)
  props.onHandelSearch(searchText);
  return (
    <div className="header jumbotron text-center" style={{"padding-bottom" :"40px"}}>
      <NavbarPart/>

          <div className="jumb mb-5">
            <h1>Tagline describing your e-commerce</h1>
            {/* <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search" />
            </div> */}
          </div>

          <form className="g-3">

            <div className="form-group has-search">
              {/* <span className="fa fa-search form-control-feedback"></span> */}
              {/* <input
                type="text"
                className="search form-control"
                placeholder="Search"
              /> */}

              <SearchBar  onHandelInput={handelSearchInput}/>
            </div>

          </form>
        </div>
  );
};

export default Navbar;
