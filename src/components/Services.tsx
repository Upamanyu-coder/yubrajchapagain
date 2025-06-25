import React from 'react';
import { Calculator, FileCheck, TrendingUp, Users, Shield, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Planning & Compliance',
      description: 'Comprehensive tax planning strategies and compliance services to optimize your tax position while ensuring full regulatory adherence.',
      features: ['Income Tax Planning', 'GST Compliance', 'Tax Return Filing', 'Tax Audit Support']
    },
    {
      icon: FileCheck,
      title: 'Audit & Assurance',
      description: 'Professional audit services providing independent verification of financial statements and internal control systems.',
      features: ['Statutory Audit', 'Internal Audit', 'Due Diligence', 'Risk Assessment']
    },
    {
      icon: TrendingUp,
      title: 'Financial Consulting',
      description: 'Strategic financial advisory services to help businesses make informed decisions and achieve sustainable growth.',
      features: ['Financial Analysis', 'Investment Advisory', 'Cash Flow Management', 'Financial Restructuring']
    },
    {
      icon: Users,
      title: 'Business Advisory',
      description: 'Comprehensive business consulting services to help startups and established businesses navigate challenges and opportunities.',
      features: ['Business Planning', 'Startup Consulting', 'Process Optimization', 'Compliance Advisory']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate business risks to protect your organization and ensure long-term sustainability.',
      features: ['Risk Assessment', 'Internal Controls', 'Compliance Monitoring', 'Fraud Prevention']
    },
    {
      icon: BookOpen,
      title: 'Accounting Services',
      description: 'Complete bookkeeping and accounting services ensuring accurate financial records and regulatory compliance.',
      features: ['Bookkeeping', 'Financial Statements', 'Management Reporting', 'Budgeting & Forecasting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive accounting and financial services tailored to meet your business needs 
            with precision, expertise, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-gray-800 border border-gray-600 text-gray-300 py-3 px-6 rounded-lg hover:bg-gray-700 hover:border-blue-400 hover:text-blue-400 transition-all duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-yellow-500 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how I can help optimize your financial operations and drive business growth.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;