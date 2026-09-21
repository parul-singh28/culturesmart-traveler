import React from 'react';
import { X, Heart, ArrowRight, Trash2, MapPin } from 'lucide-react';
import { CITIES_DATA } from '../data/citiesData.js';

export const SavedCitiesModal = ({
  isOpen,
  onClose,
  savedCityIds,
  onSelectCity,
  onToggleSave
}) => {
  if (!isOpen) return null;

  const savedCities = CITIES_DATA.filter(c => savedCityIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm no-print animate-fadeIn">
      <div className="bg-slate-900 border border-slate-750 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Saved Cities ({savedCities.length})</h3>
              <span className="text-xs text-slate-400">Quick access for your upcoming itinerary</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="overflow-y-auto flex-1 space-y-3 py-2">
          {savedCities.length > 0 ? (
            savedCities.map(city => (
              <div
                key={city.id}
                className="bg-slate-850 border border-slate-750 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3 hover:border-slate-650 transition-all"
              >
                <div 
                  onClick={() => {
                    onSelectCity(city);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                >
                  <img
                    src={city.heroImage}
                    alt={city.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700 flex-shrink-0"
                  />
                  <div className="truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-sm sm:text-base truncate">
                        {city.name}
                      </span>
                      <span className="text-sm">{city.flag}</span>
                    </div>
                    <span className="text-xs text-slate-400 block truncate">
                      {city.country} • {city.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      onSelectCity(city);
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-semibold flex items-center gap-1 transition-colors"
                    title="Open guide"
                  >
                    <span>Open</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onToggleSave(city.id)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              <Heart className="w-10 h-10 mx-auto mb-2 opacity-30 text-rose-400" />
              <p className="font-semibold text-slate-300">No saved cities yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the heart icon on any city card to bookmark it for offline reference.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
