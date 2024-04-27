/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import COVER_IMAGE from "../image/login1.jpg";

import { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "../../stores/authSlice";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current && userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      navigate("/home");
      console.log("log data : ", userData.data.token);
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current && errRef.current.focus();
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  return (
    <div className=" w-full h-screen flex items-start ">
      <div className=" relative w-1/2 h-full flex flex-col">
        <div className=" absolute top-[20%] left-[10%] flex flex-col ">
          <h1 className="text-4xl justify-center text-cyan-700 font-bold my-4">
            SISTEM INFORMASI
          </h1>
          <p className="text-xl text-black font-normal">
            Badan Pembangunan Daerah (BAPEDA) Kabupaten Nias Selatan
          </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" />
      </div>

      <div className=" w-1/2 mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className=" w-full max-w-[500px] mx-auto text-xl text-black font-semibold">
          SEU BAGOA
        </h1>

        <div className=" w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className=" text-3xl font-semibold mb-2">Login</h3>
            <p className=" text-base mb2">
              Welcome Back! Please Enter your details.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="email"
                name="email"
                value={email}
                ref={userRef}
                onChange={handleEmailInput}
                id="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordInput}
                id="password"
                placeholder="Pasword"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className=" w-4 h-4 mr-2" />
                <p className="text-sm">Remember me</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot Password?
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full text-[#f5f5f5] my-2 font-semibold bg-black rounded-md p-4 text-center flex items-center justify-center"
              >
                Login
              </button>
              <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-blue-950 rounded-md p-4 text-center flex items-center justify-center">
                Register
              </button>
            </div>
          </form>
        </div>

        <div className=" w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Dont have account?{" "}
            <span className=" font-semibold underline underline-offset-2 cursor-pointer">
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
