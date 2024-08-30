"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isPassVisibilityOff, setIsPassVisibilityOff] = useState(false);

  const togglePassVisibility = () => {
    setIsPassVisibilityOff(!isPassVisibilityOff);
  };

  const handleLogin = (e: any) => {
    if (!email || !password) {
      setError(true);
      e.preventDefault();
    } else {
      setError(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center mb-">
        <Image
          src="/logo.jpg"
          alt="Placeholder Image"
          className="rounded-lg mb-7"
          width={70}
          height={60}
        />
        <p className="text-4xl mt-2">LawChat</p>
        {error && (
          <div className="text-center mt-2">
            <p className="font-medium text-xs text-red-600">Login Error</p>
            <p className="font-medium text-xs text-red-600 mt-1">
              An unexpected error occurred. Please try logging in again.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center mb-6 space-y-4 mt-6">
        <input
          className="placeholder-gray-200 rounded-full p-3 px-5 border-solid text-gray-800 mt-6 border-gray-200 w-64"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isPassVisibilityOff == false ? (
          <div className="relative cursor-pointer">
            <input
              className="placeholder-gray-200 rounded-full p-3 pl-5 pr-12 border-solid text-slate-800 mt-2 border-gray-200 w-64"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <VisibilityOffIcon
              className="absolute top-4 right-4"
              sx={{ color: "gray", width: 25, height: 25 }}
              onClick={togglePassVisibility}
            />
          </div>
        ) : (
          <div className="relative cursor-pointer">
            <input
              className="placeholder-gray-200 rounded-full p-3 pl-5 pr-12 border-solid text-slate-800 mt-2 border-gray-200 w-64"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <VisibilityIcon
              className="absolute top-4 right-4"
              sx={{ color: "gray", width: 25, height: 25 }}
              onClick={togglePassVisibility}
            />
          </div>
        )}
        <Link href="/chats">
          <button
            className="w-64 bg-red-600 text-white rounded-full mt-2 p-3 border-none cursor-pointer"
            onClick={handleLogin}
          >
            Continue
          </button>
        </Link>
      </div>
      <div className="flex items-center mt-12 cursor-pointer">
        <input
          type="checkbox"
          id="KeepSigned"
          className="mr-2 w-5 h-5 cursor-pointer"
        />
        <label
          className="font-medium text-xs text-gray-500 cursor-pointer"
          htmlFor="KeepSigned"
        >
          Keep me signed in
        </label>
      </div>
    </div>
  );
}
