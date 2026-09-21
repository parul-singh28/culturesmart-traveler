import React from 'react';
import { Heart, ArrowRight, Shield, Utensils, Volume2, Sparkles, MapPin } from 'lucide-react';

export const CityCard = ({
  city,
  onSelectCity,
  isSaved,
  onToggleSave
}) => {
  // Find tipping rule for quick snapshot
  const tippingRule = city.dosAndDonts.find(d => d.category === 'tipping');

  return (
    <div className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-750 hover:border-slate-650 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={city.heroImage}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="text-base">{city.flag}</span>
            <span>{city.continent}</span>
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(city.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all ${
              isSaved
                ? 'bg-rose-500/90 text-white shadow-md'
                : 'bg-slate-900/60 text-slate-300 hover:text-rose-400 hover:bg-slate-900/90'
            }`}
            title={isSaved ? "Remove from bookmarks" : "Save for offline / trip"}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom Title & Tagline */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {city.name}
            </h3>
            <span className="text-xs text-slate-300 font-medium">
              {city.country}
            </span>
          </div>
          <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 opacity-90">
            {city.tagline}
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Cultural Philosophy Badges */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Core Cultural Etiquette
          </div>
          <div className="flex flex-wrap gap-1.5">
            {city.keyCulturalValues.slice(0, 3).map((val, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-700/60 text-slate-200 border border-slate-650"
                title={val.meaning}
              >
                {val.term}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Tipping Snapshot */}
        {tippingRule && (
          <div className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                tippingRule.type === 'do' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}>
                {tippingRule.type === 'do' ? 'Tipping Habit' : 'Tipping Taboo'}
              </span>
              <p className="text-xs text-slate-300 truncate font-medium">
                {tippingRule.title}
              </p>
            </div>
          </div>
        )}

        {/* Card Footer Actions */}
        <div className="pt-2 border-t border-slate-750 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Utensils className="w-3.5 h-3.5 text-emerald-400" />
              {city.dosAndDonts.length} Tips
            </span>
            <span className="flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5 text-sky-400" />
              {city.phrasebook.length} Audio
            </span>
          </div>

          <button
            onClick={() => onSelectCity(city)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 hover:underline transition-colors"
          >
            Explore Guide
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
