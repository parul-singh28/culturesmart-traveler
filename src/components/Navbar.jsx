import React from 'react';
import { Compass, BookOpen, Scale, Sparkles, Heart, Search, Printer } from 'lucide-react';

export const Navbar = ({
  searchQuery,
  setSearchQuery,
  savedCitiesCount,
  onOpenSaved,
  onOpenQuiz,
  onOpenCompare,
  selectedCity,
  onPrintGuide,
  onHomeClick
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div 
          onClick={onHomeClick}
          className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white animate-spin-slow" />
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
              Culture<span className="text-emerald-400">Smart</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 block -mt-1">
              Traveler's Guide
            </span>
          </div>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search city, etiquette, customs (e.g. Tokyo, tipping)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Compare Button */}
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-slate-700/60 transition-colors"
            title="Compare cultural etiquette between cities"
          >
            <Scale className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Compare</span>
          </button>

          {/* Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 text-emerald-300 text-xs sm:text-sm font-semibold border border-emerald-500/30 transition-all"
            title="Test your cultural IQ"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Culture Quiz</span>
          </button>

          {/* Saved Cities Bookmark Trigger */}
          <button
            onClick={onOpenSaved}
            className="relative p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-rose-400 transition-colors border border-slate-700/60"
            title="View saved bookmarked cities"
          >
            <Heart className="w-4 h-4" />
            {savedCitiesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                {savedCitiesCount}
              </span>
            )}
          </button>

          {/* Print / Pocket Guide Trigger (if city selected) */}
          {selectedCity && (
            <button
              onClick={onPrintGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-medium shadow-md transition-colors"
              title="Print or export pocket guide"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Pocket Guide</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search city, customs, tipping..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>
    </header>
  );
};
