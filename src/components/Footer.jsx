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
    <footer className="bg-purple-500 text-white font-sans font-medium">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Logo & Description Space */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 px-3">
            <div>
            
            </div>
            <h2 className="
            text-4xl 
            font-extrabold
            bg-clip-text 
            text-white
            animate-gradient-x 
            hover:scale-105 
            transition-transform 
            duration-300 
            cursor-pointer 
            select-none
            tracking-wide
            drop-shadow-lg
            italic
            font-[playfair-display]
            ">
            Tax Hummer
            </h2>
          </div>
          <p className="text-purple/80 px-7 font-sans">
            Simplifying tax management and financial guidance for individuals and businesses.
          </p>
          {/* Illustration Space */}
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7 font-sans">
            Quick Links
          </h3>
      
          <nav className="space-y-2 px-7">
            <Link to="/" className="block hover:text-lavender-200 transition-colors font-sans">Home</Link>
            <Link to="/services" className="block hover:text-lavender-200 transition-colors font-sans">Services</Link>
            <Link to="/resources" className="block hover:text-lavender-200 transition-colors font-sans">Resources</Link>
            <Link to="/about" className="block hover:text-lavender-200 transition-colors font-sans">About</Link>
            <Link to="/contact" className="block hover:text-lavender-200 transition-colors font-sans">Contact</Link>
          </nav>
      
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7 font-sans">
            Contact Us
          </h3>
          <div className="space-y-3 px-7">
            <div className="flex items-center space-x-3">
              <MapPin className="text-lavender-300" />
              <span className="font-sans">123 Tax Street, Financial District</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-lavender-300" />
              <span className="font-sans">+91 (555) TAX-HELP</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-lavender-300" />
              <span className="font-sans">support@taxhummer.com</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 px-7 font-sans">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <AnimatedSocialIcons/>
          </div>
          
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="bg-purple-800 text-center py-4">
        <p className="text-sm text-white/80 font-sans">
          © 2025 Tax Hummer. All Rights Reserved | 
          <a href="#" className="ml-2 hover:text-lavender-200 ">
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