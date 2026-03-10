"use client";

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MadeWithVizoxStudio } from './made-with-dyad';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E7CFC2]">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-[#6B6B6B] text-lg">{subtitle}</p>}
          </div>
          <div className="bg-[#F2DFD6] p-8 md:p-12 rounded-[32px] shadow-sm prose prose-stone max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <MadeWithVizoxStudio />
    </div>
  );
};

export default PageLayout;