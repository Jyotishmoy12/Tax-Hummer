import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import AnimatedSocialIcons from './AnimatedSocialIcons';
import {Link} from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="bg-gradient-to-br from-lavender-800 to-purple-800 text-purple-700">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Logo & Description Space */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
            
            </div>
            <h2 className="
            text-4xl 
            font-extrabold 
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-purple-600 
            via-lavender-500 
            to-indigo-600 
            animate-gradient-x 
            hover:scale-105 
            transition-transform 
            duration-300 
            cursor-pointer 
            select-none
            tracking-wide
            drop-shadow-lg
            ">
            Tax Hummer
            </h2>
          </div>
          <p className="text-purple/80 px-7">
            Simplifying tax management and financial guidance for individuals and businesses.
          </p>
          {/* Illustration Space */}
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7">
            Quick Links
          </h3>
      
          <nav className="space-y-2 px-7">
            <Link to="/" className="block hover:text-lavender-200 transition-colors">Home</Link>
            <Link to="/services" className="block hover:text-lavender-200 transition-colors">Services</Link>
            <Link to="/resources" className="block hover:text-lavender-200 transition-colors">Resources</Link>
            <Link to="/about" className="block hover:text-lavender-200 transition-colors">About</Link>
            <Link to="/contact" className="block hover:text-lavender-200 transition-colors">Contact</Link>
          </nav>
      
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7">
            Contact Us
          </h3>
          <div className="space-y-3 px-7">
            <div className="flex items-center space-x-3">
              <MapPin className="text-lavender-300" />
              <span>123 Tax Street, Financial District</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-lavender-300" />
              <span>+91 (555) TAX-HELP</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-lavender-300" />
              <span>support@taxhummer.com</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <AnimatedSocialIcons/>
          </div>
          
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="bg-purple-800 text-center py-4">
        <p className="text-sm text-white/80">
          © 2025 Tax Hummer. All Rights Reserved | 
          <a href="#" className="ml-2 hover:text-lavender-200">
            Privacy Policy
          </a> | 
          <a href="#" className="ml-2 hover:text-lavender-200">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;