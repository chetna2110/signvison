import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-75"></div>
      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold md:text-6xl drop-shadow-lg">Welcome to Our Service</h1>
        <p className="mt-4 text-lg text-gray-200 drop-shadow-md">
          Experience the best platform to enhance your workflow. Get started with ease and efficiency.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Launch Service
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white rounded-lg text-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;