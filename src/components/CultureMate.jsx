import React, { useState } from 'react';
import { Sparkles, MessageCircle, X, Send, Bot, User, Compass, ArrowRight } from 'lucide-react';
import { CULTUREMATE_SUGGESTIONS, getCultureMateResponse } from '../utils/cultureMateAI.js';

export const CultureMate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm CultureMate, your local cultural etiquette companion for Haryana, Delhi, Rajasthan, and Uttar Pradesh. What would you like to know about traveling respectfully?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend) => {
    const userText = textToSend || inputValue;
    if (!userText.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getCultureMateResponse(userText);
      setMessages([
        ...newMessages,
        {
          sender: "bot",
          title: response.title,
          text: response.content
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 no-print">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white font-bold text-xs sm:text-sm shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 animate-pulse-glow"
        >
          <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform" />
          <span>Ask CultureMate</span>
        </button>
      )}

      {/* Expanded Friendly Chat Dialog */}
      {isOpen && (
        <div className="bg-[#FFF9F0] border-2 border-sand-300 rounded-3xl w-[90vw] sm:w-[380px] h-[520px] shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Dialog Header */}
          <div className="bg-gradient-to-r from-indigo-950 to-indigo-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <Sparkles className="w-4 h-4 text-gold-300" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">CultureMate</h4>
                <span className="text-[10px] text-sand-200 block">Your Local Cultural Companion</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/15 text-sand-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-terracotta-500 text-white font-medium rounded-br-none"
                      : "bg-white text-charcoal-900 border border-sand-300 rounded-bl-none shadow-warm-sm"
                  }`}
                >
                  {msg.title && (
                    <strong className="block text-terracotta-600 font-bold mb-1 border-b border-sand-200 pb-1">
                      {msg.title}
                    </strong>
                  )}
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white text-charcoal-800 border border-sand-300 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-bounce delay-200" />
              </div>
            )}
          </div>

          {/* Quick Suggested Prompts Pills */}
          <div className="p-2.5 bg-sand-100 border-t border-sand-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {CULTUREMATE_SUGGESTIONS.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sug)}
                className="px-2.5 py-1 rounded-full bg-white text-charcoal-800 text-[10px] font-semibold whitespace-nowrap border border-sand-300 hover:border-terracotta-500 transition-colors"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-white border-t border-sand-300 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about dress codes, greetings, food..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-[#FFF9F0] border border-sand-300 rounded-xl px-3 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-terracotta-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
