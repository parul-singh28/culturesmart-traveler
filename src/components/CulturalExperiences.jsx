import React, { useState } from 'react';
import { CULTURAL_EXPERIENCES } from '../data/experiencesData.js';
import { Sparkles, Clock, MapPin, Tag, ArrowRight, X, Shield, Check } from 'lucide-react';

export const CulturalExperiences = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Beyond Sightseeing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
            Immersive Cultural Experiences
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            Participate in living arts alongside generational masters: carve wood blocks, churn village butter, join Sufi chanting, and knead stone pottery.
          </p>
        </div>

        <span className="text-xs font-semibold text-charcoal-800/70 bg-sand-200 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          Handcrafted Journeys
        </span>
      </div>

      {/* Grid of Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {CULTURAL_EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="group bg-white rounded-3xl overflow-hidden border border-sand-300 hover:border-terracotta-500/40 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo & Duration Badge */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-charcoal-900 shadow-sm border border-sand-200">
                    {exp.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    {exp.duration}
                  </span>
                  <span className="text-sand-200 font-mono">
                    {exp.priceRange}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-bold text-terracotta-600 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>

                <h3 className="text-lg font-bold font-editorial text-charcoal-900 leading-snug">
                  {exp.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed line-clamp-3">
                  {exp.culturalSignificance}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedExp(exp)}
                className="w-full py-2.5 rounded-xl border border-sand-300 hover:border-terracotta-500 text-xs font-bold text-charcoal-900 hover:text-terracotta-600 bg-sand-100/60 hover:bg-sand-100 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Details Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FFF9F0] border border-sand-300 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 border-b border-sand-300 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                  {selectedExp.category} • {selectedExp.state}
                </span>
                <h3 className="text-xl font-bold font-editorial text-charcoal-900">
                  {selectedExp.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                className="p-1.5 rounded-full hover:bg-sand-200 text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-charcoal-800 leading-relaxed">
              {selectedExp.culturalSignificance}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800/70 block">
                What's Included in this Experience:
              </span>
              <ul className="space-y-1.5">
                {selectedExp.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-charcoal-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-sand-300 flex items-center justify-between text-xs">
              <div>
                <span className="text-charcoal-800/60 block">Duration</span>
                <strong className="text-charcoal-900">{selectedExp.duration}</strong>
              </div>
              <div className="text-right">
                <span className="text-charcoal-800/60 block">Typical Contribution</span>
                <strong className="text-terracotta-600">{selectedExp.priceRange}</strong>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedExp(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-800 hover:bg-sand-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedExp(null);
                  alert(`Added "${selectedExp.title}" to your personalized cultural wish list!`);
                }}
                className="px-5 py-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-bold shadow-sm"
              >
                Save to My Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
