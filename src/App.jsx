// import { useState } from 'react'
// import React from 'react'
// import Navbar from "./comp/temp"
// import Hero from './comp/hero'
// import Service from './comp/service'
// import Banner from './comp/banner'
// import Appstore from "./comp/appstore"
// import Testimonial from './comp/testimonial'
// import Footer from './comp/footer'
// import AOS from "aos";
// import "aos/dist/aos.css";


// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 500,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
//       <Navbar/>
//       <Hero/>
//       <Service/>
//       <Banner/>
//       <Appstore/>
//       <Testimonial/>
//       <Footer/>
//     </div>
//   )
// }

// export default App;


import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./comp/temp";
import Hero from "./comp/hero";
import Service from "./comp/service";
import Banner from "./comp/banner";
import Appstore from "./comp/appstore";
import Testimonial from "./comp/testimonial";
import Footer from "./comp/footer";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <Appstore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
