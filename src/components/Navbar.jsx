import React from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdModeNight } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-white shadow-lg shadow-sky-100 px-28 py-4 cursor-pointer fixed z-10 w-full">
        <ul className="flex items-center gap-x-12 relative">
          {/* Wrapper div for Hot Examples and dropdown */}
          <div className="relative group">
            <li className="font-semi-bold text-lg cursor-pointer">
              Hot Examples
            </li>

            {/* Dropdown menu */}
            <div className="slide-top absolute hidden group-hover:block bg-white shadow-lg rounded mt-24 w-48">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Default Blog
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                List Blog
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Classic Blog
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Masonry Blog
                </li>
              </ul>
            </div>
          </div>

          {/* Other list items */}
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            Posts
          </li>
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            About Me
          </li>
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            Contact Me
          </li>
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            Purchase!
          </li>
        </ul>

        <div className="flex items-center gap-8 text-2xl cursor-pointer">
          <form className="relative w-fit flex items-center z-10" action="">
            <input
              className="text-xl rounded-full p-2 pr-10 w-[250px] border border-neutral-200 focus:outline-none"
              type="text"
              placeholder="Enter search"
              required
            />
            <button type="submit" className="absolute right-2">
              <IoSearchCircleOutline className="text-2xl" />
            </button>
          </form>


          <div className="flex items-center gap-1 border rounded-full">
            <p>
              <IoSunnyOutline className="text-3xl text-yellow-400 font-bold" />
            </p>
            <p>
              <MdModeNight className="text-3xl font-bold" />
            </p>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
