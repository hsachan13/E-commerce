import React, { useState } from "react";

const SearchBar=(props)=>{
    const [searchText,setSearchText]=useState('');
    const handleInput=(e)=>{
        const text=e.target.value;
        setSearchText(text);
        // props.onHandelInput(searchText);
    }
    props.onHandelInput(searchText);
    // const handelEnterKeyPress=(e)=>{
    //     if(e.key==="enter"){
    //         onSearch(searchText)
    //     }
    // }
    return(
        <div>
            <div className="control">
                 <input
                type="text"
                className="search form-control"
                onChange={handleInput}
                value={searchText}
                placeholder="Search"
              />
            </div>
        </div>
    )
}
export default SearchBar;