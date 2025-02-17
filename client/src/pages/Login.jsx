import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

  return (
    <section className='w-full container mx-auto px-2'>
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded flex flex-col p-2">
        <p className="text-center text-lg sm:text-xl">Please Login</p>
        <form className="grid gap-4 mt-6 p-2">
              {/* Name Input */}
              <div className="grid gap-1">
                <label htmlFor="name" className="text-sm sm:text-base">Name :</label>
                <input
                  type="text"
                  id="name"
                  autoFocus
                  className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-200 w-full"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
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
            </form>
      </div>
    </section>
  )
}

export default Login