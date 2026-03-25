"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Privacy Policy" subtitle="Your privacy is our priority.">
      <div className="space-y-8 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="leading-relaxed">We collect information you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="leading-relaxed">We use the information we collect to process your orders, communicate with you about our products, and improve our services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="leading-relaxed">We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.</p>
        </section>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;