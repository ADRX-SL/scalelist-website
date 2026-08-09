
import React from 'react';

import { HUNTER_REVIEW } from "@/components/scalelist/vs-hunter/constants";

const VsHunterBody: React.FC = () => {
  const content = HUNTER_REVIEW;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3477E4] animate-pulse"></span>
            <span className="text-xs font-bold text-[#3477E4] tracking-widest uppercase">{content.competitorName} REVIEW {content.year}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#121212] tracking-tight mb-8 leading-[1.1]">
            {content.headline}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {content.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-5 bg-[#3477E4] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-200 transition-all">
              Try Scalelist Free
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#121212] border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-gray-300 transition-all">
              Compare Features
            </button>
          </div>
        </div>
      </section>

      {/* Summary Box */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div className="max-w-3xl relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[#3477E4]">●</span> Quick Summary Verdict
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed italic">
              "{content.summaryVerdict}"
            </p>
          </div>
        </div>
      </section>

      {/* What is Hunter + Screenshot 1 */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">What is {content.competitorName}?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {content.whatIsText}
              </p>
              <ul className="space-y-4 mb-8">
                {content.useCases.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-[#3477E4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2">
                <img 
                  src={content.landingScreenshot} 
                  alt={`${content.competitorName} Platform interface`} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-400 italic">Exploring the {content.competitorName} domain search interface.</p>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.features.items.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-4 text-[#121212]">{item.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.description}</p>
                {item.verdict && (
                  <div className="text-xs font-bold text-red-500 uppercase tracking-widest">{item.verdict}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Feedback Screenshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tight mb-8">The "Search vs. Verify" Trap</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-3 overflow-hidden">
                <img 
                  src={content.reviewScreenshot} 
                  alt={`${content.competitorName} User Feedback`} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[#3477E4] font-medium italic">
                  "If you search for a lead and then verify them, you are burning credits fast. Modern tools shouldn't double-dip for data validity."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tight mb-8">Accuracy & Scaling</h2>
              <div className="space-y-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 group hover:border-[#3477E4] transition-colors">
                  <div className="text-gray-500 text-xs font-bold uppercase mb-1">Mobile Coverage</div>
                  <div className="text-2xl font-bold text-[#121212]">{content.accuracyData.mobile}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 group hover:border-[#3477E4] transition-colors">
                  <div className="text-gray-500 text-xs font-bold uppercase mb-1">Email Method</div>
                  <div className="text-2xl font-bold text-[#121212]">Pattern Guessing / Scraping</div>
                </div>
              </div>
              <div className="bg-[#121212] text-white p-8 rounded-2xl border border-gray-800 shadow-2xl">
                <div className="text-sm font-bold text-[#3477E4] uppercase mb-2">Hunter.io Tiers</div>
                <div className="text-4xl font-extrabold mb-4">{content.pricing.minimum}</div>
                <p className="text-gray-400 mb-6">{content.pricing.contract}</p>
                <div className="grid grid-cols-2 gap-4">
                  {content.pricing.hiddenCosts.map((cost, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-red-500">⚠</span> {cost}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Scalelist vs. {content.competitorName}</h2>
            <p className="text-lg text-gray-600">The difference between a static scrape and active hygiene.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#121212] text-white">
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-widest">Comparison</th>
                  <th className="py-6 px-8 text-lg font-bold">{content.competitorName}</th>
                  <th className="py-6 px-8 text-lg font-bold text-[#3477E4]">Scalelist</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-8 font-semibold text-gray-700">LinkedIn Integration</td>
                  <td className="py-6 px-8 text-gray-500">No (Removed)</td>
                  <td className="py-6 px-8 font-bold text-[#3477E4]">Native Chrome Extension</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-8 font-semibold text-gray-700">Mobile Numbers</td>
                  <td className="py-6 px-8 text-gray-500">Email Only</td>
                  <td className="py-6 px-8 font-bold text-[#3477E4]">Yes (Verified Global Coverage)</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-6 px-8 font-semibold text-gray-700">Data Hygiene</td>
                  <td className="py-6 px-8 text-gray-500">Static Scrape</td>
                  <td className="py-6 px-8 font-bold text-[#3477E4]">Weekly Automated Monitoring</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-6 px-8 font-semibold text-gray-700">Verification Accuracy</td>
                  <td className="py-6 px-8 text-gray-500">Variable (Scores)</td>
                  <td className="py-6 px-8 font-bold text-[#3477E4]">98% (Strict Real-Time)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros & Cons Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50/50 p-10 rounded-3xl border border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-8 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                The Pros
              </h3>
              <ul className="space-y-5">
                {content.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-green-900/80">
                    <span className="font-bold text-green-500">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/50 p-10 rounded-3xl border border-red-100">
              <h3 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                The Cons
              </h3>
              <ul className="space-y-5">
                {content.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-red-900/80">
                    <span className="font-bold text-red-500">✕</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {content.faq.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-bold text-[#121212]">{item.question}</h3>
                  <span className="shrink-0 ml-4 transition duration-300 group-open:-rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action - Focused on Contact Finder */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#121212] rounded-[3rem] py-24 px-8 relative overflow-hidden shadow-2xl border border-gray-800">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(52,119,228,0.2),transparent_60%)]"></div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 relative z-10 leading-tight">
              Get the direct contacts <br/> you've been missing. <br/>
              <span className="text-[#3477E4]">Switch to Scalelist today.</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
              Stop settling for scraped guesses. Scalelist provides verified emails and direct mobile numbers that help you scale your outreach without hitting spam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button className="px-14 py-6 bg-[#3477E4] text-white rounded-2xl font-extrabold text-xl hover:scale-105 transition-all shadow-xl shadow-blue-600/30 active:scale-95">
                Start My Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default VsHunterBody;
