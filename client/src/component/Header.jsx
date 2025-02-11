import React from "react";
import logo from "../assets/big-bazar.png"
import Search from "./Search";

const Header = () => {
  return (
    //header tag use for seo frendly
    <header className="h-16 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center h-full px-2 justify-between">
        {/* logo */}
        <div className="h-full">
            <div className="h-full flex justify-center items-center">
                <img src={logo} alt='' height={50} width={80} className="hidden lg:block"/>
                <img src={logo} alt='' height={50} width={80} className="lg:hidden"/>
            </div>
        </div>
        {/* logo */}
        {/* search */}
        <div>
            <Search/>
        </div>
        {/* search */}
        {/* login and my cart */}
        <div>login and my cart</div>
        {/* login and my cart */}
      </div>
    </header>
  );
};

export default Header;
