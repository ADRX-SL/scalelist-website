
import React from 'react';

interface Review {
  name: string;
  image: string;
  quote: string;
  highlight: string;
}

interface ReviewGridProps {
  reviews: Review[];
}

export const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {reviews.map((review, idx) => {
            // Split text to bold the highlight part correctly in context
            const parts = review.quote.split(review.highlight);
            
            return (
             <div key={idx} className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 border-t-4 border-[#3C72E6] flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-gray-100">
                   <img 
                     src={review.image} 
                     alt={review.name} 
                     className="w-full h-full object-cover"
                   />
                </div>
                <blockquote className="text-gray-600 text-lg leading-relaxed mb-6">
                  "{parts[0]}
                  {parts.length > 1 && <strong className="text-gray-900">{review.highlight}</strong>}
                  {parts[1]}"
                </blockquote>
                <div className="mt-auto">
                  <div className="font-bold text-gray-900 text-lg">{review.name}</div>
                </div>
             </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
