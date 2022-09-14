import React from "react";
import logo from "../../assets/logo-udemy-black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGlobe,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const submiteHandler = (e) => {
    e.preventDefault();
    navigate(`/?search=${text}`);
    window.location.reload(false);
  };
  return (
    <nav className="h-[72px] usm:h-[56px] shadow-md z-10 bg-white relative">
      <div className="px-6 flex flex-row items-center h-full gap-5 usm:hidden">
        <Link to="/" className="min-w-fit">
          <img
            src={logo}
            alt="udemy logo"
            className="w-[91px] cursor-pointer"
          />
        </Link>
        <a href="##" className="text-sm hover:text-purple-700 font-medium">
          Categories
        </a>
        <form className="w-4/5 flex flex-row" onSubmit={submiteHandler}>
          <button
            type="submit"
            className="w-[3%] border border-zinc-900  border-r-0  rounded-l-full bg-slate-100 min-w-[25px] p-[10px] pr-0"
          >
            <i className="fa fa-search text-gray-400" aria-hidden="true"></i>
          </button>
          <input
            type="search"
            placeholder="Search for anything"
            name="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[97%] text-sm outline-none border border-zinc-900  border-l-0  rounded-r-full px-4 py-2 bg-slate-100"
          />
        </form>
        <a
          href="##"
          className="text-sm hover:text-purple-700 font-medium whitespace-nowrap ulg:hidden"
        >
          Udemy Business
        </a>
        <a
          href="##"
          className="text-sm hover:text-purple-700 font-medium whitespace-nowrap umd:hidden"
        >
          Teach on Udemy
        </a>
        <a href="##">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="hover:text-purple-700 w-5 h-5"
          />
        </a>
        <div className="flex flex-row gap-3">
          <button className="font-bold border border-black px-5 py-2 text-sm whitespace-nowrap hover:bg-gray-100">
            Log in
          </button>
          <button className="font-bold border border-black px-5 py-2 text-sm text-white whitespace-nowrap bg-zinc-800 hover:bg-black">
            Sign Up
          </button>
          <button className="font-bold border border-black px-5 py-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="hidden px-6 usm:flex flex-row items-center h-full">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/" className="ml-auto">
          <img src={logo} alt="udemy logo" className="w-20" />
        </Link>
        <div className="ml-auto flex gap-5">
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
