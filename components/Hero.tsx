import React from 'react';
import { ASSETS, DOWNLOAD_LINK } from '../constants';
import { ChevronRightIcon } from './Icons';
import AppMockup from './AppMockup';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-khushoo-primary/10 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-khushoo-secondary/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-khushoo-primary"></span>
              <span className="text-sm font-medium text-gray-300">New: Auto-Blocking Mode</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Reclaim your <br />
              <span className="inline-block mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-khushoo-primary to-khushoo-secondary text-black">
                Khushoo
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience distraction-free Salah. Automatically block notifications and apps during prayer times to maintain focus where it matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={DOWNLOAD_LINK} 
                className="transition-transform hover:scale-105"
                aria-label="Download on the App Store"
              >
                <img 
                  src={ASSETS.appStoreBadge} 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>
              <a 
                href="#features" 
                className="flex items-center gap-2 text-white font-medium hover:text-khushoo-primary transition-colors px-6 py-3"
              >
                Explore Features <ChevronRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex-1 relative w-full max-w-[320px] lg:max-w-[360px]">
            {/* Phone Frame */}
            <div className="relative z-10 bg-black rounded-[3rem] p-3 shadow-2xl border-[6px] border-[#1a1a1a] ring-1 ring-white/10">
               {/* Screen Container */}
               <div className="relative rounded-[2.2rem] overflow-hidden bg-[#0B0F19] aspect-[9/19.5] border border-white/5">
                 {/* Live React Component Mockup instead of Image */}
                 <AppMockup />
               </div>
            </div>
            
            {/* Decorative blobs behind phone */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-khushoo-primary to-khushoo-secondary rounded-[3.5rem] blur-xl opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;