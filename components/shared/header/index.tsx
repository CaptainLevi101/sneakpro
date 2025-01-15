import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <div className="text-red-500 text-4xl lg:text-2xl flex items-center">
            <GiRunningShoe className="mr-2" />
            <span className="font-bold hidden lg:block">Sneakzy</span>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
