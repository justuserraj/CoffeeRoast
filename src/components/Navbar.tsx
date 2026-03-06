"use client";

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import CartDrawer from './CartDrawer';
import SearchOverlay from './SearchOverlay';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'Categories', href: '#categories' },
    { name: 'Impact', href: '#stories' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#E7CFC2]/90 backdrop-blur-lg h-16 border-b border-[#E5D6CF]' : 'bg-transparent h-20'
      }`}>
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-[#2C1E1A] tracking-tighter">
              COFFEE<span className="text-[#8C5A3C]">ROAST</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-[#1A1A1A] hover:text-[#8C5A3C] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-[#F2DFD6] rounded-full transition-colors"
            >
              <Search size={20} className="text-[#2C1E1A]" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-[#F2DFD6] rounded-full transition-colors relative"
            >
              <ShoppingCart size={20} className="text-[#2C1E1A]" />
              <span className="absolute top-0 right-0 bg-[#8C5A3C] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <Button className="hidden md:flex bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] px-6">
              Sign In
            </Button>
            <button 
              className="md:hidden p-2 text-[#2C1E1A]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#E7CFC2] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold text-[#2C1E1A]">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={32} className="text-[#2C1E1A]" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold text-[#2C1E1A] hover:text-[#8C5A3C] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Button className="w-full bg-[#2C1E1A] text-white rounded-[24px] py-6 text-lg">
                Sign In
              </Button>
              <p className="text-center text-sm text-[#6B6B6B]">
                © 2023 CoffeeRoast Inc.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;