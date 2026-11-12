"use client";

import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/constants/nav-links';

export const TopBar = () => {
  return (
    <div className="hidden md:block bg-dental-light-blue text-white text-xs py-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Phone & Alternative WhatsApp */}
        <div className="flex items-center space-x-6">
          <a 
            href={`tel:${siteConfig.phone}`} 
            className="flex items-center space-x-2 hover:text-dental-yellow transition"
            title="Primary Landline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Tel: {siteConfig.phoneDisplay}</span>
          </a>
          <a 
            href={`tel:${siteConfig.altPhone}`} 
            className="flex items-center space-x-2 hover:text-dental-yellow transition"
            title="Alternative / Mobile Contact"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Alt: {siteConfig.altPhoneDisplay}</span>
          </a>
          <a 
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:inline-flex items-center space-x-1 hover:text-dental-yellow transition"
          >
            <span>WhatsApp: {siteConfig.whatsapp}</span>
          </a>
        </div>

        {/* Right: Hours & Location */}
        <div className="flex items-center space-x-4">
          <span className="text-white">Mon–Fri {siteConfig.hours.mondayFriday}</span>
          <span className="text-white">|</span>
          <span className="text-white">DHA Phase 5, Karachi</span>
        </div>
      </div>
    </div>
  );
};