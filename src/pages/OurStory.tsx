"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const OurStory = () => {
  return (
    <PageLayout title="Our Story" subtitle="A decade of passion for the perfect brew.">
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-lg leading-relaxed">Founded in 2010, CoffeeRoast began with a simple mission: to bring the world's finest, most ethically sourced coffee to your doorstep. What started as a small garage operation has grown into a community of coffee lovers dedicated to the art of roasting.</p>
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" alt="Our Roastery" className="rounded-[24px] w-full h-64 object-cover" />
        <p className="leading-relaxed">We believe that every cup of coffee tells a story—from the high-altitude farms of Ethiopia to the meticulous roasting process in our California facility. Our commitment to quality and sustainability remains at the heart of everything we do.</p>
      </div>
    </PageLayout>
  );
};

export default OurStory;