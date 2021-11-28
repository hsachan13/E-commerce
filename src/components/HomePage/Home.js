import { useState } from "react";
import Footer from "./Footer/footer";
import Navbar from "./Header/navbar";
import Main from "./Main/main";





// const Home = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Main/>
//       <Footer/>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  const[searchText,setSearchText]=useState('');
  const handelInputSearch=(searchInput)=>{
    setSearchText(searchInput);
  }
  // console.log(searchText);
  return (
    <div>
      <Navbar onHandelSearch={handelInputSearch}/>
      <Main onSearch={searchText}/>
      <Footer/>
    </div>
  );
};
export default Home;
