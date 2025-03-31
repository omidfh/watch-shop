"use client";

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Loader from "../loader/page";
import { revalidateHome } from "../_lib/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPath = usePathname();

  // Get callback URL from query, if none, fallback to "/"
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      setError("");

      try {
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (result?.error) {
          setError("Invalid email or password");
          return;
        }

        // Redirect user to the previous page or home
        router.push(callbackUrl);
        await revalidateHome();
      } catch (error) {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  if (isPending) return <Loader />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-4">
      <div className="w-full max-w-lg space-y-8 p-16 border rounded-sm">
        <div className="text-center">
          <h1 className="text-3xl tracking-wider uppercase">
            Sign in to your account
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-3">
            {error}
          </div>
        )}

        {/* Pass currentPath as callbackUrl in the login form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="callbackUrl" value={currentPath} />

          <div className="space-y-10 rounded-md shadow-sm">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="tracking-wider text-md font-medium text-stone-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:outline-none placeholder:text-stone-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="tracking-wider block text-md font-medium text-stone-300"
              >
                Password
              </label>
              <div className="flex items-center w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:outline-none"
                />
                <div className="relative">
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={() => setShowPassword(false)}
                      className="absolute right-1 -bottom-2 cursor-pointer hover:text-yellow-300"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPassword(true)}
                      className="absolute right-1 -bottom-2 cursor-pointer hover:text-yellow-300"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 px-4 border shadow-sm text-md uppercase font-medium text-white bg-yellow-600 hover:bg-stone-300 focus:outline-none transition-all duration-200"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="flex flex-col gap-4 justify-center items-center">
          <Link
            className="text-stone-300 hover:underline py-1 tracking-wider"
            href={"/signup"}
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
