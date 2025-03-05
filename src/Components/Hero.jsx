import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER NAVIGATION */}
      <header className="flex justify-between items-center p-6 shadow-md">
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

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Scan & Detect <span className="text-red-500">Deepfake</span> Videos
          </h1>
          <p className="mt-4 text-gray-700">
            <strong>Scan</strong> a suspicious video to find out if it’s synthetically manipulated.
            <br />
            <strong>Contact Us</strong> for on-premise solutions.
          </p>
          <button 
            onClick={() => navigate("/scanner")} 
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-200"
          >
            GO TO SCANNER
          </button>
        </div>

        {/* Right Video Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <video controls className="w-full max-w-lg rounded-lg shadow-lg">
            <source src={`${process.env.PUBLIC_URL}/videos/deepfake.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* ENEMY AT THE GATES SECTION */}
      <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Video */}
        <div className="md:w-1/2 flex justify-center">
          <video controls className="w-full max-w-lg rounded-lg shadow-lg">
            <source src={`${process.env.PUBLIC_URL}/videos/enemy.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Enemy at the Gates</h2>
          <p className="mt-4 text-gray-700">
            Cybersecurity faces an emerging threat generally known as deepfakes.
            Malicious uses of AI-generated synthetic media, the most powerful
            cyber-weapon in history, is just around the corner.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-400">deepware</h1>

          {/* Company Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">COMPANY</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/deepfakes-timeline" className="hover:text-white">Deepfakes Timeline</Link></li>
              <li><Link to="/knowledge-center" className="hover:text-white">Knowledge Center</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
