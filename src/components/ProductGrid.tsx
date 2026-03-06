"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    price: '$22.00',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=600',
    tag: 'New Arrival'
  },
  {
    id: 3,
    name: 'Sumatra Mandheling',
    price: '$26.00',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=600',
    tag: 'Limited'
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    price: '$23.00',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    tag: 'Popular'
  }
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 bg-[#EAD3C6]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[32px] font-semibold mb-4">OUR SIGNATURE BLENDS</h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Hand-picked and roasted in small batches to ensure the highest quality in every cup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#F2DFD6] p-5 rounded-[18px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              <button className="absolute top-8 right-8 z-10 bg-white p-2 rounded-[16px] shadow-sm hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
              
              <div className="aspect-square overflow-hidden rounded-[16px] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <span className="text-[12px] font-medium text-[#8C5A3C] uppercase tracking-wider">
                  {product.tag}
                </span>
                <h3 className="text-xl font-semibold text-[#2C1E1A]">{product.name}</h3>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-bold text-[#2C1E1A]">{product.price}</span>
                  <Button className="bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] h-10 w-10 p-0 transition-transform hover:scale-110">
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;