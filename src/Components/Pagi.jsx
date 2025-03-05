import React from "react";
import { Link } from "react-router-dom";

const Pagi = () => {
  return (
    <div className="bg-[#0a0d14] min-h-screen text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 shadow-md bg-[#121826]">
        <h1 className="text-2xl font-bold text-white">deepware®</h1>

        <nav className="hidden md:flex space-x-8 text-gray-300 font-semibold">
          <Link to="/pagi-gen" className="hover:text-red-500 transition duration-200">PAGI GEN</Link>
          <Link to="/scanner" className="hover:text-red-500 transition duration-200">DEEPWARE SCANNER</Link>
          <Link to="/about" className="hover:text-red-500 transition duration-200">ABOUT US</Link>
        </nav>

        <Link to="/contact" className="border border-gray-300 px-6 py-2 rounded-md font-semibold hover:bg-gray-300 hover:text-black transition duration-200">
          CONTACT US
        </Link>
      </header>

      {/* PAGI Gen Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-white">Enhance Your Film Productions with</h2>
        <h3 className="text-3xl text-purple-400 mt-2">Advanced Face Replacement Technology</h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          PAGI Gen is a cutting-edge on-premise software designed to craft remarkably convincing synthetic content for your film production.
        </p>
      </section>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-20 pb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#121826] p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h4 className="text-xl font-bold text-white">{feature.title}</h4>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Feature data
const features = [
  { icon: "⏳", title: "Temporal Consistency", description: "Our specially crafted models eliminate flickering issues in the temporal domain." },
  { icon: "📷", title: "High Resolution", description: "No resolution limitations, just need a high-end GPU with 24GB VRAM for Full HD." },
  { icon: "🎭", title: "Advanced Masking Options", description: "State-of-the-art masking models for faces, heads, and bodies." },
  { icon: "⚡", title: "Efficient Training", description: "Lightning-fast training times with an optimized pipeline and pre-trained models." },
  { icon: "💡", title: "Outstanding Light & Expression Transfer", description: "Experience unparalleled light transmittance and expression transfer." },
  { icon: "🔐", title: "Overcome ID-Leaks", description: "Revolutionary process ensures that the final output truly resembles your target." },
  { icon: "🔄", title: "Streamlined Workflow Integration", description: "Seamlessly integrates into your workflow, saving time and effort." },
  { icon: "🗂", title: "End-to-End Dataset Builder", description: "Select your target from multiple faces in various formats." },
  { icon: "⏱", title: "Real-time Ready", description: "Train multiple targets within a single model for real-time performance." }
];

export default Pagi;
