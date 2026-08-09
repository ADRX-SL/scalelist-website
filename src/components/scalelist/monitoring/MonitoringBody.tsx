
import React from 'react';

import { Hero } from "@/components/scalelist/monitoring/Hero";
import { ReviewMarquee } from "@/components/scalelist/monitoring/ReviewMarquee";
import { FeatureSection } from "@/components/scalelist/monitoring/FeatureSection";
import { Testimonials } from "@/components/scalelist/monitoring/Testimonials";
import { FAQ } from "@/components/scalelist/monitoring/FAQ";

import { VideoSection } from "@/components/scalelist/monitoring/VideoSection";
import { ReviewGrid } from "@/components/scalelist/monitoring/ReviewGrid";
import { Check, ShieldCheck, Briefcase, Mail, Download, MoreHorizontal, Search, ArrowRight, Zap, RefreshCw, Users, Target, BarChart3, Rocket } from 'lucide-react';

// --- Mock UI Components for Feature Visuals (Updated for Lead Monitoring) ---

const Feature1Visual = () => (
  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
    {/* Dashboard Header */}
    <div className="border-b border-gray-100 bg-gray-50/50 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          <RefreshCw size={16} />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Project</div>
          <div className="text-sm font-bold text-gray-900">Lead Monitoring 2025</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-600 shadow-sm">
          <Download size={12} /> Export CSV
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-[#2563eb] text-white rounded-md text-xs font-medium shadow-sm">
          <Zap size={12} /> Update Leads
        </div>
      </div>
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
      <div className="col-span-3">Name</div>
      <div className="col-span-3">Previous Co</div>
      <div className="col-span-4">New Company</div>
      <div className="col-span-2">Status</div>
    </div>

    {/* Table Rows */}
    <div className="divide-y divide-gray-50">
      {[
        { name: "Alex Jara", role: "CEO", prev: "Deal Engine", new: "Acme Corp", status: "Out-dated", isOutdated: true },
        { name: "Sarah Chen", role: "VP Sales", prev: "TechFlow", new: "Global Systems", status: "Out-dated", isOutdated: true },
        { name: "Mike Ross", role: "Founder", prev: "Spectra", new: "Retired", status: "Out-dated", isOutdated: true },
        { name: "Elena K.", role: "Head of Growth", prev: "Lumina", new: "Lumina", status: "Up-to-date", isOutdated: false },
      ].map((lead, i) => (
        <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-blue-50/30 transition-colors group cursor-default">
          <div className="col-span-3">
            <div className="text-xs font-bold text-gray-900">{lead.name}</div>
            <div className="text-[10px] text-gray-500">{lead.role}</div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-1.5">
              <div className={`text-xs text-gray-500 truncate ${lead.isOutdated ? 'line-through' : ''}`}>{lead.prev}</div>
            </div>
          </div>
          <div className="col-span-4">
             <div className={`flex items-center gap-1.5 ${lead.isOutdated ? 'bg-green-50 border-green-100 text-green-700' : 'bg-gray-50 border-gray-100 text-gray-600'} border px-2 py-1 rounded w-fit`}>
                <Briefcase size={10} className={lead.isOutdated ? "fill-green-200 text-green-600" : "text-gray-400"} />
                <span className="text-[10px] font-bold">{lead.new}</span>
             </div>
          </div>
          <div className="col-span-2">
             <div className={`text-[10px] font-bold flex items-center gap-1 ${lead.isOutdated ? 'text-orange-500' : 'text-green-600'}`}>
               {lead.isOutdated ? <Zap size={10} /> : <Check size={10} />} {lead.status}
             </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
      <div className="text-xs text-gray-500">Monitoring 1,284 leads for job changes</div>
    </div>
  </div>
);

const Feature2Visual = () => (
  <div className="relative">
    {/* Browser Frame */}
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden relative z-10">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
         <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
         </div>
         <div className="flex-1 bg-white h-6 rounded border border-gray-200 mx-4 text-[10px] flex items-center px-2 text-gray-400">
            linkedin.com/in/sarah-johnson-marketing
         </div>
      </div>
      
      <div className="relative bg-gray-50 h-64 w-full p-6 flex">
         {/* Mock Profile Content */}
         <div className="flex-1 space-y-6 opacity-50 pointer-events-none blur-[1px]">
            <div className="flex items-start gap-4">
               <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
               <div className="space-y-2 flex-1">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
               </div>
            </div>
            <div className="h-32 bg-white rounded border border-gray-200"></div>
         </div>

         {/* The "Extension" Overlay */}
         <div className="absolute top-4 right-4 bottom-4 w-64 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col">
            <div className="p-4 border-b border-gray-50">
               <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-[#2563eb] rounded flex items-center justify-center text-white text-xs font-bold">S</div>
                  <span className="font-bold text-gray-900 text-sm">Scalelist</span>
               </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center items-center text-center space-y-3">
               <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-1">
                  <Zap size={24} strokeWidth={3} />
               </div>
               <div className="font-bold text-gray-900">Job Change Detected</div>
               <div className="w-full bg-gray-50 border border-gray-100 rounded p-2 text-left">
                  <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">New Position</div>
                  <div className="text-xs font-medium text-gray-700 truncate">VP Marketing at TechFlow</div>
               </div>
               <button className="w-full py-1.5 bg-[#2563eb] text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors">
                  Enrich Contact
               </button>
            </div>
         </div>
      </div>
    </div>
    
    {/* Decor */}
    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
  </div>
);

const Feature4Visual = () => (
    <div className="grid grid-cols-1 gap-6 p-4">
        {[
            { icon: Users, title: "Sales Teams", desc: "Identify warm leads who changed jobs and already know your product." },
            { icon: Target, title: "RevOps", desc: "Maintain CRM data freshness automatically without manual data entry." },
            { icon: BarChart3, title: "Marketing", desc: "Run targeted campaigns based on prospect job changes." }
        ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
            </div>
        ))}
    </div>
);

const Feature5Visual = () => (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#2563eb]"></div>
        <div className="space-y-8 relative z-10">
            {[
                { step: "01", title: "Upload your list", desc: "Import a CSV or connect HubSpot/Salesforce." },
                { step: "02", title: "Map columns", desc: "Map your prospect data" },
                { step: "03", title: "Get Alerts", desc: "Receive weekly notifications when leads change jobs." }
            ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl font-black text-gray-200">{item.step}</div>
                    <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
         <div className="mt-8 pt-8 border-t border-gray-100">
             <button className="w-full py-3 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                 <Rocket size={18} /> Launch Monitoring
             </button>
         </div>
    </div>
);

// --- Data for Review Sections (PRESERVED EXACTLY AS REQUESTED) ---
const REVIEWS_TIRAN_TIM = [
  {
    name: "Tiran Jackson",
    role: "",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80", 
    quote: "This is one of the most powerful and valuable tools you can have if you're looking to grow your business as an entrepreneur. For the cost, it is the best value for finding information and attracting leads by far. I recommend this tool for anyone who really wants explosive growth in their business!",
    highlight: "explosive growth in their business!"
  },
  {
    name: "Tim Masek",
    role: "", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80", 
    quote: "Gamechanger for my workflow. Couldn't live without it.",
    highlight: "Couldn't live without it."
  }
];

const REVIEWS_BYRON_ANDRE = [
  {
    name: "Byron Trzeciak",
    role: "",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80", 
    quote: "I rely on this service for email validation accuracy. It's cost-effective, and the exceptional customer service from Arnaud and Youssef makes it even better. They're proactive about helping users succeed.",
    highlight: "exceptional customer service"
  },
  {
    name: "ANDRE MUNRO",
    role: "",
    image: "https://images.unsplash.com/photo-1545167622-3a6ac156a1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80", 
    quote: "Excellent tool: it is fast, easy to use, and has a good email identification match rate. Highly recommended!",
    highlight: "Highly recommended!"
  }
];

const REVIEWS_RAGLAND_JAMES = [
    {
      name: "Ragland Samuvel",
      role: "",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "Exceptional Customer service and they do cater for your needs. Very useful for bootstrapped startups.",
      highlight: "Exceptional Customer service"
    },
    {
      name: "James Donaldson",
      role: "",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "This is by far the easiest and cleanest UX of any solution I've used to export leads and enrich data. Simple and fast to use. Perfect for small to medium teams who want to start quickly. Verification is prioritised over volume, so also strong for protecting data, domains etc.",
      highlight: "easiest and cleanest UX"
    }
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      <Hero />

      <ReviewMarquee />
      
      {/* Feature 1: Text Left, Image Right */}
      <FeatureSection 
        title="Automated Job Change Tracking"
        description="Don't let warm leads go cold. Our real time data monitoring alerts you the moment a key prospect changes jobs, allowing you to follow them to their new company and open new opportunities."
        imageAlt="Job Change Tracking Interface"
        visualContent={<Feature1Visual />}
        ctaText="Try for free (14-days)"
        secondaryCtaText="Talk to Sales"
        secondaryCtaLink="https://calendly.com/arnaud-scalelist/learn-about-monitoring"
      />
      
      {/* Review Section 1 */}
      <ReviewGrid reviews={REVIEWS_TIRAN_TIM} />

      {/* Feature 2: Image Left, Text Right */}
      <FeatureSection 
        reversed
        title="Data Monitoring"
        description="Data decay kills revenue. Here is how our process works to enrich data automatically:"
        steps={[
          { title: "Connect Your CRM", description: "Sync with Salesforce or HubSpot to start monitoring data instantly." },
          { title: "Detect Changes", description: "We track job changes and identify outdated leads every Monday." },
          { title: "Auto-Enrich", description: "Apply contact data enrichment immediately when a move is detected." }
        ]}
        ctaText="Start Monitoring Leads"
        secondaryCtaText="Talk to Sales"
        secondaryCtaLink="https://calendly.com/arnaud-scalelist/learn-about-monitoring"
        imageAlt="Data Monitoring Dashboard"
        visualContent={<Feature2Visual />}
      />

      {/* Review Section 2 */}
      <ReviewGrid reviews={REVIEWS_BYRON_ANDRE} />

      {/* Feature 4: Visual Left, Text Right */}
      <FeatureSection 
        reversed
        title="Who Needs Data Monitoring?"
        description="Our tool is built for high-growth teams that need to maintain data quality monitoring at scale."
        benefits={[
            { title: "Sales Teams", description: "Stop wasting time on outdated leads and focus on active prospects." },
            { title: "RevOps", description: "Automate CRM hygiene and keep data fresh without manual work." },
            { title: "Marketing", description: "Segment campaigns effectively based on job changes and new roles." }
        ]}
        imageAlt="Teams Using Data Monitoring"
        visualContent={<Feature4Visual />}
        ctaText="Start Monitoring"
        secondaryCtaText="Talk to Sales"
      />

      {/* Review Section 3 - RESTORED */}
      <ReviewGrid reviews={REVIEWS_RAGLAND_JAMES} />

      {/* Feature 5: Text Left, Visual Right */}
      <FeatureSection 
        title="Start Monitoring in Minutes"
        description="You are minutes away from automated job change tracking. No complex integrations required."
        bulletPoints={[
            "Upload your CSV or Connect CRM",
            "Map your prospect data",
            "Receive weekly alerts on job changes"
        ]}
        imageAlt="Setup Process"
        visualContent={<Feature5Visual />}
        ctaText="Start for Free"
      />

      <VideoSection />

      <Testimonials />
      
      <FAQ />
    </div>
  );
}

export default MonitoringBody;
