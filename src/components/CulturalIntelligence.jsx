import React, { useState } from 'react';
import { CULTURAL_INTELLIGENCE_CARDS } from '../data/cultureGuideData.js';
import { CheckCircle2, XCircle, Lightbulb, MessageCircle, Shield, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const CulturalIntelligence = () => {
  const [expandedId, setExpandedId] = useState("do");

  const getIcon = (type) => {
    switch (type) {
      case "DO": return <CheckCircle2 className="w-5 h-5 text-forest-600" />;
      case "DON'T": return <XCircle className="w-5 h-5 text-terracotta-500" />;
      case "KNOW": return <Lightbulb className="w-5 h-5 text-gold-500" />;
      case "TRY": return <MessageCircle className="w-5 h-5 text-indigo-950" />;
      case "RESPECT": return <Shield className="w-5 h-5 text-terracotta-600" />;
      default: return <Sparkles className="w-5 h-5 text-terracotta-500" />;
    }
  };

  return (
    <section id="cultural-intelligence" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sand-200 border border-sand-300">
          <Shield className="w-3.5 h-3.5" />
          The Respectful Traveler's Compass
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
          Travel with cultural awareness.
        </h2>
        <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
          Understanding local social etiquette transforms you from a spectator into an honored guest. Click each card to reveal nuanced customs.
        </p>
      </div>

      {/* Interactive Etiquette Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
        {CULTURAL_INTELLIGENCE_CARDS.map((card) => {
          const isExpanded = expandedId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setExpandedId(isExpanded ? null : card.id)}
              className={`cursor-pointer rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border ${
                isExpanded
                  ? 'bg-white border-terracotta-500/50 shadow-warm-md md:scale-103'
                  : 'bg-[#FFFDF8] border-sand-300 hover:border-terracotta-500/30 hover:bg-white'
              }`}
            >
              <div className="space-y-3">
                {/* Header Icon & Type */}
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-sand-100 border border-sand-200">
                    {getIcon(card.type)}
                  </div>
                  <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${card.badgeColor}`}>
                    {card.type}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-lg font-bold text-charcoal-900 leading-snug font-editorial">
                  {card.headline}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-charcoal-800/75 leading-relaxed">
                  {card.summary}
                </p>
              </div>

              {/* Expandable Details Area */}
              <div className="mt-4 pt-3 border-t border-sand-200">
                {isExpanded ? (
                  <div className="space-y-2 animate-fade-in">
                    <p className="text-xs text-charcoal-800 leading-relaxed font-normal bg-sand-100 p-3 rounded-xl border border-sand-200">
                      {card.details}
                    </p>
                    <span className="text-[11px] font-semibold text-terracotta-600 flex items-center justify-between">
                      <span>Click to collapse</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] font-semibold text-charcoal-800/60 hover:text-terracotta-600 flex items-center justify-between">
                    <span>Read full advice</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
