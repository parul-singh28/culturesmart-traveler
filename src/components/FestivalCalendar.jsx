import React, { useState } from 'react';
import { FESTIVALS_DATA } from '../data/festivalsData.js';
import { Calendar, Sparkles, MapPin, ArrowRight, X, Check } from 'lucide-react';

export const FestivalCalendar = () => {
  const [activeFestival, setActiveFestival] = useState(null);

  return (
    <section id="festivals" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Celebrations of the Moon & Harvest
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
            Plan around the culture.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            Festivals in India are not dates on a calendar; they are living communal transformations. Time your travels to experience these timeless gatherings.
          </p>
        </div>

        <span className="text-xs font-semibold text-charcoal-800/70 bg-sand-200 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          Annual Cultural Calendar
        </span>
      </div>

      {/* Grid of Festivals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {FESTIVALS_DATA.map((fest) => (
          <div
            key={fest.id}
            className="group bg-white rounded-3xl overflow-hidden border border-sand-300 hover:border-terracotta-500/40 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo & Month Badge */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={fest.image}
                  alt={fest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-charcoal-900 border border-sand-200 shadow-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>{fest.month}</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold text-sand-200 uppercase tracking-wider block">
                    📍 {fest.location}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-editorial leading-tight">
                    {fest.name}
                  </h3>
                </div>
              </div>

              {/* Significance */}
              <div className="p-6 space-y-3">
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed line-clamp-3">
                  {fest.culturalSignificance}
                </p>

                {/* Highlights */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-800/60 block mb-1.5">
                    Rituals & Spectacle:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {fest.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-sand-100 text-charcoal-800 font-medium border border-sand-200">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveFestival(fest)}
                className="w-full py-2.5 rounded-xl border border-sand-300 hover:border-terracotta-500 text-xs font-bold text-charcoal-900 hover:text-terracotta-600 bg-sand-100/60 hover:bg-sand-100 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Explore Festival Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Festival Detail Modal */}
      {activeFestival && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FFF9F0] border border-sand-300 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 border-b border-sand-300 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                  {activeFestival.month} • {activeFestival.state}
                </span>
                <h3 className="text-xl font-bold font-editorial text-charcoal-900">
                  {activeFestival.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveFestival(null)}
                className="p-1.5 rounded-full hover:bg-sand-200 text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-charcoal-800 leading-relaxed">
              {activeFestival.culturalSignificance}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800/70 block">
                Festival Highlights & Rituals:
              </span>
              <ul className="space-y-1.5">
                {activeFestival.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-charcoal-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-terracotta-600 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveFestival(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-800 hover:bg-sand-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveFestival(null);
                  alert(`Added "${activeFestival.name}" to your cultural festival calendar!`);
                }}
                className="px-5 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-bold shadow-sm"
              >
                Remind Me for This Festival
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
