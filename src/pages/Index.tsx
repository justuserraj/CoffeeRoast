"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Process from '@/components/Process';
import ProductGrid from '@/components/ProductGrid';
import OriginStories from '@/components/OriginStories';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import BlogGrid from '@/components/BlogGrid';
import SocialProof from '@/components/SocialProof';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Process />
        <ProductGrid />
        <OriginStories />
        <Testimonials />
        <Pricing />
        <FAQ />
        <BlogGrid />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;