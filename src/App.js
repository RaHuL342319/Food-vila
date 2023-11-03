import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/**
Header
    - Logo
    - Nav Items(Right Side)
    - Cart
Body
    -Search bar
    - RestaurantList
    - RestaurantCard
        - Image
        - Name
        - Cuisins
        - Rating
Footer
    - links
    - copyrights
 
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />); // accessing react functional component
