import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/scalelist/monitoring/Button";

const VIDEOS = [
  {
    id: 'BJ08vDSmmYg', // How To Scrape Linkedin Sales Navigator
    title: 'Automate data quality monitoring for your CRM',
    description: 'Learn step-by-step how to enrich data and track job changes for thousands of leads automatically.',
  },
  {
    id: 'rW_o9FKxraw', // Best Email Finder Tool
    title: 'How to track job changes and enrich contact data',
    description: 'Step-by-step tutorial on real time data monitoring, identifying moves, and using prospect enrichment to follow leads.',
  }
];

export const VideoSection: React.FC = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Here's everything you need for real time data monitoring
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {VIDEOS.map((video) => (
            <div key={video.id} className="bg-white rounded-3xl overflow-hidden flex flex-col h-full shadow-xl">
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-gray-900 group cursor-pointer">
                 <img 
                   src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                   alt={video.title}
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                       <Play fill="currentColor" className="ml-1 w-8 h-8" />
                    </div>
                 </div>
                 <a 
                   href={`https://www.youtube.com/watch?v=${video.id}`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="absolute inset-0 z-10"
                   aria-label={`Watch ${video.title}`}
                 ></a>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col items-start">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-lg">
                  {video.description}
                </p>
                <a 
                   href={`https://www.youtube.com/watch?v=${video.id}`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="w-full sm:w-auto"
                >
                   <Button className="w-full sm:w-auto px-8">Watch now</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};