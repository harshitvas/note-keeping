import React, { useState, useEffect } from "react";
import MainScreen from "../Components/MainScreen";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <MainScreen title={"LOGIN"}>
        <div className="w-full flex flex-col gap-5 justify-start">
          <div className="">
            {loading && <Loading />}
            {error && <ErrorMessage>Invalid email or password!</ErrorMessage>}
            <label htmlFor="name" className="leading-7 text-gray-600 text-xl">
              Email
            </label>
            <input
              type="email"
              id="nameInput"
              name="nameInput"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter email.."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label htmlFor="name" className="leading-7 text-gray-600 text-xl">
              Password
            </label>
            <input
              type="password"
              id="passwordInput"
              name="passwordInput"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter password.."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="text-start w-fit px-3 bg-cyan-300 py-1 border-2 border-black hover:bg-cyan-200 rounded-lg"
            onClick={submitHandler}
          >
            Login
          </button>
          <p>
            New Customer?{" "}
            <Link to={"/register"} className="cursor-pointer">
              Register Now
            </Link>
          </p>
        </div>
      </MainScreen>
    </div>
  );
};

export default LoginPage;
