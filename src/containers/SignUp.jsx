import React from "react";

export default function SignUp() {
  return (
    <div class="flex justify-center items-center h-screen w-full bg-black">
      <div class="border-2 border-white p-8 rounded-md w-full max-w-4xl mx-8 gap-8 lg:grid lg:grid-cols-2">
        <div class="hidden justify-center items-center lg:flex bg-[rgb(220,220,220)]">
          <div class="overflow-hidden bg-[rgb(220,220,220)]">
            <img
              id="coolGuy"
              src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/men/blackman.jpg"
              alt="Image"
              class="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
        <div class="flex flex-col justify-around">
          <h2 class="text-2xl font-bold mb-6 text-center text-white">
            Create an Account
          </h2>
          <form class="flex flex-col justify-between h-fit grow">
            <div>
              <div class="mb-4">
                <label for="name" class="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="password"
                  class="block text-white font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="********"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="password_confirmation"
                  class="block text-white font-semibold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  class="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            <div>
              <div class="mb-6">
                <button
                  id="signUp"
                  class="w-full text-white py-3 border-2 border-opacity-75 border-white font-semibold hover:bg-white hover:text-black focus:ring-2 focus:ring-white transition-all duration-200"
                >
                  Sign Up
                </button>
              </div>
              <p class="text-center text-white">
                Already have an account? &nbsp;
                <a href="/signin" class="text-blue-500 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
