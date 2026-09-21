// Web Speech API text-to-speech helper
export const speakPhrase = (text, langCode = 'en-US', speedRate = 0.9, onEndCallback = null) => {
  if (!('speechSynthesis' in window)) {
    console.warn("Web Speech API is not supported in this browser.");
    alert(`Audio preview: "${text}" (${langCode}). (Your browser speech synthesis is unavailable)`);
    if (onEndCallback) onEndCallback();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;
  utterance.rate = speedRate;
  utterance.pitch = 1.0;

  // Try to find a voice that matches the language
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(v => v.lang === langCode || v.lang.startsWith(langCode.slice(0, 2)));
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onend = () => {
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = (e) => {
    console.error("Speech error:", e);
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.speak(utterance);
};
