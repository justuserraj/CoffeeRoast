"use client";

import React from 'react';
import { motion } from 'framer-motion';

const OurStorySection = () => {
  return (
    <section className="py-24 bg-[#E7CFC2] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#8C5A3C] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-[#8C5A3C]/10 rounded-full">
              <span className="text-[#8C5A3C] font-bold tracking-widest uppercase text-xs">
                Since 2010
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              OUR <span className="text-[#8C5A3C]">STORY</span>
            </h2>
            <p className="text-[#1A1A1A] text-xl leading-relaxed font-medium">
              We source coffee beans from sustainable farms around the world to deliver rich flavors directly to your cup. Every batch is carefully roasted to create a premium coffee experience.
            </p>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              What started as a small passion project in a garage has grown into a global community of coffee enthusiasts. We believe that great coffee shouldn't just taste good—it should do good. That's why we work directly with farmers to ensure fair wages and sustainable practices.
            </p>
            <div className="pt-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#2C1E1A]">100%</p>
                  <p className="text-sm text-[#6B6B6B] uppercase tracking-widest font-bold">Ethically Sourced</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#2C1E1A]">50k+</p>
                  <p className="text-sm text-[#6B6B6B] uppercase tracking-widest font-bold">Happy Brewers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;