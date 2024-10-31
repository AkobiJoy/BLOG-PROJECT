
"use client";
import React, { useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Form field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  // Error states
  const [nameErr, setNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
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
    setNameErr("");
    setLastNameErr("");
    setEmailErr("");
    setGenderErr("");
    setPasswordErr("");

    // Validation checks
    let formIsValid = true;

    if (!firstName) {
      setNameErr("First name not entered!");
      formIsValid = false;
    }
      else if (!lastName) {
        setLastNameErr("Last name not entered!")
        formIsValid = false
   }
     else if (!email) {
      setEmailErr("Email not entered!");
      formIsValid = false;
    }
     else if (!gender) {
      setGenderErr("Gender not entered!");
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
        const res = await axios.post("http://localhost:3001/api/register", {
          firstName,
          lastName ,
          email,
          gender,
          password,
        });
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
  };

  return (
<div className="color-change-5x flex items-center justify-center py-[10rem] px-[10rem] h-[100vh]">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg shadow-sky-200 max-w-md">
        <div className="flex flex-col gap-4">
          <h1 className="text-center bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent text-wrap text-lg font-bold">
            HI THERE! <span className="italic">SIGN UP TO BEGIN</span>
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col gap-3">
            <div>
              <label htmlFor="First Name">First Name</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setNameErr("");
                }}
                value={firstName}
                type="text"
                placeholder={nameErr || "First Name"}
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  nameErr ? "placeholder-red-600 italic border-2 border-red-500" : ""
                }`}
              />
            </div>

            <div>
              <label htmlFor="Last Name">Last Name</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameErr("");
                }}
                value={lastName}
                type="text"
                placeholder={lastNameErr || "Last Name"}
                className={`w-full px-3 py-3 outline-sky-100 border-3 rounded border-white placeholder-gray-400 ${
                  lastNameErr ? "placeholder-red-600 italic border-2 border-red-500" : ""
                }`}
              />
            </div>

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

            <div className="relative w-full">
              <label htmlFor="gender" className="block text-sm font-medium text-black">
                Gender
              </label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                  setGenderErr("");
                }}
                value={gender}
                className={`w-full h-[3.2rem] px-3 py-2 text-gray-700 bg-white border rounded-md outline-none focus:border-sky-100 focus:ring-2 focus:ring-sky-100 ${
                  genderErr ? "border-red-500 ring-red-200" : "border-gray-300"
                }`}
              >
                <option value="" disabled hidden>
                  {genderErr || "Select Gender"}
                </option>
                <option value="Male" className="text-gray-700">Male</option>
                <option value="Female" className="text-gray-700">Female</option>
              </select>
              {genderErr && <p className="text-red-500 text-sm">{genderErr}</p>}
            </div>

            <div className="relative mb-5">
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
                {loading ? <div className="loader px-1 py-2 text-xs"></div> : "Create Account"}
              </button>
            </div>
          </form>

          {/* <div className="flex text-center items-center justify-center gap-4">
            <span className="text-sm flex gap-1 bg-gradient-to-r from-sky-600 to-cyan-900 text-transparent bg-clip-text text-center">
              Already have an account?
              </span>
              <button className="text-md font-extrabold bg-gradient-to-r from-blue-200 to-sky-400 text-transparent bg-clip-text cursor-pointer hover:text-white">
             Sign-In Here
            </button>         
          </div> */}

      <div className="flex text-center items-center justify-center gap-2">
          <span className="text-md flex gap-1 bg-gradient-to-r from-sky-800 to-cyan-950 text-transparent bg-clip-text text-center">
            Do you have an account?
            </span>
            <button className="text-md font-extrabold bg-gradient-to-r from-blue-900 to-sky-400 text-transparent bg-clip-text cursor-pointer hover:text-white">
             SignIn Here
            </button>
        
        </div>
        </div>
      </div>
    </div>

  
  );
};

export default Register;








