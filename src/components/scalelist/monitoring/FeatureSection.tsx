
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/scalelist/monitoring/Button";

interface FeatureSectionProps {
  title: string;
  description?: string;
  steps?: Array<{ title: string; description: string }>;
  benefits?: Array<{ title: string; description: string }>;
  bulletPoints?: string[];
  imageAlt: string;
  imageSrc?: string;
  reversed?: boolean;
  ctaText?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  visualContent?: React.ReactNode; 
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  steps,
  benefits,
  bulletPoints,
  imageAlt,
  imageSrc,
  reversed = false,
  ctaText,
  secondaryCtaText,
  secondaryCtaLink,
  visualContent
}) => {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-16 lg:gap-40 items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            
            {description && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            )}

            {steps && (
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                       <Check className="w-5 h-5 text-black font-bold" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 inline mr-2">{step.title} —</h4>
                      <span className="text-gray-600">{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {benefits && (
              <div className="space-y-4">
                 {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                       <Check className="w-5 h-5 text-black font-bold" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 inline mr-2">{benefit.title} —</h4>
                      <span className="text-gray-600">{benefit.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {bulletPoints && (
               <div className="space-y-4">
               {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                     <Check className="w-5 h-5 text-black font-bold" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium">{point}</span>
                  </div>
                </div>
              ))}
            </div>
            )}

            {(ctaText || secondaryCtaText) && (
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                {ctaText && (
                  <Button className="group">
                    {ctaText} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
                {secondaryCtaText && (
                  secondaryCtaLink ? (
                    <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        {secondaryCtaText}
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline">
                      {secondaryCtaText}
                    </Button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/2 relative">
            {visualContent ? (
              visualContent
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                 {/* Browser Window Decor */}
                 <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
