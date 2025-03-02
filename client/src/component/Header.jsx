import React, { useState } from "react";
import logo from "../assets/big-bazar.png";
import "../index.css";
import "../App.css";
import Search from "./Search";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMobile from "../hooks/useMobile";
import { useSelector } from "react-redux";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from "./UserMenu.jsx";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  console.log("user from store", user);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  // const handleMobileUser = ()=>{
  //     if(!user._id){
  //         navigate("/login")
  //         return
  //     }

  //     navigate("/user")
  // }
  return (
    //header tag use for seo frendly
    <header className="h-30 w-full min-w-[1px] sticky py-2 px-4 lg:h-22 lg:shadow-md top-0 flex flex-col justify-center gap-1 text-black overflow-visible">
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
            <div className="hidden lg:flex items-center gap-10 text-teal-700">
            {user?._id ? (
                <div className="relative">
                  <div
                    onClick={() => setOpenUserMenu((prev) => !prev)}
                    className="flex select-none items-center gap-1 cursor-pointer"
                  >
                    <p>Account</p>
                    {openUserMenu ? <GoTriangleUp size={25} /> : <GoTriangleDown size={25} />}
                  </div>
                  {openUserMenu && (
                    <div className="absolute top-full left-0 z-10 mt-2 min-w-48 rounded-lg bg-white shadow-lg">
                      <UserMenu user={user} />
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={redirectToLoginPage} className="text-lg px-2">
                  Login
                </button>
              )}
              <button className="flex items-center gap-2 p-3 rounded-md cart">
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
                <div className="font-semibold">
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
          {/* login and my cart */}
        </div>
      )}

      <div className="container sm-search mx-auto px-4 lg:hidden sm-search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
