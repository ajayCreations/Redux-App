import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'



const App = () => {
  return (
    <div>
        <h2>let's test the working of it.</h2>
        <Home />
        <About />
        <Contact />
    </div>
  )
}

export default App



// import React from "react";

// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// import Header from "./reduxPractice/containers/Header";
// import ProductDetails from "./reduxPractice/containers/ProductDetials";
// import ProductListing from "./reduxPractice/containers/ProductListing";


// const App=()=>{
//     return(
//         <div>
//             <Header />
//            <Routes>
//                <Route  path='/' element={<ProductListing />}/>
//                <Route path='/product/:productId' element={<ProductDetails/>}/>
//            </Routes>

//         </div>
//     )
// }

// export default App;