import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER NAVIGATION */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-gray-700">deepware®</h1>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <Link to="/pagi-gen" className="hover:text-red-500 transition duration-200">PAGI GEN</Link>
          <Link to="/scanner" className="hover:text-red-500 transition duration-200">DEEPWARE SCANNER</Link>
          <Link to="/about" className="hover:text-red-500 transition duration-200">ABOUT US</Link>
        </nav>

        <Link to="/contact" className="border border-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-700 hover:text-white transition duration-200">
          CONTACT US
        </Link>
      </header>

      {/* ABOUT US CONTENT */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Deepfakes are going to be the first real punch from AI to humanity. The cybersecurity industry has a very short time to get ahead of deepfakes before they undermine the public’s trust in reality.
          </p>
          <p className="text-gray-600 mb-6">
            We first recognized the danger while our parent company <span className="font-bold">Zemana</span> researched methods to develop an AI-based antivirus engine. Later, in mid-2018, we started our research on deepfake detection and generation as the deepware AI team.
          </p>
          <Link to="/contact">
            <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
