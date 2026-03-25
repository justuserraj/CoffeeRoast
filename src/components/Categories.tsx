"use client";

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Whole Bean',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    count: '12 Products'
  },
  {
    title: 'Ground Coffee',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800',
    count: '8 Products'
  },
  {
    title: 'Coffee Pods',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    count: '15 Products'
  }
];

const Categories = () => {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-20 bg-[#E7CFC2]">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-[32px] font-semibold tracking-[0.02em]">
            TOP CATEGORIES
          </h2>
          <button onClick={scrollToShop} className="text-[#8C5A3C] font-medium hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={scrollToShop}
              className="group relative aspect-[4/3] overflow-hidden rounded-[22px] cursor-pointer shadow-sm"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-white/80">{category.count}</p>
                <span className="mt-4 inline-block text-sm font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  View More
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;