import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import toast from 'react-hot-toast';

const Login = () => {
  const [data, setData] = useState({
      email: "",
      password: ""
    });
  const [showPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const validedValue = Object.values(data).every(el => el)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
          ...SummaryApi.login,
          data : data
      })
      
      if(response.data.error){
          toast.error(response.data.message)
      }

      if(response.data.success){
          toast.success(response.data.message)
          setData({
              email : "",
              password : "",
          })
          navigate("/")
      }

  } catch (error) {
      AxiosToastError(error)
  }

  };

  return (
    <section className='w-full  h-[80vh] container mx-auto px-2'>
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded flex flex-col p-2">
        <p className="text-center text-lg font-bold sm:text-xl">Please Login</p>
        <form className="grid gap-4 mt-6 p-2">
              {/* Email Input */}
              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm sm:text-base">Email :</label>
                <input
                  type="email"
                  id="email"
                  className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-200 w-full"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              {/* Password Input */}
              <div className="grid gap-1">
                <label htmlFor="password" className="text-sm sm:text-base">Password :</label>
                <div className="bg-blue-50 p-2 border rounded outline-none flex items-center focus:border-primary-200">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full outline-none bg-blue-50"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  
                </div>
              </div>
              {/* Login Button */}
                    <button
                      disabled={!validedValue}
                      className={`${
                        validedValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
                      } text-white py-2 rounded font-semibold my-3 tracking-wide w-full`}
                    >
                      Login
                    </button>
                    {/* Login Link */}
                    <p className="w-full text-sm sm:text-base">
                      Haven't any account?{" "}
                      <Link
                        to={"/register"}
                        className="font-semibold text-green-700 hover:text-green-800"
                      >
                        Register
                      </Link>
                    </p>
            </form>
      </div>
    </section>
  )
}

export default Login