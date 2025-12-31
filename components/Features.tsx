import React from 'react';
import { LockIcon, ClockIcon, ShieldIcon } from './Icons';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-khushoo-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Focus on your Creator, not your phone</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Khushoo utilizes advanced iOS Screen Time APIs to ensure your prayer times remain sacred and uninterrupted.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1: The Core Blocking - Emphasized */}
                <div className="bg-gradient-to-br from-khushoo-primary/10 to-transparent border border-khushoo-primary/20 p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <LockIcon className="w-24 h-24 text-khushoo-primary" />
                    </div>
                    <div className="w-12 h-12 bg-khushoo-primary text-black rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-khushoo-primary/20">
                        <LockIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Strict App Blocking</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Eliminate distractions at the source. Khushoo automatically locks your selected apps (like Instagram, TikTok, or News) exactly when prayer time starts, and only unlocks them when you are done.
                    </p>
                </div>

                {/* Feature 2: Prayer Times */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                        <ClockIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Accurate Prayer Times</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Precise calculation for Fajr, Dhuhr, Asr, Maghrib, and Isha based on your location. View the remaining time for the next prayer at a glance.
                    </p>
                </div>

                {/* Feature 3: Privacy First */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-khushoo-secondary/20 text-khushoo-secondary rounded-2xl flex items-center justify-center mb-6">
                        <ShieldIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Privacy Centric</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Your data stays on your device. We use Apple's Family Controls API locally to manage restrictions without sending usage data to any server.
                    </p>
                </div>
            </div>

            {/* Feature Deep Dive */}
            <div className="mt-24 bg-gradient-to-b from-khushoo-card to-black rounded-[2rem] border border-white/10 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="p-10 md:p-16 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-khushoo-primary/10 border border-khushoo-primary/20 mb-6">
                            <span className="text-xs font-bold text-khushoo-primary tracking-wider uppercase">How it works</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Zero-Distraction Salah</h3>
                        <p className="text-gray-400 mb-8 text-lg">
                            We don't just silence notifications; we remove the temptation entirely.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-khushoo-primary/20 text-khushoo-primary flex items-center justify-center flex-shrink-0 border border-khushoo-primary/30">
                                    <span className="font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Select Distractions</h4>
                                    <p className="text-gray-400 text-sm">Choose the apps that steal your focus (e.g., Social Media, Games).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-khushoo-primary/20 text-khushoo-primary flex items-center justify-center flex-shrink-0 border border-khushoo-primary/30">
                                    <span className="font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Auto-Engage</h4>
                                    <p className="text-gray-400 text-sm">5 minutes before Athan, Strict Mode activates automatically.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-khushoo-primary/20 text-khushoo-primary flex items-center justify-center flex-shrink-0 border border-khushoo-primary/30">
                                    <span className="font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Guaranteed Khushoo</h4>
                                    <p className="text-gray-400 text-sm">Apps are greyed out and unopenable until your prayer is complete.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full min-h-[400px] bg-gray-900/50 flex items-center justify-center p-8 relative overflow-hidden">
                         {/* Abstract UI representation of blocking */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-khushoo-primary/5 to-transparent"></div>
                         <div className="grid grid-cols-3 gap-6 relative z-10 transform rotate-12 scale-110">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                                const isBlocked = i % 2 === 0;
                                return (
                                <div key={i} className={`w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${isBlocked ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/10 border border-white/20'}`}>
                                    {isBlocked ? (
                                        <LockIcon className="w-8 h-8 text-gray-500" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                    )}
                                </div>
                                )
                            })}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;