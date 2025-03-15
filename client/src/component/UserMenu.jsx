import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "./Divider";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import { HiOutlineExternalLink } from "react-icons/hi";


const UserMenu = ({close}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
   const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });
      // console.log("logout", response);
      if (response.data.success) {
        if (close) {
          close();
        }
        dispatch(logout());
        localStorage.clear();
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      AxiosToastError(error);
    }
  };

  return (
    <div className="bg-white w-full text-black p-4 min-w-[1px]  overflow-visible">
      <div className="font-semibold text-xl">My Account</div>
      <div className="text-sm">{user.name || user.mobile} <Link to={"/profile"}><HiOutlineExternalLinl />
      </Link></div>
      <Divider />

      <div className="text-sm grid user-menu">
        <Link to={""} className="">
          My Order
        </Link>
        <Link to={""} className="">
          Save Address
        </Link>
        <button onClick={handleLogout} className="px-2 text-center account">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
