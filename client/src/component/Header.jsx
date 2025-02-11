import React from "react";
import logo from "../assets/big-bazar.png"

const Header = () => {
  return (
    //header tag use for seo frendly
    <header className="h-16 shadow-md sticky top-0">
      <div>
        {/* logo */}
        <div>
            <div>
                <img src={logo} alt='' height={50} width={80}/>
            </div>
        </div>
        {/* logo */}
        {/* search */}
        {/* search */}
        {/* login and my cart */}
        {/* login and my cart */}
      </div>
    </header>
  );
};

export default Header;
