"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md z-[101] bg-[#E7CFC2] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-[#E5D6CF] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[#2C1E1A]" />
                <h2 className="text-xl font-bold">Your Cart (2)</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-[#F2DFD6] rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4 bg-[#F2DFD6] p-4 rounded-[20px]">
                  <div className="w-20 h-20 rounded-[16px] overflow-hidden flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=200" 
                      alt="Product" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-[#2C1E1A]">Ethiopian Yirgacheffe</h3>
                      <button className="text-[#6B6B6B] hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-[#6B6B6B] mb-3">Whole Bean • 250g</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-[#E5D6CF] rounded-full px-3 py-1 bg-white">
                        <button className="px-1 font-bold">-</button>
                        <span className="px-3 text-sm font-medium">1</span>
                        <button className="px-1 font-bold">+</button>
                      </div>
                      <span className="font-bold text-[#2C1E1A]">$24.00</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#F2DFD6] border-t border-[#E5D6CF] space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B6B6B]">Subtotal</span>
                <span className="font-bold">$48.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B6B6B]">Shipping</span>
                <span className="text-[#8C5A3C] font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2">
                <span>Total</span>
                <span>$48.00</span>
              </div>
              <Button className="w-full bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] py-6 text-lg font-bold mt-4">
                Checkout Now
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;