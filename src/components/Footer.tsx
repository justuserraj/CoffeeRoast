"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-[#E5E5E5] pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1 */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
              COFFEE<span className="text-[#8C5A3C]">ROAST</span>
            </Link>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Crafting the perfect coffee experience since 2010. We source directly from farmers to ensure quality and sustainability.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8C5A3C] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-[#6B6B6B]">
              {[
                { name: 'Whole Bean', path: '/#shop' },
                { name: 'Ground Coffee', path: '/#shop' },
                { name: 'Coffee Pods', path: '/#shop' },
                { name: 'Brewing Gear', path: '/#shop' },
                { name: 'Gift Cards', path: '/#shop' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#6B6B6B]">
              {[
                { name: 'Our Story', path: '/our-story' },
                { name: 'Sustainability', path: '/sustainability' },
                { name: 'Wholesale', path: '/wholesale' },
                { name: 'Contact Us', path: '/contact-us' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-[#6B6B6B]">
              {[
                { name: 'Shipping Policy', path: '/shipping-policy' },
                { name: 'Returns & Exchanges', path: '/returns-exchanges' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#6B6B6B]">
          <p>© 2023 CoffeeRoast Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;