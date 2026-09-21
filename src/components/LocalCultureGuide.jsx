import React, { useState } from 'react';
import { CULTURE_PILLARS } from '../data/cultureGuideData.js';
import { Sparkles, ArrowRight, X, Shield, BookOpen, Compass } from 'lucide-react';

export const LocalCultureGuide = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);

  return (
    <section id="culture-guide" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Cultural Foundations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
            Before you arrive, know the culture.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            Eight living dimensions of North Indian civilization. Select any pillar to unveil stories, historical craft secrets, and etiquette.
          </p>
        </div>

        <span className="text-xs font-semibold text-charcoal-800/70 bg-sand-200 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          8 Core Cultural Pillars
        </span>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {CULTURE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => setSelectedPillar(pillar)}
            className="cursor-pointer group bg-white rounded-3xl p-6 border border-sand-300 hover:border-terracotta-500/40 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="space-y-3">
              <span className="text-3xl sm:text-4xl block group-hover:scale-110 transition-transform origin-left">
                {pillar.icon}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-charcoal-900 leading-snug font-editorial">
                {pillar.name}
              </h3>
              <p className="text-xs text-charcoal-800/70 line-clamp-2 leading-relaxed">
                {pillar.subtitle}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-sand-200 flex items-center justify-between text-xs font-bold text-terracotta-600 group-hover:text-terracotta-700">
              <span>Read Stories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal Drawer */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FFF9F0] border border-sand-300 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[88vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-sand-300 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedPillar.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold font-editorial text-charcoal-900">
                    {selectedPillar.name}
                  </h3>
                  <p className="text-xs text-terracotta-600 font-semibold">
                    {selectedPillar.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPillar(null)}
                className="p-1.5 rounded-full hover:bg-sand-200 text-charcoal-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed">
              {selectedPillar.description}
            </p>

            {/* Regional Vignettes Across the 4 States */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800/70 block">
                Regional Highlights Across the Heartland
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedPillar.regionalStories.map((story, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white border border-sand-300 space-y-1">
                    <span className="text-xs font-bold text-terracotta-600 block">
                      📍 {story.state}
                    </span>
                    <p className="text-xs text-charcoal-800 leading-snug">
                      {story.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Etiquette Guideline */}
            <div className="p-4 rounded-2xl bg-forest-500/10 border border-forest-500/25 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-charcoal-800 space-y-0.5">
                <strong className="text-forest-700 block">Etiquette to Remember:</strong>
                <span>{selectedPillar.etiquetteRule}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-bold transition-colors"
              >
                Close Cultural Pillar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
