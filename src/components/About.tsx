import React from "react";
import { GraduationCap, Target, Users, Award } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { icon: GraduationCap, label: "Years of Study", value: "4+" },
    { icon: Target, label: "Projects Completed", value: "25+" },
    { icon: Users, label: "Clients Served", value: "15+" },
    { icon: Award, label: "Certifications", value: "8+" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                Me
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated CA student with a passion for modern financial
              consulting and business advisory. My journey in chartered
              accountancy has equipped me with comprehensive knowledge in
              taxation, auditing, and financial management.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I believe in combining traditional accounting principles with
              innovative digital solutions to provide clients with efficient,
              accurate, and strategic financial services that drive business
              growth.
            </p>

            {/* Skills */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                {" "}
                Core Competencies{" "}
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Financial Analysis</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Tax Planning</span>
                    <span className="text-yellow-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Audit & Assurance</span>
                    <span className="text-green-400">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education & Certification */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">
                      CA Final (Pursuing)
                    </p>
                    <p className="text-gray-500 text-sm">
                      Institute of Chartered Accountants
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">
                      Advanced Taxation Certificate
                    </p>
                    <p className="text-gray-500 text-sm">
                      Professional Tax Academy
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">
                      Financial Modeling Certification
                    </p>
                    <p className="text-gray-500 text-sm">
                      Financial Modeling Institute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
