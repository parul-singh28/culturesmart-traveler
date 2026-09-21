import React from 'react';
import { Train, Car, Footprints, Smartphone, AlertCircle, CheckCircle2 } from 'lucide-react';

export const TransportGuide = ({ transportData, cityName }) => {
  if (!transportData) return null;

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-750">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Train className="w-5 h-5 text-sky-400" />
          Navigating {cityName}: Systems & Commuter Etiquette
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {transportData.overview}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subway & Train Etiquette */}
        <div className="bg-slate-850 p-5 rounded-2xl border border-slate-750 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Metro & Subway Rules</h4>
                <span className="text-xs text-slate-400">Commuter social contract</span>
              </div>
            </div>

            <ul className="space-y-3">
              {transportData.subwayRules?.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Taxi & Rideshare Etiquette */}
        <div className="bg-slate-850 p-5 rounded-2xl border border-slate-750 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Taxis & Rideshares</h4>
                <span className="text-xs text-slate-400">Hail rules & payment etiquette</span>
              </div>
            </div>

            <ul className="space-y-3">
              {transportData.taxiEtiquette?.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Walking & Street Rules */}
        {transportData.walkingBiking && (
          <div className="bg-slate-850 p-5 rounded-2xl border border-slate-750">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Footprints className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Sidewalk & Pedestrian Norms</h4>
                <span className="text-xs text-slate-400">Pacing, cycling & smoking rules</span>
              </div>
            </div>

            <ul className="space-y-3">
              {transportData.walkingBiking.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommended Mobile Apps */}
        {transportData.recommendedApps && (
          <div className="bg-slate-850 p-5 rounded-2xl border border-slate-750">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Essential Transit Apps</h4>
                <span className="text-xs text-slate-400">Download before departure</span>
              </div>
            </div>

            <div className="space-y-2">
              {transportData.recommendedApps.map((app, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-750 flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
