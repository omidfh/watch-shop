"use client";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { signUpAction } from "../_lib/actions";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Loader from "../loader/page";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function resetElements() {
    setEmail("");
    setPassword("");
    setSecondPassword("");
    setError("");
    setShowPassword(false);
    setShowPassword2(false);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    startTransition(async () => {
      e.preventDefault();
      try {
        setError("");
        if (password === "" || secondPassword === "" || email === "") {
          setError("Please fill all fields");
          return;
        }
        if (password.length < 6) {
          setError("Password at least must be 6 characters");
          return;
        }

        if (password && secondPassword && password !== secondPassword) {
          setError("Passwords must be the same!");
          return;
        }

        if (error === "") await signUpAction({ email, password });

        resetElements();
        router.push("/login");
      } catch (err) {
        console.log(err);
      }
    });
  };
  if (isPending) return <Loader />;
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-4 ">
      <div className="w-full max-w-lg space-y-8 p-16 border rounded-sm">
        <div className="text-center ">
          <h1 className="text-3xl tracking-wider uppercase">
            Create Your Account
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-3 ">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-10 rounded-md shadow-sm">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="tracking-wider text-md font-medium text-stone-300"
              >
                Your Email address
              </label>
              <div className="flex items-center w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  minLength={6}
                  onChange={(e) => setEmail(e.target.value)}
                  className="tracking-wider block w-full px-3 py-2 border-b border-gray-300  shadow-sm bg-transparent focus:outline-none placeholder:text-stone-300 placeholder:text-opacity-40"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="tracking-wider block text-md font-medium text-stone-300"
              >
                Your Password
              </label>
              <div className="flex items-center w-full">
                <input
                  id="password"
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="tracking-wider block w-full px-3 py-2 border-b border-gray-300  shadow-sm bg-transparent focus:outline-none"
                />
                <div className="relative">
                  {!showPassword ? (
                    <FaEye
                      onClick={() => setShowPassword((pass) => !pass)}
                      className="absolute right-1 -bottom-2 cursor-pointer hover:text-yellow-300  hover:text-opacity-70 "
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPassword((pass) => !pass)}
                      className="absolute right-1 -bottom-2 cursor-pointer hover:text-yellow-300  hover:text-opacity-70 "
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="password2"
                className="tracking-wider block text-md font-medium text-stone-300"
              >
                Repeat Password
              </label>
              <div className="flex items-center w-full">
                <input
                  id="password2"
                  name="repeat Password"
                  type={`${showPassword2 ? "text" : "password"}`}
                  required
                  value={secondPassword}
                  onChange={(e) => setSecondPassword(e.target.value)}
                  className=" tracking-wider block w-full px-3 py-2 border-b border-gray-300  shadow-sm bg-transparent focus:outline-none"
                />
                <div className="relative">
                  {!showPassword2 ? (
                    <FaEye
                      onClick={() => setShowPassword2((pass) => !pass)}
                      className="absolute right-1 -bottom-2 cursor-pointer hover:text-yellow-300  hover:text-opacity-70 "
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPassword2((pass) => !pass)}
                      className="absolute right-1 -bottom-2 cursor-pointer hover:text-yellow-300  hover:text-opacity-70 "
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 px-4 border border-transparent  shadow-sm text-md uppercase font-medium text-white bg-yellow-600 hover:bg-stone-300 hover:bg-opacity-30 focus:outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
            <Link
              className="text-stone-300 hover:underline py-1 tracking-wider"
              href={"/login"}
            >
              Have an account ? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
