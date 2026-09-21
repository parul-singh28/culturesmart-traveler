import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, MessageSquare, Gauge, Check } from 'lucide-react';
import { speakPhrase } from '../utils/speechUtils.js';

export const PhrasebookSection = ({ phrasebook, cityName }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingPhrase, setPlayingPhrase] = useState(null);
  const [speechSpeed, setSpeechSpeed] = useState(0.85); // 0.85x default for clear pronunciation

  const categories = [
    { id: 'all', label: 'All Phrases' },
    { id: 'greetings', label: 'Greetings' },
    { id: 'dining', label: 'Dining & Food' },
    { id: 'transit', label: 'Transit & Directions' },
    { id: 'shopping', label: 'Shopping' },
    { id: 'emergencies', label: 'Emergencies' },
    { id: 'social', label: 'Social Politeness' }
  ];

  const filteredPhrases = phrasebook.filter((p) => 
    activeCategory === 'all' || p.category === activeCategory
  );

  const handlePlayAudio = (phraseObj) => {
    // Play text in native language or fallback to phonetic
    const textToSpeak = phraseObj.native || phraseObj.phrase;
    const langCode = phraseObj.audioLang || 'en-US';

    setPlayingPhrase(phraseObj.phrase);
    speakPhrase(textToSpeak, langCode, speechSpeed, () => {
      setPlayingPhrase(null);
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Audio Speed Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-750">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            Essential Local Language & Phonetics
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            Click the speaker icon to hear native pronunciation powered by audio synthesis.
          </p>
        </div>

        {/* Speed Toggle */}
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700 text-xs self-end sm:self-auto">
          <Gauge className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400 font-medium">Speed:</span>
          <button
            onClick={() => setSpeechSpeed(0.7)}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              speechSpeed === 0.7 ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            0.7x (Slow)
          </button>
          <button
            onClick={() => setSpeechSpeed(0.9)}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              speechSpeed === 0.9 ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            1.0x (Normal)
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-emerald-500 text-white font-semibold shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-750'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Phrases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPhrases.map((phrase, idx) => {
          const isSpeaking = playingPhrase === phrase.phrase;

          return (
            <div
              key={idx}
              className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                isSpeaking
                  ? 'bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-950/50'
                  : 'bg-slate-850/90 border-slate-750 hover:border-slate-650'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  {/* Category Pill */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                    {phrase.category}
                  </span>

                  {/* Native Script */}
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-wide pt-1">
                    {phrase.native}
                  </div>

                  {/* Phonetic Pronunciation Guide */}
                  <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      Phonetic:
                    </span>
                    <span>"{phrase.phonetic}"</span>
                  </div>

                  {/* English Meaning / Usage */}
                  <div className="text-xs text-slate-300 pt-1">
                    <span className="font-semibold text-slate-200">Meaning:</span> {phrase.meaning}
                  </div>
                </div>

                {/* Audio Button */}
                <button
                  onClick={() => handlePlayAudio(phrase)}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-center flex-shrink-0 ${
                    isSpeaking
                      ? 'bg-emerald-500 text-white border-emerald-400 shadow-md scale-105'
                      : 'bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border-slate-700 hover:border-emerald-500/40'
                  }`}
                  title="Listen to native audio pronunciation"
                >
                  {isSpeaking ? (
                    <div className="flex items-center gap-0.5 h-5 px-1">
                      <div className="w-1 bg-white rounded-full animate-sound-1" />
                      <div className="w-1 bg-white rounded-full animate-sound-2" />
                      <div className="w-1 bg-white rounded-full animate-sound-3" />
                    </div>
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
