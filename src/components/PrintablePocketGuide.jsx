import React from 'react';
import { Shield, Phone, AlertTriangle, CheckCircle, XCircle, Compass } from 'lucide-react';

export const PrintablePocketGuide = ({ city }) => {
  if (!city) return null;

  const dos = city.dosAndDonts.filter(d => d.type === 'do');
  const donts = city.dosAndDonts.filter(d => d.type === 'dont');

  return (
    <div className="print-only p-8 bg-white text-slate-900 font-sans max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">{city.flag}</span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {city.name} Cultural Pocket Guide
            </h1>
          </div>
          <p className="text-sm font-semibold text-slate-600 mt-1">
            {city.country} • Currency: {city.currency} • Language: {city.language}
          </p>
        </div>
        <div className="text-right border-l-2 border-slate-300 pl-4 text-xs">
          <span className="font-bold text-slate-900 block uppercase tracking-wider">Emergency Hotlines:</span>
          <div>Police: <strong>{city.emergencyNumbers?.police}</strong></div>
          <div>Ambulance: <strong>{city.emergencyNumbers?.ambulance}</strong></div>
          {city.emergencyNumbers?.touristHotline && (
            <div>Tourist: <strong>{city.emergencyNumbers?.touristHotline}</strong></div>
          )}
        </div>
      </div>

      {/* Core Philosophy Banner */}
      <div className="bg-slate-100 p-3 rounded-lg border border-slate-300 text-xs">
        <span className="font-bold uppercase tracking-wider text-slate-800 block mb-1">
          Core Cultural Philosophies to Remember:
        </span>
        <div className="grid grid-cols-2 gap-2">
          {city.keyCulturalValues.map((v, i) => (
            <div key={i}>
              <strong className="text-slate-900">{v.term}:</strong> <span className="text-slate-700">{v.meaning}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dos and Don'ts 2-Column Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* DOs */}
        <div className="border-2 border-emerald-600 rounded-lg p-3 bg-emerald-50/50 space-y-2">
          <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold text-sm uppercase tracking-wider border-b border-emerald-300 pb-1">
            <CheckCircle className="w-4 h-4 text-emerald-700" />
            DO (Essential Cultural Courtesies)
          </div>
          <ul className="space-y-2 text-xs">
            {dos.map((item, idx) => (
              <li key={idx} className="space-y-0.5">
                <span className="font-bold text-slate-900 block">• {item.title}</span>
                <span className="text-slate-700 leading-snug block">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DONTs */}
        <div className="border-2 border-rose-600 rounded-lg p-3 bg-rose-50/50 space-y-2">
          <div className="flex items-center gap-1.5 text-rose-800 font-extrabold text-sm uppercase tracking-wider border-b border-rose-300 pb-1">
            <XCircle className="w-4 h-4 text-rose-700" />
            DON'T (Cultural Faux Pas to Avoid)
          </div>
          <ul className="space-y-2 text-xs">
            {donts.map((item, idx) => (
              <li key={idx} className="space-y-0.5">
                <span className="font-bold text-slate-900 block">• {item.title}</span>
                <span className="text-slate-700 leading-snug block">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Page Break for clean multi-page printing */}
      <div className="print-page-break" />

      {/* Transit & Commuter Rules */}
      <div className="border border-slate-300 rounded-lg p-3 space-y-2 text-xs">
        <h3 className="font-extrabold text-slate-900 uppercase tracking-wider text-sm border-b border-slate-200 pb-1">
          Transit & Commuter Etiquette
        </h3>
        <ul className="grid grid-cols-2 gap-2 text-slate-800">
          {city.transportEtiquette?.subwayRules?.map((r, i) => (
            <li key={i}>• {r}</li>
          ))}
          {city.transportEtiquette?.taxiEtiquette?.map((r, i) => (
            <li key={i}>• {r}</li>
          ))}
        </ul>
      </div>

      {/* Emergency & Dining Phrasebook Table */}
      <div className="border border-slate-300 rounded-lg p-3 space-y-2 text-xs">
        <h3 className="font-extrabold text-slate-900 uppercase tracking-wider text-sm border-b border-slate-200 pb-1">
          Emergency & Polite Phrases
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300 text-[11px] uppercase text-slate-600">
              <th className="py-1">English</th>
              <th className="py-1">Native Script</th>
              <th className="py-1">Phonetic Pronunciation</th>
              <th className="py-1">Usage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {city.phrasebook.slice(0, 8).map((p, i) => (
              <tr key={i} className="text-xs">
                <td className="py-1 font-semibold text-slate-900">{p.phrase}</td>
                <td className="py-1 font-bold text-slate-800">{p.native}</td>
                <td className="py-1 italic text-slate-700">{p.phonetic}</td>
                <td className="py-1 text-slate-600">{p.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Branding */}
      <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-slate-300">
        Generated by CultureSmart Traveler — Your companion for respectful, confident global travel.
      </div>
    </div>
  );
};
