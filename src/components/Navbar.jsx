import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Package, 
  BookOpen, 
  Building2, 
  Users, 
  MessageSquare, 
  BarChart, 
  Laptop, 
  ShieldCheck,
  Headphones,
  ChevronRight
} from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const menuItems = {
    products: [
      { icon: <Laptop className="w-5 h-5" />, label: 'Platform', href: '#' },
      { icon: <ShieldCheck className="w-5 h-5" />, label: 'Security', href: '#' },
      { icon: <BarChart className="w-5 h-5" />, label: 'Analytics', href: '#' },
    ],
    resources: [
      { icon: <BookOpen className="w-5 h-5" />, label: 'Documentation', href: '#' },
      { icon: <Users className="w-5 h-5" />, label: 'Community', href: '#' },
      { icon: <Headphones className="w-5 h-5" />, label: 'Support', href: '#' },
    ],
    company: [
      { icon: <Building2 className="w-5 h-5" />, label: 'About Us', href: '#' },
      { icon: <Users className="w-5 h-5" />, label: 'Careers', href: '#' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Contact', href: '#' },
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const NavLink = ({ icon, children, dropdownItems }) => (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-black hover:text-indigo-600 font-medium cursor-pointer transition-colors duration-200">
        {icon}
        <span>{children}</span>
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </button>
      <div className="absolute left-0 pt-2 w-56 hidden group-hover:block">
        <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-2">
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-white/40 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src="/api/placeholder/120/40"
              alt="Logo"
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink icon={<Package className="w-4 h-4 text-black" />} dropdownItems={menuItems.products}>
              Products
            </NavLink>
            <NavLink icon={<BookOpen className="w-4 h-4 text-black" />} dropdownItems={menuItems.resources}>
              Resources
            </NavLink>
            <NavLink icon={<Building2 className="w-4 h-4 text-black" />} dropdownItems={menuItems.company}>
              Company
            </NavLink>
          </div>

          {/* Desktop Get Started Button */}
                <div className="hidden md:block">
                <button className="bg-[#b997f5] text-neutral font-medium px-6 py-2.5 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#b997f5] focus:ring-offset-2 hover:bg-[#b997f5] relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-[#b997f5] rounded-full opacity-30 animate-pulse"></div>
              </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Get Started Button */}
            <button className="bg-[#b997f5] hover:bg-[#b997f5] text-white font-medium px-4 py-2 rounded-lg cursor-pointer transition-all duration-200">
              Get Started
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 md:hidden">
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              {Object.entries(menuItems).map(([section, items]) => (
                <div key={section} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => toggleSection(section)}
                    className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-indigo-600"
                  >
                    <div className="flex items-center space-x-3">
                      {section === 'products' && <Package className="w-5 h-5" />}
                      {section === 'resources' && <BookOpen className="w-5 h-5" />}
                      {section === 'company' && <Building2 className="w-5 h-5" />}
                      <span className="font-medium capitalize">{section}</span>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform duration-200 ${activeSection === section ? 'rotate-90' : ''}`}
                    />
                  </button>
                  
                  {/* Mobile Dropdown Content */}
                  {activeSection === section && (
                    <div className="pl-4 pb-3">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-indigo-600"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
