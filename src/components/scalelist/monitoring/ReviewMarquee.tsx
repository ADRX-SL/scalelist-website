import React from 'react';
import { Star } from 'lucide-react';
import { SCROLLING_REVIEWS } from "@/components/scalelist/monitoring/constants";

// --- Review Card Component ---
const ReviewCard: React.FC<{ review: typeof SCROLLING_REVIEWS[0] }> = ({ review }) => (
  <div className="w-80 md:w-96 bg-white p-5 rounded-xl shadow-md border border-blue-100 flex-shrink-0 flex flex-col gap-3">
    <div className="flex justify-between items-start">
      <div className="flex gap-1">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-xs text-gray-400">Verified User</span>
    </div>
    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">"{review.text}"</p>
    <div className="mt-auto pt-2 border-t border-gray-50 flex items-center gap-2">
       <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600">
          {review.name.charAt(0)}
       </div>
       <span className="font-bold text-gray-900 text-xs">{review.name}</span>
    </div>
  </div>
);

export const ReviewMarquee = () => {
  return (
    <section className="bg-[#2563eb] py-10 relative overflow-hidden flex items-center">
       
       {/* Marquee Track */}
       <div className="flex animate-scroll w-max hover:pause">
          {/* Duplicate list 3 times for smooth infinite scroll */}
          {[1, 2, 3].map((iter) => (
            <div key={iter} className="flex gap-6 px-3">
               {SCROLLING_REVIEWS.map((item, i) => (
                   <ReviewCard key={`rev-${iter}-${i}`} review={item} />
               ))}
            </div>
          ))}
       </div>

       {/* Right Side Overlay & Chrome Badge */}
       <div className="absolute right-0 top-0 bottom-0 w-[320px] bg-gradient-to-l from-[#2563eb] via-[#2563eb] to-transparent z-20 flex items-center justify-end pr-4 md:pr-8 pointer-events-none">
          <div className="bg-white rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-100 flex items-center gap-4 pointer-events-auto transform scale-90 md:scale-100 origin-right">
              {/* Chrome Icon SVG */}
              <div className="w-12 h-12 flex-shrink-0 relative">
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="white"/>
                    <mask id="chromeMask" maskUnits="userSpaceOnUse" x="2" y="2" width="96" height="96">
                        <circle cx="50" cy="50" r="48" fill="white"/>
                    </mask>
                    <g mask="url(#chromeMask)">
                        <path d="M50 50L98 50C98 23.49 76.51 2 50 2C39.6 2 29.99 5.32 22 10.98L36 35.24C39.47 29.24 45.9 25.2 53.2 25.2C55.5 25.2 57.7 25.6 59.8 26.4L50 50Z" fill="#EA4335"/>
                        <path d="M50 50L22 10.98C9.92 19.56 2 33.92 2 50C2 74.38 20.16 94.46 43.72 97.6L57.72 73.36C51.72 73.36 46.46 70.62 43 66.38L50 50Z" fill="#34A853"/>
                        <path d="M50 50L43.72 97.6C70.2 94.12 92.32 74.92 97.16 50L72.16 50C72.16 62.14 62.28 72 50 72C47.1 72 44.34 71.32 41.82 70.1L50 50Z" fill="#FCC934"/>
                        <path d="M50 50L72.16 50C71.56 37.86 61.68 28 49.54 28L36 35.24L50 50Z" fill="#1A73E8"/>
                    </g>
                    <circle cx="50" cy="50" r="18" fill="white"/>
                    <circle cx="50" cy="50" r="14" fill="#1A73E8"/>
                 </svg>
              </div>
              <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Available in the</div>
                 <div className="font-extrabold text-gray-900 text-base leading-tight">Chrome Web Store</div>
                 <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex text-yellow-400">
                       {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" className="text-yellow-400" />)}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500">4.8/5 Rating</span>
                 </div>
              </div>
          </div>
       </div>
    </section>
  )
}