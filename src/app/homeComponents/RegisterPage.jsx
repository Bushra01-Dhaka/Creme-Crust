import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'

const RegisterPage = () => {
  return (
    <div className="flex justify-center max-w-screen-2xl mx-auto items-center px-6 lg:px-20 py-20 bg-primary uppercase font-style text-white">
          <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-40 items-start py-6 ">
            {/* left */}
            <div className="flex-1 w-full max-w-md">
              <h2 className="text-3xl font-extrabold text-accent">Create Account</h2>
              <p className="py-2 text-md">Register with Crème & Crust</p>
    
              <form className="mt-6 space-y-4">
                {/* name */}
                 <div>
                  <label className="text-sm">Name</label>
                  <input
                    type="name"
                    placeholder="Enter your name"
                    className="input input-bordered rounded-full w-full bg-white text-black mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered rounded-full w-full bg-white text-black mt-1"
                  />
                </div>
    
                {/* Password */}
                <div>
                  <label className="text-sm">Password</label>
                  <input
                    type="password"
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
                  Login
                </button>
    
                {/* Divider */}
                <div className="divider text-white">OR</div>
    
                {/* Google login (optional UI) */}
                <button
                  type="button"
                  className="btn w-full bg-white text-black border-0 rounded-full"
                >
                  Continue with Google <FaGoogle className="text-lg inline text-primary "/>
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
            <div className="flex-1  min-h-screen">
              <Image src="/use2.jpg" className='rounded-full shadow-2xl shadow-accent' height={300} width={500} alt="Bakery foods" />
            </div>
          </div>
        </div>
  )
}

export default RegisterPage