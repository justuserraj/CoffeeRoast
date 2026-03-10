"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
          alt="Coffee background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#E7CFC2] hero-wave" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#E7CFC2] text-lg md:text-xl font-medium tracking-[0.2em] mb-4 block">
              FRESHLY ROASTED
            </span>
            <h1 className="text-5xl md:text-[56px] font-bold text-white leading-tight mb-8">
              EXPERIENCE THE ART OF <br />
              <span className="text-[#E7CFC2]">PERFECT BREWING</span>
            </h1>
            <p className="text-[#E5E5E5] text-lg mb-10 max-w-lg">
              Discover our curated selection of premium beans sourced from the world's finest coffee estates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('shop')}
                className="bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] px-8 py-6 text-lg transition-transform hover:scale-105"
              >
                Shop Now
              </Button>
              <Button 
                onClick={() => scrollToSection('shop')}
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-[24px] px-8 py-6 text-lg transition-transform hover:scale-105"
              >
                View Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;