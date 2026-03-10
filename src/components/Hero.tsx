"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
          alt="Coffee background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#E7CFC2] hero-wave" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#E7CFC2] text-lg md:text-xl font-bold tracking-[0.3em] mb-6 block uppercase">
              Premium Small-Batch Roasts
            </span>
            <h1 className="text-6xl md:text-[80px] font-bold text-white leading-[1.1] mb-8 tracking-tighter">
              START YOUR <br />
              <span className="text-[#8C5A3C]">COFFEE PLAN</span>
            </h1>
            <p className="text-[#E5E5E5] text-xl mb-12 max-w-xl leading-relaxed">
              Experience the world's finest beans delivered fresh to your door. Join 50,000+ coffee lovers today.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('pricing')}
                  className="bg-[#8C5A3C] hover:bg-[#5B3A29] text-white rounded-[32px] px-10 py-8 text-xl font-bold shadow-2xl flex items-center gap-3 transition-all"
                >
                  Subscribe to Premium Coffee
                  <ArrowRight size={24} />
                </Button>
              </motion.div>
              <Button 
                onClick={() => scrollToSection('shop')}
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-[32px] px-10 py-8 text-xl font-bold transition-all"
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