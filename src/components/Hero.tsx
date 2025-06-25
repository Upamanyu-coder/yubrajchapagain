import React from "react";
import { ArrowDown, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full p-1">
              <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                <img
                  src="https://i.postimg.cc/vH8w4v5B/Whats-App-Image-2025-06-25-at-16-23-23.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Headings and Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Yubraj
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
              Chapagain
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            CA Student & Financial Consultant
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializing in financial consulting, tax planning, audit services,
            Share Market Specialist and business advisory. Bringing modern
            expertise to traditional accounting practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              aria-label="Get in touch"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About Section"
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
