"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductQuickViewProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-[#F2DFD6] w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="md:w-1/2 aspect-square md:aspect-auto">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#8C5A3C]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm text-[#6B6B6B]">(48 Reviews)</span>
              </div>

              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-[#8C5A3C] font-bold text-2xl mb-6">{product.price}</p>
              
              <p className="text-[#6B6B6B] mb-8 leading-relaxed">
                A complex and vibrant roast with notes of jasmine, bergamot, and a silky honey sweetness. Perfect for pour-over or espresso.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#E5D6CF] rounded-[24px] px-4 py-2 bg-white">
                    <button className="px-2 font-bold">-</button>
                    <span className="px-4 font-medium">1</span>
                    <button className="px-2 font-bold">+</button>
                  </div>
                  <Button className="flex-grow bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] py-6 h-auto font-bold">
                    Add to Cart
                  </Button>
                </div>
                
                <button className="flex items-center gap-2 text-sm font-medium text-[#2C1E1A] hover:text-[#8C5A3C] transition-colors">
                  <Heart size={18} />
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-[#E5D6CF] grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8C5A3C] font-bold mb-1">Roast Level</p>
                  <p className="font-medium">Medium-Light</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8C5A3C] font-bold mb-1">Origin</p>
                  <p className="font-medium">Sidamo Region</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductQuickView;