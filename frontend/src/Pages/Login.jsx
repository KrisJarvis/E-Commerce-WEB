import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="sign-up">
      <div className="mx-auto container p-4">
        <div className="bg-white p-4 py-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon" />
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.value}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="">
              <label>Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent "
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-500"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              className="bg-red-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                          hover:bg-red-950
                          transition-all mx-auto block mt-6"
            >
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have Account?{" "}
            <Link
              to={"/sign-up"}
              className="hover:underline hover:text-red-500"
            >
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
