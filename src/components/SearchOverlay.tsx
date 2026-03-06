"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, TrendingUp } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-[#E7CFC2] flex flex-col"
        >
          <div className="container-custom pt-10">
            <div className="flex justify-end mb-12">
              <button onClick={onClose} className="p-4 hover:bg-[#F2DFD6] rounded-full transition-colors">
                <X size={32} className="text-[#2C1E1A]" />
              </button>
            </div>

            <div className="max-w-3xl mx-auto w-full">
              <div className="relative mb-16">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-[#8C5A3C]" size={32} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search for beans, gear, or stories..." 
                  className="w-full bg-transparent border-b-2 border-[#2C1E1A] py-6 pl-12 text-3xl md:text-4xl font-bold placeholder:text-[#2C1E1A]/20 focus:outline-none focus:border-[#8C5A3C] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-[#8C5A3C] tracking-widest uppercase mb-6">
                    <TrendingUp size={16} />
                    Trending Searches
                  </h3>
                  <ul className="space-y-4">
                    {['Cold Brew Kits', 'Ethiopian Light Roast', 'Subscription Boxes', 'V60 Filters'].map(item => (
                      <li key={item}>
                        <button className="text-xl font-semibold text-[#2C1E1A] hover:text-[#8C5A3C] transition-colors">
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#8C5A3C] tracking-widest uppercase mb-6">
                    Quick Links
                  </h3>
                  <ul className="space-y-4">
                    {['Our Roasting Process', 'Shipping FAQ', 'Wholesale Inquiry', 'Gift Cards'].map(item => (
                      <li key={item}>
                        <button className="text-xl font-semibold text-[#2C1E1A] hover:text-[#8C5A3C] transition-colors">
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;