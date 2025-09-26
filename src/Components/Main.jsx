import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Main() {
  return (
    <div>
      <marquee behavior="">
        Proper link is required to download video
      </marquee>

      <div className="main flex flex-col items-center justify-center bg-gray-900 text-center px-4">

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white animate-fadeIn mt-4">
          Welcome
        </h1>

        <h3 className="text-base sm:text-2xl md:text-3xl text-gray-300 mt-3 font-bold">
          From where do you want to Download?
        </h3>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link
            to="fbdownload"
            className="flex flex-col items-center px-4 py-3 sm:px-6 sm:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-800 transition duration-300 font-bold w-32 sm:w-40"
          >
            <FaFacebook className="text-5xl sm:text-6xl md:text-7xl" />
            <span className="mt-2">Facebook</span>
          </Link>

          <Link
            to="instadownload"
            className="flex flex-col items-center px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-yellow-600 via-orange-700 via-pink-700 via-purple-800 to-blue-600 text-white rounded-xl transition duration-300 hover:brightness-75 font-bold w-32 sm:w-40"
          >
            <IoLogoInstagram className="text-5xl sm:text-6xl md:text-7xl" />
            <span className="mt-2">Instagram</span>
          </Link>

          <Link
            to="tiktokdownload"
            className="flex flex-col items-center px-4 py-3 sm:px-6 sm:py-4 bg-white text-black rounded-xl hover:brightness-75 transition duration-300 font-bold w-32 sm:w-40"
          >
            <AiFillTikTok className="text-5xl sm:text-6xl md:text-7xl text-black" />
            <span className="mt-2">TikTok</span>
          </Link>

          <Link
            to="ytdownload"
            className="flex flex-col items-center px-4 py-3 sm:px-6 sm:py-4 bg-red-600 text-white rounded-xl hover:bg-red-800 transition duration-300 font-bold w-32 sm:w-40"
          >
            <FaYoutube className="text-5xl sm:text-6xl md:text-7xl" />
            <span className="mt-2">YouTube</span>
          </Link>
        </div>
      </div>

      <marquee
        behavior=""
      >
        No other platform's link will be supported || No other text instead of
        link will be supported
      </marquee>
    </div>
  );
}
