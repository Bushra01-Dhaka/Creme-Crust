"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { registerUser } from "../actions/auth/registerUser";

const RegisterPage = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({name, email, password});
  }
  return (
    <div className="flex justify-center max-w-screen-2xl mx-auto items-center px-6 lg:px-20 py-20 bg-primary uppercase font-style text-white">
      <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-40 items-start py-6 ">
        {/* left:  register form*/}
        <div className="flex-1 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-accent">
            Create Account
          </h2>
          <p className="py-2 text-md">Register with Crème & Crust</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* name */}
            <div>
              <label className="text-sm">Name</label>
              <input
                type="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered rounded-full w-full bg-white text-black mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-full w-full bg-white text-black mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-full w-full bg-white text-black mt-1"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a className="text-xs text-accent cursor-pointer hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-accent w-full text-primary uppercase font-semibold rounded-full"
            >
              Register
            </button>

            {/* Divider */}
            <div className="divider text-white">OR</div>

            {/* Google login (optional UI) */}
            <button
              type="button"
              className="btn w-full bg-white text-black border-0 rounded-full"
            >
              Continue with Google{" "}
              <FaGoogle className="text-lg inline text-primary " />
            </button>

            {/* Signup redirect */}
            <p className="text-center text-sm pt-2">
              Already have an account?{" "}
              <Link href="login">
                <span className="text-accent cursor-pointer hover:underline">
                  Log in
                </span>
              </Link>
            </p>
          </form>
        </div>
        {/* right  */}
        <div className="flex-1 min-h-screen flex justify-center items-center cursor-pointer">
          <div style={{ perspective: "1000px" }}>
            <Image
              src="/use2.jpg"
              alt="Bakery foods"
              width={500}
              height={300}
              className="rounded-md shadow-2xl shadow-accent transition-all duration-300 hover:scale-105"
              style={{
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = (y / rect.height - 0.5) * 20;
                const rotateY = (x / rect.width - 0.5) * -20;

                e.currentTarget.style.transform = `
                      rotateX(${rotateX}deg) 
                      rotateY(${rotateY}deg) 
                      scale(1.05)
                    `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
