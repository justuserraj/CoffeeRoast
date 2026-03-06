"use client";

import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E7CFC2]/80 backdrop-blur-md border-b border-[#E5D6CF]">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold text-[#2C1E1A] tracking-tighter">
            COFFEE<span className="text-[#8C5A3C]">ROAST</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {['Shop', 'Categories', 'Our Story', 'Blog'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#8C5A3C] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#F2DFD6] rounded-full transition-colors">
            <Search size={20} className="text-[#2C1E1A]" />
          </button>
          <button className="p-2 hover:bg-[#F2DFD6] rounded-full transition-colors relative">
            <ShoppingCart size={20} className="text-[#2C1E1A]" />
            <span className="absolute top-0 right-0 bg-[#8C5A3C] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
          <Button className="hidden md:flex bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] px-6">
            Sign In
          </Button>
          <button className="md:hidden p-2">
            <Menu size={24} className="text-[#2C1E1A]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;