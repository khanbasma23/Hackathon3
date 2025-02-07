import React from "react";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductCards from "./Products/[slug]/page";
import Header from "./components/Header";

const Index = () => {
  return (
    <div className="h-screen w-screen">
 <Header/>

  
        <HeroSection />
      

   <Feature />

      
      <Categories />

   
       <Products/>
       <ProductCards/>

       <Footer /> 
    </div>
  );
};

export default Index;
