import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from "@/components/scalelist/monitoring/constants";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
             Can't find the answer you're looking for? Reach out to our customer support team.
          </p>
        </div>

        <div className="lg:w-2/3 divide-y divide-gray-100">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-400">
                  {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              
              <div 
                className={`mt-2 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="py-2 text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};