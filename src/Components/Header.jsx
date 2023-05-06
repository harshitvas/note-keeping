import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">LiveNote</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Seach.."
            className="focus:outline-none pl-2 text-black h-8 w-64 rounded-lg"
          />
        </nav>
        {/* button */}
        <div className="flex gap-5 items-center mt-5 md:mt-0">
          <div>
            <Link to={"/mynotes"} className="text-white">
              My Notes
            </Link>
          </div>
          <div className="relative">
            <button
              className="px-5 py-2 text-black rounded-lg hover:opacity-70 bg-cyan-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              Harshit Vashistha
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-800 w-full hover:bg-gray-100"
                >
                  My Profile
                </a>
                <button
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                  }}
                  className="w-full text-start"
                >
                  <Link
                    to={"/"}
                    href="/logout"
                    className="block px-4 py-2 w-full text-gray-800 hover:bg-gray-100"
                    onClick={logoutHandler}
                  >
                    Log Out
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
