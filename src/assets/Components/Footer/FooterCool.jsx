import React from "react";
import { FaBackward } from "react-icons/fa6";

import { Link } from "react-router-dom";

const FooterCool = () => {
  return (
    <div className="w-full">
      <Link to="/">
        <button className="text-white mx-auto cursor-pointer font-bold text-lg flex flex-row justify-center items-center gap-3 text-center bg-green-600 px-5 py-3 rounded-xl border-[1px] border-green-600 hover:text-green-600 hover:bg-white">
          <FaBackward />
          Home
        </button>
      </Link>
    </div>
  );
};

export default FooterCool;
