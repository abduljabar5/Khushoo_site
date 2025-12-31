import React from 'react';
import { 
  UserIcon, 
  MapPinIcon, 
  PlayIcon, 
  ShareIcon, 
  HeartIcon, 
  HomeIcon, 
  ClockIcon, 
  HandIcon, 
  ShieldIcon,
  CrownIcon
} from './Icons';

const AppMockup: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0B0F19] text-white overflow-hidden flex flex-col font-sans select-none relative">
      
      {/* --- Dynamic Island --- */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[20px] z-50 flex items-center justify-end pr-3 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ml-2"></div>
      </div>

      {/* --- Header --- */}
      <div className="pt-16 px-6 pb-6 flex justify-between items-start">
        <div>
          <h2 className="text-khushoo-accent text-lg font-medium mb-1" style={{fontFamily: 'system-ui'}}>السلام عليكم</h2>
          <p className="text-gray-400 text-sm">Good evening, Mohamed Abdi</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <UserIcon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* --- Scrollable Content Area --- */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 space-y-8">
        
        {/* Next Prayer Card */}
        <div className="bg-[#111827] rounded-[2rem] p-6 relative shadow-xl border border-white/5">
          <div className="flex justify-between items-start mb-6">
            <span className="text-white font-medium">Next Prayer</span>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <MapPinIcon className="w-3 h-3" />
              <span>Brooklyn Center, MN</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-lg text-gray-300">Fajr</span>
              <span className="text-lg text-gray-500 font-arabic">- الفجر</span>
            </div>
            <div className="text-5xl font-bold text-white tracking-tight mb-2">
              6:23 AM
            </div>
            <div className="text-gray-400 text-sm font-medium">
              in 10:09:04
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
            <span>Isha</span>
            <div className="h-1.5 flex-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-white rounded-full"></div>
            </div>
            <span>of the day</span>
          </div>
        </div>

        {/* Featured Section */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-white">Featured</h2>
          </div>

          {/* Featured Card */}
          <div className="bg-[#111827] rounded-[2rem] p-5 border border-white/5 relative group">
            <div className="flex justify-between items-start mb-6">
               <div className="bg-[#1F2937] px-3 py-1 rounded-full flex items-center gap-1 border border-white/5">
                  <CrownIcon className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs font-bold text-gray-300">#1</span>
               </div>
               <div className="flex gap-3">
                  <button className="text-gray-400 hover:text-white"><ShareIcon className="w-5 h-5" /></button>
                  <button className="text-gray-400 hover:text-white"><HeartIcon className="w-5 h-5" /></button>
               </div>
            </div>

            <div className="flex flex-col items-center mb-6">
               <div className="w-20 h-20 rounded-full bg-[#1F2937] flex items-center justify-center mb-4 border-2 border-white/5">
                  <UserIcon className="w-10 h-10 text-gray-600" />
               </div>
               <h3 className="text-lg font-bold text-white mb-1">Idrees Abkr</h3>
               <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <UserIcon className="w-3 h-3" /> 5.8M
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[10px]">♪</span> 114
                  </span>
               </div>
            </div>

            <div className="absolute bottom-5 right-5">
              <button className="w-12 h-12 bg-cyan-400 hover:bg-cyan-300 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/20 transition-colors">
                <PlayIcon className="w-5 h-5 text-black ml-1" filled />
              </button>
            </div>
          </div>
          
          {/* Partial Cards Row for effect */}
          <div className="flex gap-4 mt-4 overflow-hidden opacity-50">
             <div className="w-1/2 h-32 bg-[#111827] rounded-[2rem] border border-white/5 p-4">
                <div className="bg-[#1F2937] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">#2</div>
             </div>
             <div className="w-1/2 h-32 bg-[#111827] rounded-[2rem] border border-white/5 p-4">
                <div className="bg-[#1F2937] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">#3</div>
             </div>
          </div>
        </div>
      </div>

      {/* --- Tab Bar --- */}
      <div className="bg-white/5 backdrop-blur-xl border-t border-white/5 px-6 pt-4 pb-8 flex justify-between items-center relative z-20">
        <div className="flex flex-col items-center gap-1 text-cyan-400">
          <div className="bg-cyan-400/20 p-1.5 rounded-xl">
            <HomeIcon className="w-5 h-5" filled />
          </div>
          <span className="text-[10px] font-medium">Home</span>
        </div>
        
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <ClockIcon className="w-6 h-6" />
          <span className="text-[10px] font-medium">Prayer</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-gray-500">
          <HandIcon className="w-6 h-6" />
          <span className="text-[10px] font-medium">Dhikr</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-gray-500">
          <ShieldIcon className="w-6 h-6" />
          <span className="text-[10px] font-medium">Focus</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-gray-500">
          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
             <UserIcon className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </div>

    </div>
  );
};

export default AppMockup;