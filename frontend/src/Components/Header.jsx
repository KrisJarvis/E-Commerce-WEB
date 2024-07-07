import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
                <Logo />
          </Link>
        </div>
        <div className="     flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full outline-none "
          />
          <div className="text-lg min-w-[50px] h-8 flex items-center justify-center rounded-full">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl cursor-pointer ">
            <FaRegCircleUser />
          </div>
          <div className="text-2xl relative">
            <span>
              {" "}
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full  p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div className="">
            <Link to={'/login'} className="px-3 py-1 rounded-full text-white hover:bg-red-950 bg-red-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
