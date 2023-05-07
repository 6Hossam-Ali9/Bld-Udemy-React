import React from "react";
import logo from "../../assets/logo-udemy-white.svg";
function Footer() {
  return (
    <div className=" bg-zinc-800 h-14 text-white">
      <div className="w-full h-full px-8 flex flex-row justify-between items-center">
        <a href="##">
          <img src={logo} alt="logo-udemy" className="w-20" />
        </a>
        <p className="text-sm">&copy; 2022 Udemy, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
