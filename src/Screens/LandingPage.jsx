import React from "react";
import background from "./background.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LandingPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="h-full w-full flex items-center justify-center flex-col gap-5">
        <p className="text-7xl text-center">Welcome to LiveNote</p>
        <p className="text-xl">One Safe place for all your notes.</p>
        <div className="flex gap-7">
          <Link to="/login">
            <button className="bg-cyan-300 border-2 border-black hover:opacity-60 px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-cyan-300 border-2 border-black hover:opacity-60 px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
