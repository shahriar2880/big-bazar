import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "./Divider";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import { HiOutlineExternalLink } from "react-icons/hi";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const handleClose = async () => {
    if (close) {
      close();
    }
  };

  return (
    <div className=" bg-white w-full text-black min-w-[1px]  overflow-visible p-4">
      <div className="font-semibold text-xl ">My Account</div>
      <div className="text-lg flex items-center gap-2">
        <span className="max-w-52 text-ellipsis line-clamp-1">
          {user.name || user.mobile}
        </span>
        <Link
          onClick={handleClose}
          to={"/dashboard/profile"}
          className="hover:text-primary-200"
        >
          <HiOutlineExternalLink className="inline-block" />
        </Link>
      </div>
      <Divider />

      <div className="text-sm grid gap-1 user-menu">

        <Link onClick={handleClose} to={"/dashboard/category"} className="">
          Category
        </Link>

        <Link onClick={handleClose} to={"/dashboard/subcategory"} className="">
          Sub Category
        </Link>

        <Link onClick={handleClose} to={"/dashboard/upload-product"} className="">
          Upload Product
        </Link>

        <Link onClick={handleClose} to={"/dashboard/product"} className="">
          Product
        </Link>

        <Link onClick={handleClose} to={"/dashboard/myorders"} className="">
          My Order
        </Link>

        <Link onClick={handleClose} to={"/dashboard/address"} className="">
          Save Address
        </Link>

        <button onClick={handleLogout} className="p-3 text-center account">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
