import React from 'react';
import { FOOTER_LINKS } from "@/components/scalelist/monitoring/constants";
import { Linkedin, Youtube, Twitter, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                 <div className="text-[#2563eb]">
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.1"/>
                        <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                 </div>
                 <span className="font-bold text-xl text-gray-900">Scalelist</span>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link}><a href="#" className="hover:text-[#2563eb]">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link}><a href="#" className="hover:text-[#2563eb]">{link}</a></li>
              ))}
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-gray-900 mb-4">Tools</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {FOOTER_LINKS.tools.map((link) => (
                <li key={link}><a href="#" className="hover:text-[#2563eb]">{link}</a></li>
              ))}
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-gray-900 mb-4">Alternatives</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {FOOTER_LINKS.alternatives.map((link) => (
                <li key={link}><a href="#" className="hover:text-[#2563eb]">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
             <p className="text-sm text-gray-500">© 2025 Scalelist</p>
             <p className="text-sm text-gray-500 flex items-center gap-2">
               <span className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center text-[10px]">✉</span> 
               hello@scalelist.com
             </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="text-sm font-medium text-gray-900">Social Media</div>
             <div className="flex gap-4">
                <a href="#" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"><Linkedin size={16}/></a>
                <a href="#" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"><Youtube size={16}/></a>
             </div>

             <div className="text-sm font-medium text-gray-900">Explore AI Summary</div>
             <div className="flex gap-3">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 bg-[#2563eb] text-white rounded flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};