import React, { useState } from 'react';
import { X, Scale, ArrowRightLeft, CheckCircle2, XCircle, Info } from 'lucide-react';
import { CITIES_DATA } from '../data/citiesData.js';

export const CityCompareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [cityAId, setCityAId] = useState('tokyo');
  const [cityBId, setCityBId] = useState('new-york');

  const cityA = CITIES_DATA.find(c => c.id === cityAId) || CITIES_DATA[0];
  const cityB = CITIES_DATA.find(c => c.id === cityBId) || CITIES_DATA[1];

  // Helper to extract specific category rule
  const getRule = (city, category) => {
    return city.dosAndDonts.find(d => d.category === category);
  };

  const categoriesToCompare = [
    { key: 'tipping', label: 'Tipping Customs' },
    { key: 'dining', label: 'Dining Etiquette' },
    { key: 'social', label: 'Social Greetings' },
    { key: 'transit', label: 'Transit Norms' },
    { key: 'gestures', label: 'Gestures & Body Language' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm no-print animate-fadeIn">
      <div className="bg-slate-900 border border-slate-750 rounded-3xl max-w-4xl w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Compare Cultural Etiquette</h3>
              <span className="text-xs text-slate-400">Side-by-side behavioral norms between two global destinations</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* City Selectors */}
        <div className="grid grid-cols-2 gap-4 py-4 border-b border-slate-800 bg-slate-850/60 -mx-6 px-6 sm:-mx-7 sm:px-7">
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              City A:
            </label>
            <select
              value={cityAId}
              onChange={(e) => setCityAId(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white font-medium focus:outline-none focus:border-emerald-500"
            >
              {CITIES_DATA.map(c => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.name} ({c.country})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              City B:
            </label>
            <select
              value={cityBId}
              onChange={(e) => setCityBId(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white font-medium focus:outline-none focus:border-sky-500"
            >
              {CITIES_DATA.map(c => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.name} ({c.country})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Body */}
        <div className="py-4 overflow-y-auto flex-1 space-y-6">
          {/* Quick Cultural Values Contrast */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                {cityA.flag} {cityA.name} Mindset
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cityA.keyCulturalValues[0]?.term}: {cityA.keyCulturalValues[0]?.meaning}
              </p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                {cityB.flag} {cityB.name} Mindset
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cityB.keyCulturalValues[0]?.term}: {cityB.keyCulturalValues[0]?.meaning}
              </p>
            </div>
          </div>

          {/* Categorized Comparison Cards */}
          {categoriesToCompare.map((cat) => {
            const ruleA = getRule(cityA, cat.key);
            const ruleB = getRule(cityB, cat.key);

            return (
              <div key={cat.key} className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  {cat.label}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* City A Rule */}
                  <div className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                    ruleA?.type === 'do'
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-200'
                      : 'bg-rose-950/20 border-rose-800/40 text-slate-200'
                  }`}>
                    {ruleA ? (
                      <>
                        <div className="flex items-center gap-1.5 font-bold">
                          {ruleA.type === 'do' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          )}
                          <span className="text-white">{ruleA.title}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {ruleA.description}
                        </p>
                      </>
                    ) : (
                      <p className="text-slate-400 italic">No specific tip in this category.</p>
                    )}
                  </div>

                  {/* City B Rule */}
                  <div className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                    ruleB?.type === 'do'
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-200'
                      : 'bg-rose-950/20 border-rose-800/40 text-slate-200'
                  }`}>
                    {ruleB ? (
                      <>
                        <div className="flex items-center gap-1.5 font-bold">
                          {ruleB.type === 'do' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          )}
                          <span className="text-white">{ruleB.title}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {ruleB.description}
                        </p>
                      </>
                    ) : (
                      <p className="text-slate-400 italic">No specific tip in this category.</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
