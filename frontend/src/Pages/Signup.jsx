



import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
      password: "",
      name: "",
      confirmPassword: "",
      profilePic: "",
    
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
    
    const handleUploadPic = async(e) => {
        const file = e.target.files[0]
        
        const imagePic = await imageTobase64(file)
        
        setData((preve) => { 
            return {
                ...preve,
                profilePic: imagePic,
            }
        })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-4 py-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcon} alt="login icon" />
              <form>
                <label>
                  <div className="text-xs bg-opacity-75 text-center bg-slate-100 absolute bottom-0 w-full pb-7 cursor-pointer">
                    Upload Image
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleUploadPic}
                  />
                </label>
              </form>
            </div>
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required={true}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.value}
                  onChange={handleOnChange}
                  required={true}
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
                  required={true}
                  className="w-full h-full outline-none bg-transparent "
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div className="">
              <label>Confirm Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required={true}
                  className="w-full h-full outline-none bg-transparent "
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110
                          hover:bg-red-950
                          transition-all mx-auto block mt-6"
            >
              Signup
            </button>
          </form>
          <p className="my-5">
            Already have Account?
            <Link to={"/login"} className="hover:underline hover:text-red-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
