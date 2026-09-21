import React from 'react';
import { DESTINATIONS } from '../data/destinationsData.js';
import { ArrowRight, Calendar, Sparkles, MapPin, Compass } from 'lucide-react';

export const DestinationExplorer = ({ onSelectDestination }) => {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            Regional Deep Dive
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
            India, beyond the tourist map.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            Discover destinations through their living stories, ancestral crafts, culinary philosophies, and everyday traditions.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-terracotta-600 bg-sand-200 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>4 Cultural Powerhouses of North India</span>
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {DESTINATIONS.map((dest, index) => {
          // Asymmetric column spans: 1st is 7 cols, 2nd is 5 cols, 3rd is 5 cols, 4th is 7 cols
          const colSpan = index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : index === 2 ? "md:col-span-5" : "md:col-span-7";
          const isFeatured = index === 0 || index === 3;

          return (
            <div
              key={dest.id}
              className={`${colSpan} group bg-white rounded-3xl overflow-hidden border border-sand-300 hover:border-terracotta-500/40 shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 flex flex-col justify-between hover:-translate-y-1`}
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className={`relative overflow-hidden ${isFeatured ? 'h-72 sm:h-80' : 'h-64 sm:h-72'}`}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />

                {/* State Tag & Best Time Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-charcoal-900 border border-sand-300 flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>{dest.state}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-950/80 text-sand-200 backdrop-blur-md border border-white/10 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    <span>{dest.bestTime.split('(')[0]}</span>
                  </span>
                </div>

                {/* Title & Tagline in Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-editorial">
                    {dest.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand-200 font-medium italic mt-0.5">
                    "{dest.tagline}"
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                    {dest.culturalDescription}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-800/60 block mb-2">
                      Cultural Pillars
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.culturalHighlights.slice(0, 3).map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-sand-100 text-charcoal-800 font-medium border border-sand-200"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-sand-200 flex items-center justify-between">
                  <div className="text-xs text-charcoal-800/60">
                    <span className="font-semibold text-charcoal-900">{dest.keyCities.length}</span> key cultural hubs
                  </div>
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-terracotta-600 hover:text-terracotta-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Explore Destination</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
