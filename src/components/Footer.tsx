"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1B1B] text-[#E5E5E5] pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="text-3xl font-bold text-white tracking-tighter">
              COFFEE<span className="text-[#8C5A3C]">ROAST</span>
            </Link>
            <p className="text-base text-[#999] leading-relaxed">
              Crafting the perfect coffee experience since 2010. We source directly from sustainable farms to ensure quality in every cup.
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8C5A3C] hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Quick Links</h4>
            <ul className="space-y-5 text-base text-[#999]">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/our-story' },
                { name: 'Subscription', path: '/#pricing' },
                { name: 'Shop All', path: '/#shop' },
                { name: 'Contact', path: '/contact-us' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-[#8C5A3C] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C5A3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Contact Us</h4>
            <ul className="space-y-6 text-base text-[#999]">
              <li className="flex items-start gap-4">
                <Mail className="text-[#8C5A3C] shrink-0" size={20} />
                <a href="mailto:hello@coffeeroast.com" className="hover:text-white transition-colors">
                  hello@coffeeroast.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-[#8C5A3C] shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-[#8C5A3C] shrink-0" size={20} />
                <span>123 Coffee Lane, Brew City, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Newsletter</h4>
            <p className="text-sm text-[#999] mb-6">Get brewing tips and exclusive offers.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#8C5A3C] transition-colors"
              />
              <button className="bg-[#8C5A3C] hover:bg-[#5B3A29] text-white font-bold py-3 rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#666]">
          <p>© {currentYear} CoffeeRoast Inc. All rights reserved. | <span className="text-white/50 hover:text-white transition-colors cursor-default">VizoxStudio</span></p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;