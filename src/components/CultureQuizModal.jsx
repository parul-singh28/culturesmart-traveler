import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/cultureQuizData.js';

export const CultureQuizModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm no-print animate-fadeIn">
      <div className="bg-slate-900 border border-slate-750 rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Culture IQ Challenge</h3>
              <span className="text-xs text-slate-400">Test your global travel etiquette</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 overflow-y-auto flex-1 space-y-5">
          {!isFinished ? (
            <>
              {/* Progress & City Badge */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                  <span>{currentQ.flag}</span>
                  <span>{currentQ.city}</span>
                </span>
                <span className="text-slate-400 font-medium">
                  Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswerSubmitted && idx === currentQ.correctAnswer;
                  const isWrong = isAnswerSubmitted && isSelected && idx !== currentQ.correctAnswer;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start justify-between gap-3 ${
                        isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                          : isWrong
                          ? 'bg-rose-950/40 border-rose-500 text-rose-200'
                          : isSelected
                          ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                          : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 border-slate-700/80'
                      }`}
                    >
                      <span>{opt}</span>
                      {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />}
                      {isWrong && <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />}
                    </button>
                  );
                })}
              </div>

              {/* Cultural Explanation after answering */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5 text-xs animate-fadeIn">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                    {selectedOption === currentQ.correctAnswer ? '🎉 Correct!' : '💡 Cultural Lesson:'}
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Finished Screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Quiz Completed!</h4>
              <p className="text-sm text-slate-300">
                You scored <span className="text-emerald-400 font-bold text-lg">{score}</span> out of{' '}
                <span className="font-bold">{QUIZ_QUESTIONS.length}</span>!
              </p>
              <div className="p-4 rounded-2xl bg-slate-800 border border-slate-750 max-w-sm mx-auto">
                <p className="text-xs text-slate-200 font-medium">
                  {score >= 7
                    ? '🌟 Master Global Diplomat: You understand nuanced cultural norms and local courtesies worldwide!'
                    : score >= 4
                    ? '🧭 Savvy Explorer: Great instinct! A few more reviews of local customs and you will be completely faux-pas proof.'
                    : '🌱 Curious Traveler: Keep exploring our city guides and phrasebooks before your next flight!'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          {!isFinished ? (
            <>
              <div className="text-xs text-slate-400 font-medium">
                Score: <span className="text-white font-bold">{score}</span>
              </div>
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>{currentIndex + 1 < QUIZ_QUESTIONS.length ? 'Next Question' : 'View Results'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center justify-between w-full">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
