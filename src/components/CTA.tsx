"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-[#EAD3C6]">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#2C1E1A] rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#8C5A3C]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8C5A3C]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              READY TO BREW THE <br />
              <span className="text-[#8C5A3C]">PERFECT CUP?</span>
            </h2>
            <p className="text-[#E5E5E5] text-lg mb-10">
              Join 50,000+ coffee lovers and get 15% off your first order when you sign up for our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-[24px] px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8C5A3C] min-w-[300px]"
              />
              <Button className="bg-[#8C5A3C] hover:bg-[#5B3A29] text-white rounded-[24px] px-8 py-4 h-auto font-bold transition-transform hover:scale-105">
                Subscribe Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;