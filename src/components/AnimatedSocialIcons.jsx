import React from 'react';
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const AnimatedSocialIcons = () => {
  const socialLinks = [
    { 
      Icon: Twitter, 
      href: "#", 
      color: "hover:text-blue-400",
      hoverEffect: "group hover:rotate-12 hover:scale-110 hover:bg-blue-50/20 rounded-full p-2"
    },
    { 
      Icon: Facebook, 
      href: "#", 
      color: "hover:text-blue-600",
      hoverEffect: "group hover:rotate-6 hover:scale-110 hover:bg-blue-50/20 rounded-full p-2"
    },
    { 
      Icon: Linkedin, 
      href: "#", 
      color: "hover:text-blue-700",
      hoverEffect: "group hover:-rotate-12 hover:scale-110 hover:bg-blue-50/20 rounded-full p-2"
    },
    { 
      Icon: Instagram, 
      href: "#", 
      color: "hover:text-pink-500",
      hoverEffect: "group hover:rotate-6 hover:scale-110 hover:bg-pink-50/20 rounded-full p-2"
    }
  ];

  return (
    <div className="flex space-x-4 px-7 items-center justify-center">
      {socialLinks.map(({ Icon, href, color, hoverEffect }) => (
        <a 
          key={href} 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className={`
            transition-all duration-300 ease-in-out 
            ${color} 
            ${hoverEffect}
            transform hover:shadow-lg
          `}
        >
          <Icon 
            size={28} 
            className="transition-transform duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default AnimatedSocialIcons;