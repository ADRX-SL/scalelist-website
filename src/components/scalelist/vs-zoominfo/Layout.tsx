
import React from 'react';
import { COLORS } from "@/components/scalelist/vs-zoominfo/constants";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#3477E4] flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-extrabold tracking-tight text-[#121212]">SCALELIST</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium text-gray-600 hover:text-[#3477E4] transition-colors">Features</a>
        <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-[#3477E4] transition-colors">Pricing</a>
        <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[#3477E4] transition-colors">FAQ</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="px-6 py-2.5 rounded-full bg-[#3477E4] text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-200">
          Start Free Trial
        </button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-[#121212] text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#3477E4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight">SCALELIST</span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Scalelist helps modern revenue teams keep their CRM clean and their outreach targeted. Stop settling for decaying data.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Real-Time Verification</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Prospect Monitoring</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Job Change Alerts</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Competitor Reviews</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Scalelist. All rights reserved. Built for B2B efficiency.
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
