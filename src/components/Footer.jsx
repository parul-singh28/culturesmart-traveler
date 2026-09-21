import React from 'react';
import { Compass, Heart, Globe, ArrowUp } from 'lucide-react';

export const Footer = ({ onOpenPlanner }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-indigo-950 text-cream-100/90 pt-16 pb-12 border-t border-indigo-900 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-terracotta-500 flex items-center justify-center text-white shadow-warm-md">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block font-editorial text-white">
                  Culture<span className="text-terracotta-400">Smart</span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase block -mt-1 text-sand-200">
                  Traveller
                </span>
              </div>
            </div>

            <p className="text-sm text-sand-200/80 max-w-sm leading-relaxed">
              Your intelligent travel companion for discovering places, people, traditions, food, and experiences across <strong>Haryana, Delhi, Rajasthan, and Uttar Pradesh</strong> — respectfully.
            </p>

            <div className="text-xs text-sand-300/60 font-medium">
              “Travel deeper. Understand the culture.”
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sand-200">
              Cultural Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sand-200/80">
              <li><a href="#destinations" className="hover:text-terracotta-400 transition-colors">Destinations (4 States)</a></li>
              <li><a href="#trip-planner" className="hover:text-terracotta-400 transition-colors">AI Cultural Trip Planner</a></li>
              <li><a href="#cultural-intelligence" className="hover:text-terracotta-400 transition-colors">Etiquette: DOs & DON'Ts</a></li>
              <li><a href="#culture-guide" className="hover:text-terracotta-400 transition-colors">8 Pillars Culture Guide</a></li>
              <li><a href="#smart-map" className="hover:text-terracotta-400 transition-colors">North India Smart Map</a></li>
              <li><a href="#festivals" className="hover:text-terracotta-400 transition-colors">Festival Calendar</a></li>
            </ul>
          </div>

          {/* Regions & Newsletter (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sand-200">
              Cultural Corridors
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-900 text-sand-200 border border-indigo-800">
                Rajasthan
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-900 text-sand-200 border border-indigo-800">
                National Capital Territory of Delhi
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-900 text-sand-200 border border-indigo-800">
                Haryana
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-900 text-sand-200 border border-indigo-800">
                Uttar Pradesh
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-xs font-semibold text-sand-200 transition-colors border border-indigo-800"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-indigo-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-300/60">
          <div>
            © 2026 CultureSmart Traveller. Designed with reverence for Indian cultural heritage.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Cultural Manifesto</span>
            <span>Ethical Tourism Pledge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
