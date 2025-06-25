import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    subject: "",
    message: "",
    phoneno: "", // Added phoneno property
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      address: "",
      email: "",
      phoneno: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cpg@yubrajchapagain.com.np",
      link: "mailto:cpg@yubrajchapagain.com.np",
    },

    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yubrajchapagain",
      color: "hover:text-blue-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/Yubraj.chapagain.9876",
      color: "hover:text-blue-400",
    },

    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/yubraj.cpg.9876?igsh=dzRuY3ZtZHRvY3Ux",
      color: "hover:text-pink-500",
    },
    {
      icon: Youtube,
      label: "YouTube",
      link: "https://youtube.com/@yubrajcpg-04?si=te8nsj8UzsR2pIWQ",
      color: "hover:text-red-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://twitter.com/yubrajchapagain",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:cpg@yubrajchapagain.com.np",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your financial operations to the next level? Let's
            discuss how I can help your business achieve its goals with
            professional accounting and advisory services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-12 bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Availability
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>📅 Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>📅 Saturday: 10:00 AM - 2:00 PM</p>
                <p>📅 Sunday: By Appointment Only</p>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">
                  Currently Available
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-gray-300 mb-2 font-medium mt-4"
                  >
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneno"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Contact Number *
                  </label>
                  <input
                    type="phoneno"
                    id="phoneno"
                    name="phoneno"
                    value={formData.phoneno}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="tax-planning">
                    Tax Planning & Compliance
                  </option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="financial-consulting">
                    Financial Consulting
                  </option>
                  <option value="business-advisory">Business Advisory</option>
                  <option value="accounting">Accounting Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
