"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const TermsOfService = () => {
  return (
    <PageLayout title="Terms of Service" subtitle="Last updated: October 2023">
      <div className="space-y-8 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">By accessing and using CoffeeRoast's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
          <p className="leading-relaxed">You must be at least 18 years old to use our services. You are responsible for maintaining the confidentiality of your account and password.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
          <p className="leading-relaxed">We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content are error-free.</p>
        </section>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;