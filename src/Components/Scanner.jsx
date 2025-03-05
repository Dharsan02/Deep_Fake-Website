import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Upload, CloudUpload } from "lucide-react";

const Scanner = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-gray-700">deepware®</h1>
        
        <div className="flex space-x-6 items-center">
          <button className="border border-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-700 hover:text-white transition">
            API
          </button>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </header>

      {/* SCANNER FORM */}
      <section className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Scan & Detect Deepfake Videos</h2>
        <p className="text-gray-600 mb-4">Place a video link or upload a video/image</p>

        {/* INPUT BOX */}
        <div className="relative flex items-center w-full max-w-lg">
          <input 
            type="text"
            placeholder="https://www.example.com/"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-3 pr-12 focus:outline-none"
          />
          <label htmlFor="file-upload" className="absolute right-4 cursor-pointer">
            <CloudUpload className="w-6 h-6 text-gray-500 hover:text-gray-700 transition" />
          </label>
          <input id="file-upload" type="file" accept="image/*,video/*" className="hidden" />
        </div>

        {/* TERMS & POLICY */}
        <div className="flex items-center mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            By submitting data, you are agreeing to <Link to="#" className="text-blue-500">Terms of Services</Link> and <Link to="#" className="text-blue-500">Privacy Policy</Link>
          </label>
        </div>

        {/* SCAN BUTTON */}
        <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition">
          SCAN <span className="text-xs bg-white text-gray-700 px-2 py-1 rounded-md ml-2">BETA</span>
        </button>
      </section>
    </div>
  );
};

export default Scanner;
