import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/scalelist/monitoring/Button";

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Lead Monitoring & <br className="hidden md:block" /> CRM Data Freshness
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Stop losing revenue to outdated data. Automatically <strong>track job changes</strong>, ensure <strong>data quality monitoring</strong>, and <strong>enrich data</strong> instantly when prospects move.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mb-20 relative z-10">
           <Button size="lg" className="group">
             Try Lead Monitoring for free
             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </Button>
        </div>

        {/* Social Proof */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            7000+ companies trust our data monitoring software
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70">
             {/* Simple Text Representations for logos */}
             <span className="text-2xl font-bold text-gray-400">ElevenLabs</span>
             <span className="text-2xl font-bold text-gray-400 tracking-widest">CLOUDERA</span>
             <span className="text-2xl font-bold text-gray-400">stripe</span>
             <span className="text-xl font-serif text-gray-400">J.P.Morgan</span>
             <span className="text-xl font-bold text-gray-400">ORACLE NetSuite</span>
          </div>
        </div>

      </div>
    </section>
  );
};