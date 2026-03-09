"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <PageLayout title="Contact Us" subtitle="We'd love to hear from you.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-[#8C5A3C] p-3 rounded-full text-white">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Email Us</h3>
              <p className="text-[#6B6B6B]">hello@coffeeroast.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#8C5A3C] p-3 rounded-full text-white">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Call Us</h3>
              <p className="text-[#6B6B6B]">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#8C5A3C] p-3 rounded-full text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">Visit Us</h3>
              <p className="text-[#6B6B6B]">123 Coffee Lane, Brew City, CA 90210</p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First Name" className="bg-white rounded-[12px]" />
            <Input placeholder="Last Name" className="bg-white rounded-[12px]" />
          </div>
          <Input placeholder="Email Address" className="bg-white rounded-[12px]" />
          <Textarea placeholder="Your Message" className="bg-white rounded-[12px] min-h-[150px]" />
          <Button className="w-full bg-[#2C1E1A] hover:bg-[#5B3A29] text-white rounded-[24px] py-6 font-bold">
            Send Message
          </Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default ContactUs;