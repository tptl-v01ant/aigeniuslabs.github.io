import React from 'react';
import { Brain, Rocket, Shield, Zap, ChevronRight, Github, Twitter, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">AIGeniusLabs</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Revolutionize Your AI Workflow
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Transform your development process with AIGeniusLabs. Build, test, and deploy AI solutions faster than ever before.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center">
            Start Free Trial <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="border border-gray-300 hover:border-blue-600 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors">
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose AIGeniusLabs?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <Rocket className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Lightning Fast Development</h3>
            <p className="text-gray-600">Build and deploy AI solutions in minutes, not months. Our platform accelerates your development lifecycle.</p>
          </div>
          <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
            <p className="text-gray-600">Bank-grade security with end-to-end encryption. Your data and AI models are always protected.</p>
          </div>
          <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <Zap className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Powerful Integration</h3>
            <p className="text-gray-600">Seamlessly integrate with your existing tools and workflows. No disruption to your process.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases We've Supported</h2>
          <div className="relative">
            <div className="flex animate-scroll">
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Healthcare AI</h3>
                  <p className="text-gray-600">Automated diagnosis assistance and patient care optimization</p>
                </div>
              </div>
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Financial Services</h3>
                  <p className="text-gray-600">Risk assessment and fraud detection systems</p>
                </div>
              </div>
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">E-commerce</h3>
                  <p className="text-gray-600">Personalized recommendation engines and inventory management</p>
                </div>
              </div>
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Manufacturing</h3>
                  <p className="text-gray-600">Predictive maintenance and quality control automation</p>
                </div>
              </div>
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Education</h3>
                  <p className="text-gray-600">Adaptive learning platforms and student performance analysis</p>
                </div>
              </div>
              {/* Duplicate cards for seamless loop */}
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Healthcare AI</h3>
                  <p className="text-gray-600">Automated diagnosis assistance and patient care optimization</p>
                </div>
              </div>
              <div className="flex-none w-[300px] mx-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Financial Services</h3>
                  <p className="text-gray-600">Risk assessment and fraud detection systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"AIGeniusLabs has transformed how we approach AI development. Their platform is intuitive and powerful."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&auto=format" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-gray-500">CTO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"The security features and enterprise integration capabilities are exactly what we needed for our healthcare AI solutions."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&auto=format" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Head of AI, HealthTech</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"We've cut our AI development time in half since switching to AIGeniusLabs. The ROI has been incredible."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&auto=format" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CEO, AI Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain" />
            <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=48&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain" />
            <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=48&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain" />
            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=48&fit=crop&auto=format" alt="Company logo" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600">&copy; 2025 AIGeniusLabs. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;