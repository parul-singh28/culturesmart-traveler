import React, { useState } from 'react';
import { CONTINENTS, TIP_OF_THE_DAY } from '../data/citiesData.js';
import { Lightbulb, RefreshCw, Globe, ShieldAlert, Sparkles, Compass } from 'lucide-react';

export const HeroBanner = ({
  activeContinent,
  setActiveContinent,
  onQuickCategorySelect
}) => {
  const [tipIndex, setTipIndex] = useState(0);

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % TIP_OF_THE_DAY.length);
  };

  const currentTip = TIP_OF_THE_DAY[tipIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 pt-8 pb-12 border-b border-slate-800/80">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-sky-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            Global Etiquette & City Intelligence
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Travel Confidently. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Avoid Cultural Faux Pas.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            Essential behavioral dos & don'ts, native audio phrasebooks, transit norms, and insider local customs for cities around the globe.
          </p>
        </div>

        {/* Featured Cultural Tip of the Day */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl relative backdrop-blur-sm group">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Tip of the Day: {currentTip.category}
                  </span>
                  <div className="text-xs text-slate-400 font-medium">
                    {currentTip.flag} {currentTip.city}
                  </div>
                </div>
              </div>
              <button
                onClick={handleNextTip}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-400 bg-slate-700/50 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors border border-slate-600/40"
                title="Next cultural tip"
              >
                <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                <span className="hidden sm:inline">Shuffle</span>
              </button>
            </div>
            <p className="text-sm sm:text-base text-slate-200 pl-10 border-l-2 border-amber-500/40 italic">
              "{currentTip.tip}"
            </p>
          </div>
        </div>

        {/* Continent Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {CONTINENTS.map((continent) => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeContinent === continent
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 font-semibold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60'
              }`}
            >
              {continent}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
