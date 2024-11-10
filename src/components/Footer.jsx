import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold mb-2">Frxsh</h2>
          <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/frxsh.me"
            target="_blank"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="Visit our YouTube channel"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="#"
            aria-label="Follow us on Twitter"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
