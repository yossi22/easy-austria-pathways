
import { useState } from "react";
import { Coins, Briefcase, FileText } from "lucide-react";

const Index = () => {
  // Create a new component for the Hand Heart icon since it's not directly available in Lucide
  const HandHeart = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-hand-heart"
    >
      <path d="M11 14H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7" />
      <path d="M7 14v-3a2 2 0 0 1 4 0v3" />
      <path d="M14 9V7a2 2 0 0 1 4 0v2" />
      <path d="M12.5 2.3a2.8 2.8 0 0 1 3.8 4.1L12.5 10l-3.8-3.6a2.8 2.8 0 0 1 3.8-4.1Z" />
      <path d="M14 14V6" />
      <path d="M18 14V6" />
    </svg>
  );

  return (
    <div className="font-assistant text-white bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/409bcfe6-b521-435c-a210-d9fa458b1b31.png" 
            alt="Austrian Building with Passport" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-navy bg-opacity-70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d512b246-b689-489f-80c0-ff263b52c9b8.png" 
                alt="EasyAustria Logo" 
                className="h-12 w-auto"
              />
              <span className="text-gold text-xl font-bold">EasyAustria</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#services" className="hover:text-gold transition-colors">Services</a>
              <a href="#blog" className="hover:text-gold transition-colors">Blog</a>
              <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            </div>
          </nav>
          
          {/* Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Austrian Citizenship</h1>
            <p className="text-xl md:text-2xl mb-8">With Personal and Reliable Guidance</p>
            <button className="bg-gold text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all transform hover:scale-105">
              Check Eligibility Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col items-center">
              <div className="text-gold mb-4 h-16 w-16">
                <Coins size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Savings</h3>
              <p className="text-center text-gray-300">Affordable services without compromising on quality</p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center">
              <div className="text-gold mb-4 h-16 w-16">
                <Briefcase size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
              <p className="text-center text-gray-300">Expert guidance throughout the entire process</p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center">
              <div className="text-gold mb-4 h-16 w-16 flex items-center justify-center">
                <HandHeart />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
              <p className="text-center text-gray-300">Individual care for your unique situation</p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-center">
              <div className="text-gold mb-4 h-16 w-16">
                <FileText size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Administrative Guidance</h3>
              <p className="text-center text-gray-300">Simplifying complex documentation requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-navy bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="/lovable-uploads/409bcfe6-b521-435c-a210-d9fa458b1b31.png" 
                  alt="Austrian Passport" 
                  className="rounded-lg shadow-2xl object-cover h-96 w-full"
                />
                <div className="absolute inset-0 bg-gold bg-opacity-30 rounded-lg"></div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg mb-6">
                I provide professional and personal guidance in the process of obtaining Austrian citizenship for descendants of Austrian Jews.
                The service includes document preparation, legal assistance, and a smooth, risk-free process – no need for a lawyer.
              </p>
              <p className="text-lg mb-6">
                My approach is based on deep experience and a respectful, hands-on attitude. Everything is handled with care, clarity, and precision throughout the process.
              </p>
              <button className="bg-gold text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-navy bg-opacity-80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-navy bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Who Can Apply for Citizenship?</h3>
                <p className="text-gray-300 mb-4">
                  Learn about the eligibility requirements for descendants of Austrian Jews seeking Austrian citizenship.
                </p>
                <button className="text-gold font-semibold hover:text-white transition-colors">
                  Read More →
                </button>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-navy bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">How Long Does It Take?</h3>
                <p className="text-gray-300 mb-4">
                  Understand the timeline and process for obtaining your Austrian citizenship through our personalized service.
                </p>
                <button className="text-gold font-semibold hover:text-white transition-colors">
                  Read More →
                </button>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-navy bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">What Does It Actually Cost?</h3>
                <p className="text-gray-300 mb-4">
                  Transparent pricing and cost breakdown for our Austrian citizenship application services.
                </p>
                <button className="text-gold font-semibold hover:text-white transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to start your Austrian citizenship journey? Contact us today for a personalized consultation.
          </p>
          <div className="mb-8">
            <a href="mailto:contact@easyaustria.com" className="text-gold hover:underline text-lg">contact@easyaustria.com</a>
            <p className="mt-2">+43 123 456 7890</p>
          </div>
          <button className="bg-gold text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy bg-opacity-90 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} EasyAustria. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">All rights reserved to klick web design</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
