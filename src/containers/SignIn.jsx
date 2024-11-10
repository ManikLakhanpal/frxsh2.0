import React from 'react'

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black text-white">
      <div className="border-2 border-white p-8 rounded-md w-full max-w-4xl mx-8 gap-8 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-around">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign In to Your Account
          </h2>
          <form className="flex flex-col justify-between h-fit grow">
            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            <div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-3 border-2 border-opacity-75 border-white font-semibold hover:bg-white hover:text-black focus:ring-2 focus:ring-white transition-all duration-200"
                >
                  Sign In
                </button>
              </div>
              <p className="text-center">
                Don't have an account?
                <a href="/sign-up" className="text-blue-500 hover:underline ml-1">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden justify-center items-center lg:flex">
          <div className="overflow-hidden">
            <img
              src="⁠ https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/men/coolman.jpg"
              className="max-w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}