"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const Cookies = () => {
  return (
    <PageLayout title="Cookie Policy" subtitle="How we use cookies to improve your experience.">
      <div className="space-y-8 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-bold mb-4">What are Cookies?</h2>
          <p className="leading-relaxed">Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
          <p className="leading-relaxed">We use essential cookies for website functionality, analytical cookies to understand how you use our site, and marketing cookies for personalized advertising.</p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Cookies;