import React from "react";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
      <Link to="/wp">
        <img
          src={Logo}
          alt=""
          className="mx-auto w-full h-60 rounded-2xl cursor-pointer"
        />
      </Link>

      <h1 className="font-bold text-2xl text-green-500 text-center">
        Touch the image to start
      </h1>
    </div>
  );
};

export default Home;
