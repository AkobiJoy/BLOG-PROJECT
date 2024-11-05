"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const Login = () => {
  const router=useRouter()
    const [showPassword, setShowPassword] = useState(false);

  // Form field states 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const [resErr, setResErr] = useState(false)

  // Error states
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // Submission tracking
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Track that the form has been submitted

    // Reset errors
    setEmailErr("");
    setPasswordErr("");

    // Validation checks
    let formIsValid = true;
     if (!email) {
      setEmailErr("Email not entered!");
      formIsValid = false;
    }
     else if (!password) {
      setPasswordErr("Password not entered!");
      formIsValid = false;
    }

    if (formIsValid) {
      setLoading(true);
      // Proceed with form submission (e.g., API call)
      try {
        const res = await axios.post("http://localhost:3000/api/login", {
          email,
          password,
        });
        if(res.status===401){
            setResErr(true)
        }
        else if(res.status===200){
          router.push('/write')
        }
        console.log(res);
      } catch (error) {
        console.log(error.message);
        setResErr(true)
      }
      setLoading(false);
    }
  };


  return (
        <div className="kenburns-top">
  <div className="color-change-3x flex items-center justify-center py-[10rem] px-[10rem] h-[100vh]">
    <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg shadow-sky-200 max-w-md">
      <div className="flex flex-col gap-4">
        <h1 className="text-center bg-gradient-to-r from-sky-500 via-stone-900 to-indigo-700 bg-clip-text text-transparent text-wrap text-lg font-bold">
         Input Your Login  <span className="italic">Credentials</span>
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          
        {
              resErr && (
                <div role="alert" className="alert alert-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Warning:  Invalid Credentials</span>
                </div>
              )
            }


          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              value={email}
              type="email"
              placeholder={emailErr || "Email"}
              className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                emailErr ? "placeholder-red-600 border-2 italic border-red-500" : ""
              }`}
            />
          </div>

          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordErr("");
              }}
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder={passwordErr || "Password"}
              className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                passwordErr ? "placeholder-red-600 border-2 italic border-red-500" : ""
              }`}
            />
            <div
              onClick={toggleShow}
              className="absolute top-3/4 right-3 transform -translate-y-1/2 flex items-center cursor-pointer"
            >
              {showPassword ? <GoEyeClosed /> : <GoEye />}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="glass rounded-full py-2 px-3 shadow-md bg-sky-700 bg-opacity-50 hover:bg-opacity-70 hover:translate-y-px duration-300 text-white font-semibold w-max">
              {loading ? <div className="loader px-1 py-2 text-xs"></div> : "Login In"}
            </button>
          </div>
        </form>

        <div className="flex text-center items-center justify-center gap-2">
          <span className="text-md flex gap-1 bg-gradient-to-r from-sky-300 to-cyan-500 text-transparent bg-clip-text text-center">
            Do not have an account?
            </span>
            <button className="text-md font-extrabold bg-gradient-to-r from-blue-200 to-sky-400 text-transparent bg-clip-text cursor-pointer hover:text-white">
             Register Here
            </button>
        
        </div>
      </div>
    </div>
  </div>

        </div>

  
  )
}

export default Login
