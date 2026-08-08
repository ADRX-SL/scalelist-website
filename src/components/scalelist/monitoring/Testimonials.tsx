import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from "@/components/scalelist/monitoring/constants";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
           <div className="flex justify-center items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See why they love it</h2>
           </div>
           <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-gray-900">4.9 / 5</span>
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-gray-800 text-gray-800" />
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
              <p className="text-gray-700 leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};