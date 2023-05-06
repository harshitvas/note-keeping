import React, { useState, useEffect } from "react";
import MainScreen from "../Components/MainScreen";
import ErrorMessage from "../Components/ErrorMessage";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

const RegisterPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
  };

  return (
    <div>
      <MainScreen title={"REGISTER"}>
        <div className="w-full flex gap-5 justify-start">
          <div className="flex flex-col gap-4 w-full">
            <div className="">
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {message && <ErrorMessage>Password Do Not Match</ErrorMessage>}
              {loading && <Loading />}
              <label for="name" class="leading-7 text-gray-600 text-xl">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter email.."
              />
            </div>
            <div className="">
              <label for="name" class="leading-7 text-gray-600 text-xl">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter password.."
              />
            </div>
            <div className="">
              <label for="name" class="leading-7 text-gray-600 text-xl">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter password.."
              />
            </div>
            <div className="">
              <label for="name" class="leading-7 text-gray-600 text-xl">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="ConfirmPassword"
                name="ConfirmPassword"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter password.."
              />
            </div>
            <div>
              <button
                className="text-start w-fit px-3 bg-cyan-300 py-1 border-2 border-black hover:bg-cyan-200 rounded-lg"
                onClick={submitHandler}
              >
                Register
              </button>
            </div>
            <p>
              Already Customer?{" "}
              <Link to={"/login"} className="cursor-pointer">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </MainScreen>
    </div>
  );
};

export default RegisterPage;
