import React from "react";
import {
  FileText,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Globe,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Tax Planning & Compliance",
    "Audit & Assurance",
    "Financial Consulting",
    "Business Advisory",
    "Risk Management",
    "Accounting Services",
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Yubraj Chapagain
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              CA Student & Financial Consultant specializing in modern
              accounting solutions, tax planning, and business advisory
              services.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:cpg@yubrajchapagain.com.np"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>cpg@yubrajchapagain.com.np</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((svc, i) => (
                <li key={i}>
                  <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {svc}
                  </span>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Your Socials */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Developer Contact <br />
                <span className="text-red-400">#Follow me:</span>
              </span>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yubraj-dhakal-3b263428a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/yubraj.dhakal.upamanyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/yubraj__dhakal?fbclid=IwY2xjawI9-qlleHRuA2FlbQIxMAABHW30pYp7MBFaORWMvjb-3ZR3jZX5gJEieqEqfadglxGahsp-mErZdXg8Gg_aem_9EOsSZRAhoL5bcNX_Ay0nQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://yubrazdhakal.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all duration-200"
                >
                  <Globe className="w-5 h-5" />
                </a>
                {/* <a
                  href="https://github.com/yubrazdhakal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-100 hover:bg-gray-700 transition-all duration-200"
                >
                  <GitHub className="w-5 h-5" />
                </a> */}
                <a
                  href="mailto:contact@yubrazdhakal.com.np"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-700 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer Credits & Developer Info */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © {currentYear} Yubraj Chapagain. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center md:justify-end space-x-1">
                <span>Crafted with</span>
                <Heart className="w-3 h-3 text-red-500 fill-current" />
                <span>
                  by{" "}
                  <a
                    href="https://yubrazdhakal.com.np"
                    className="underline text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yubraj Dhakal Upamanyu
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
