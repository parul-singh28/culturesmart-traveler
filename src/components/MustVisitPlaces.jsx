import React from 'react';
import { MapPin, Clock, Shirt, Sparkles, Compass, Camera } from 'lucide-react';

export const MustVisitPlaces = ({ places, cityName }) => {
  if (!places || places.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-750">
        <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-400" />
          Cultural Landmarks & Authentic Hidden Gems
        </h3>
        <p className="text-sm text-slate-300">
          Discover {cityName}'s most profound cultural sites with insider visitor etiquette, respectful dress codes, and timing tips.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {places.map((place, idx) => (
          <div
            key={idx}
            className="bg-slate-850 border border-slate-750 rounded-2xl p-5 sm:p-6 transition-all hover:border-slate-650 space-y-4"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-750/80 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {place.name}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mt-0.5">
                  {place.type}
                </span>
              </div>

              {/* Hours Pill */}
              {place.visitingHours && (
                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-750 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{place.visitingHours}</span>
                </div>
              )}
            </div>

            {/* Description & Cultural Context */}
            <div className="space-y-2">
              <p className="text-sm text-slate-200 leading-relaxed">
                {place.description}
              </p>

              {place.culturalContext && (
                <p className="text-xs text-slate-400 italic">
                  <span className="font-semibold text-slate-300 not-italic">Cultural Significance:</span> {place.culturalContext}
                </p>
              )}
            </div>

            {/* Insider Tip Callout */}
            {place.insiderTip && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300 block mb-0.5">
                    Cultural Insider Tip:
                  </span>
                  <span>{place.insiderTip}</span>
                </div>
              </div>
            )}

            {/* Dress Code & Etiquette Footer */}
            {place.dressCode && (
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <Shirt className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-300">Dress Etiquette: </span>
                  <span>{place.dressCode}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
