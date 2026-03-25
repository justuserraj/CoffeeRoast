"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';
import FAQ from '@/components/FAQ';

const FAQPage = () => {
  return (
    <PageLayout title="Frequently Asked Questions" subtitle="Find answers to common questions about our coffee and services.">
      <FAQ />
    </PageLayout>
  );
};

export default FAQPage;