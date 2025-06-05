import React from "react";
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterCr = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <button className="text-white cursor-pointer font-bold text-lg flex flex-row justify-center items-center gap-3 text-center bg-green-600 px-5 py-3 rounded-xl border-[1px] border-green-600 hover:text-green-600 hover:bg-white">
            <FaBackward />
            Home
          </button>
        </Link>

        <Link to="/up">
          <button className="text-white cursor-pointer font-bold text-lg flex flex-row justify-center items-center gap-3 text-center bg-green-600 px-5 py-3 rounded-xl border-[1px] border-green-600 hover:text-green-600 hover:bg-white">
            Next
            <FaForward />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FooterCr;
