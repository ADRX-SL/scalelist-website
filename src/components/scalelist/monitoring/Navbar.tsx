import React from 'react';
import { Button } from "@/components/scalelist/monitoring/Button";
import { Activity } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-[#2563eb]">
             {/* Abstract Logo Mark */}
             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1"/>
                <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <span className="font-bold text-xl text-gray-900">Scalelist</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#2563eb] transition-colors">Product</a>
          <a href="#" className="hover:text-[#2563eb] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#2563eb] transition-colors">Resources</a>
          <a href="#" className="hover:text-[#2563eb] transition-colors">Blog</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Login</a>
          <Button size="sm">Get started for free</Button>
        </div>
        
        {/* Mobile Menu Button (Simplified) */}
        <button className="md:hidden text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
      </div>
    </nav>
  );
};