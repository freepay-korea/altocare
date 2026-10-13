import React, { useState, useEffect } from "react";
import { Battery, Menu, X, ArrowRight, MessageSquare } from "lucide-react";

interface NavigationProps {
  onCalculateClick: () => void;
  onChatClick: () => void;
}

export default function Navigation({ onCalculateClick, onChatClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-md group-hover:scale-105 transition-all">
              <span className="text-xl font-black text-slate-950 font-sans tracking-tight">A</span>
              <div className="absolute inset-0 rounded-xl bg-emerald-400/20 blur opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-sans group-hover:text-emerald-400 transition-colors">
                Altocare
              </span>
              <span className="block text-[9px] text-slate-400 font-mono tracking-wider -mt-1 uppercase">
                AI Application Software
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {["회사 소개", "핵심 기술", "제품 카탈로그", "시뮬레이이터", "파트너십", "성장 비전"].map((label, idx) => {
              const ids = ["about", "technology", "catalog", "calculator", "partners", "vision"];
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(ids[idx])}
                  className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Nav Right CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onCalculateClick}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
            >
              절감액 계산기
            </button>
            <button
              onClick={onChatClick}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-105 active:scale-95 shadow-md shadow-emerald-500/10 cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              AI 전력 컨설팅
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {[
              { label: "회사 소개", id: "about" },
              { label: "핵심 기술", id: "technology" },
              { label: "제품 카탈로그", id: "catalog" },
              { label: "절감액 시뮬레이터", id: "calculator" },
              { label: "글로벌 파트너십", id: "partners" },
              { label: "성장 비전 & 로드맵", id: "vision" },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-850 px-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onCalculateClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                요금 절감 계산기
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onChatClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-medium flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                AI 전력 컨설팅 받기
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
