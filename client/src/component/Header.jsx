import React from "react";
import logo from "../assets/big-bazar.png";
import Search from "./Search";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import useMobile from "../hooks/useMobile";

const Header = () => {
    // const [isMobile] = useMobile()
    // const location = useLocation()
    // const handleMobileUser = ()=>{
    //     if(!user._id){
    //         navigate("/login")
    //         return
    //     }

    //     navigate("/user")
    // }
  return (
    //header tag use for seo frendly
    <header className="h-30 py-2 lg:h-22 lg:shadow-md sticky top-0 bg-red-500 flex flex-col justify-center">
      <div className="container mx-auto flex items-center h-full justify-between">
        {/* logo */}
        <div className="h-full">
          <Link to={"/"} className="h-full flex justify-center items-center">
            <img
              src={logo}
              alt=""
              height={50}
              width={80}
              className="hidden lg:block"
            />
            <img
              src={logo}
              alt=""
              height={50}
              width={80}
              className="lg:hidden"
            />
          </Link>
        </div>
        {/* logo */}
        {/* search */}
        <div className="hidden lg:block">
          <Search />
        </div>
        {/* search */}
        {/* login and my cart */}
        <div>
          <button
            className="text-neutral-600 lg:hidden"
            // onClick={handleMobileUser}
          >
            <FaRegCircleUser size={26} />
          </button>
          <div className="hidden lg:block">login and my card</div>
        </div>
        {/* login and my cart */}
      </div>
      <div className="container mx-auto"><Search/></div>
    </header>
  );
};

export default Header;
