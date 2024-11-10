import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SignUp() {
  const imageRef = useRef(null); // Ref for the image

  useEffect(() => {
    // GSAP fromTo animation for the image
    gsap.fromTo(
      imageRef.current,
      { x: "-200%", opacity: 0 }, // Starting state
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out" } // Ending state
    );
  }, []);

  const handleSignUp = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password_confirmation").value;

    if (confirmPassword === password) {
      if (!userExists(email)) {
        const success = addUser(name, email, password);
        if (success) {
          alert("User successfully registered!");
        } else {
          alert("Error: User could not be registered.");
        }
      } else {
        alert("Error: A user with this email already exists.");
      }
    } else {
      alert("Error: Passwords do not match.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <div className="border-2 border-white p-8 rounded-md w-full max-w-4xl mx-8 gap-8 lg:grid lg:grid-cols-2">
        <div className="hidden justify-center items-center lg:flex bg-[rgb(220,220,220)]">
          <div className="overflow-hidden bg-[rgb(220,220,220)]">
            <img
              ref={imageRef} // Attach ref to image for GSAP animation
              src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/men/blackman.jpg"
              alt="Image"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Create an Account
          </h2>
          <form className="flex flex-col justify-between h-fit grow" onSubmit={handleSignUp}>
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
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
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="********"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password_confirmation" className="block text-white font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
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
                  className="w-full text-white py-3 border-2 border-opacity-75 border-white font-semibold hover:bg-white hover:text-black focus:ring-2 focus:ring-white transition-all duration-200"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center text-white">
                Already have an account? &nbsp;
                <a href="/signin" className="text-blue-500 hover:underline">
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

// Mock functions for demonstration
function userExists(email) {
  return false; // Replace with actual check
}

function addUser(name, email, password) {
  return true; // Replace with actual add user logic
}
