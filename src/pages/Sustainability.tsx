"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const Sustainability = () => {
  return (
    <PageLayout title="Sustainability" subtitle="Brewing a better future for our planet.">
      <div className="space-y-8 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-bold mb-4">Direct Trade</h2>
          <p className="leading-relaxed">We work directly with farmers to ensure they receive fair compensation, often well above fair-trade standards. This direct relationship allows us to support sustainable farming practices.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Eco-Friendly Packaging</h2>
          <p className="leading-relaxed">Our coffee bags are 100% compostable, and our shipping materials are made from recycled content. We are committed to reducing our environmental footprint.</p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Sustainability;