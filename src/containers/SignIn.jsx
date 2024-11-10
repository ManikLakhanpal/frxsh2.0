import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SignIn() {
  const imageRef = useRef(null); // Ref for the image element
  const signInRef = useRef(null); // Ref for the sign-in button

  useEffect(() => {
    // GSAP fromTo animation for the image
    gsap.fromTo(
      imageRef.current,
      { x: '200%', opacity: 0 }, // Starting state
      { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' } // Ending state
    );
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (userExists(email)) {
      if (logUser(email, password)) {
        alert("Logged in Successfully");
      } else {
        alert("Password was wrong");
      }
    } else {
      alert("User doesn't exist");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black text-white">
      <div className="border-2 border-white p-8 rounded-md w-full max-w-4xl mx-8 gap-8 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-around">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign In to Your Account
          </h2>
          <form className="flex flex-col justify-between h-fit grow" onSubmit={handleSignIn}>
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
                  ref={signInRef} // Attach ref to sign-in button if needed for animation
                  className="w-full py-3 border-2 border-opacity-75 border-white font-semibold hover:bg-white hover:text-black focus:ring-2 focus:ring-white transition-all duration-200"
                >
                  Sign In
                </button>
              </div>
              <p className="text-center">
                Don't have an account?&nbsp;
                <a href="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden justify-center items-center lg:flex">
          <div className="overflow-hidden">
            <img
              ref={imageRef} // Attach ref to image for GSAP animation
              src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/men/coolman.jpg"
              className="max-w-full h-full rounded-md"
              alt="Cool Guy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function userExists(email) {
  return email === "test@example.com";
}

function logUser(email, password) {
  return password === "password123";
}
