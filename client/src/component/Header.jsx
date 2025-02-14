import React from "react";
import logo from "../assets/big-bazar.png";
import "../index.css";
import Search from "./Search";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import useMobile from "../hooks/useMobile";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  // const handleMobileUser = ()=>{
  //     if(!user._id){
  //         navigate("/login")
  //         return
  //     }

  //     navigate("/user")
  // }
  return (
    //header tag use for seo frendly
    <header className=" h-30 min-w-[1px] py-2 px-2  lg:h-22 lg:shadow-md sticky top-0 bg-rose-700 flex flex-col justify-center">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center h-full flexcol justify-between">
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

            {/* desktop */}
            <div className="hidden lg:flex items-center gap-10">
              <Link>Login</Link>
              <button className="flex items-center gap-2 p-2 rounded-md bg-green-800">
                <div className="animate-bounce"><BsCart4 size={26}/></div>
                <div className="font-semibold"><p>My Cart</p></div>
              </button>
            </div>
          </div>
          {/* login and my cart */}
        </div>
      )}

      <div className="container mx-auto lg:hidden sm-search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
