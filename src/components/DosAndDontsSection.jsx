import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info, Filter, Search } from 'lucide-react';

export const DosAndDontsSection = ({ dosAndDonts, cityName }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterType, setFilterType] = useState('all'); // 'all' | 'do' | 'dont'
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'tipping', label: 'Tipping & Money' },
    { id: 'dining', label: 'Dining & Food' },
    { id: 'dress', label: 'Dress Codes' },
    { id: 'gestures', label: 'Gestures & Body' },
    { id: 'social', label: 'Social Norms' },
    { id: 'safety', label: 'Safety & Scams' }
  ];

  const filteredItems = dosAndDonts.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.culturalContext.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-750">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-white font-semibold shadow-md'
                  : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters: Type Toggle & Search */}
        <div className="flex items-center gap-2.5">
          {/* Type Toggle */}
          <div className="inline-flex rounded-lg bg-slate-900/60 p-1 border border-slate-700/60 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterType === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('do')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                filterType === 'do' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-emerald-400'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              Dos
            </button>
            <button
              onClick={() => setFilterType('dont')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                filterType === 'dont' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-rose-400'
              }`}
            >
              <XCircle className="w-3 h-3" />
              Don'ts
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Filter rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-36 sm:w-44 px-2.5 py-1 bg-slate-900/80 border border-slate-700 rounded-lg text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Grid of Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredItems.map((item) => {
          const isDo = item.type === 'do';
          return (
            <div
              key={item.id}
              className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                isDo
                  ? 'bg-emerald-950/20 border-emerald-800/40 hover:border-emerald-700/60'
                  : 'bg-rose-950/20 border-rose-800/40 hover:border-rose-700/60'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isDo
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {isDo ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          DO
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          DON'T
                        </>
                      )}
                    </span>
                    <span className="text-xs uppercase font-medium tracking-wider text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {item.severity && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                        item.severity === 'crucial'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-700/60 text-slate-400'
                      }`}
                    >
                      {item.severity}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Cultural Context Box */}
              {item.culturalContext && (
                <div className="mt-2 pt-3 border-t border-slate-750/80 bg-slate-900/40 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block">
                      Cultural Context & Why:
                    </span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {item.culturalContext}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-800">
          <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2 opacity-80" />
          <h4 className="text-base font-semibold text-white">No etiquette tips match your filter</h4>
          <p className="text-xs text-slate-400 mt-1">Try resetting the category or search query.</p>
        </div>
      )}
    </div>
  );
};
