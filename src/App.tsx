import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import StrengthsSection from "./components/StrengthsSection";
import ProductCatalog from "./components/ProductCatalog";
import PartnershipSection from "./components/PartnershipSection";
import MilestoneChart from "./components/MilestoneChart";
import EnergyCalculator from "./components/EnergyCalculator";
import AICoordinator from "./components/AICoordinator";
import AwardsAndFAQ from "./components/AwardsAndFAQ";
import ContactForm from "./components/ContactForm";

import { BatteryCharging, Globe, FileText, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleScrollToSegment = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleCalculateClick = () => {
    handleScrollToSegment("calculator");
  };

  const handleLearnMoreClick = () => {
    handleScrollToSegment("catalog");
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. Global Navigation Bar */}
      <Navigation onCalculateClick={handleCalculateClick} onChatClick={handleOpenChat} />

      {/* 2. Hero Interactive Visual Section */}
      <Hero onLearnMoreClick={handleLearnMoreClick} onChatClick={handleOpenChat} />

      {/* About Description Block */}
      <section id="about" className="py-20 bg-slate-950 relative overflow-hidden select-none border-t border-slate-900 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 block mb-2 uppercase font-extrabold">COMPANY OVERVIEW</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">
              "AI-Powered Application Software"
              <br />
              알토케어는 일상과 업무를 돕는 AI를 만듭니다.
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed mb-4 font-sans font-medium">
              알토케어는 AI 기반 응용 소프트웨어를 개발하는 스타트업입니다. Claude 등 최신 AI 기술을 활용해 사용자의 일상과 업무를 돕는 애플리케이션을 만듭니다.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-mono tracking-wide">
              Altocare is a startup building AI-powered application software.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Technology Strengths Section */}
      <StrengthsSection />

      {/* 4. Interactive Energy Reduction Calculator */}
      <EnergyCalculator />

      {/* 5. Product Catalog and Detailed Spec Modal Drawer */}
      <ProductCatalog />

      {/* 6. High-end Strategic Technical Partnerships (Xinhui, Troncube, B2Solution) */}
      <PartnershipSection />

      {/* 7. Milestone chronological bar chart (2026-2030) */}
      <MilestoneChart />

      {/* 8. Awards, Patent lists and Frequently Asked Questions Accordion grid */}
      <AwardsAndFAQ />

      {/* 9. Consulting Estimate & business MoA contact form */}
      <ContactForm />

      {/* 10. AI Proactive Coordinator Assistant Widget container */}
      <AICoordinator isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Footer copyright and contacts indicator details */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 select-none text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-500 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1.5 font-sans">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white tracking-wide text-sm">알토케어 (Altocare)</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded font-mono uppercase">
                AI Solutions
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans tracking-wide leading-relaxed">
              상호: 알토케어 | 대표: 김수연 | 사업자등록번호: 246-02-03757<br />
              업태: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업<br />
              이메일: kssu5632@powerkon.kr
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1.5 text-left sm:text-right">
            <span className="text-xs font-mono text-slate-400">
              &copy; 2026 Altocare. All rights reserved.
            </span>
            <span className="text-[11px] text-slate-500 font-sans">
              Altocare is a startup building AI-powered application software.
            </span>
          </div>
        </div>
      </footer>

      {/* Scroll to Top floating bubble */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-4 sm:left-6 z-40 p-4.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:bg-slate-800 shadow-xl cursor-pointer active:scale-95 transition-all flex justify-center items-center"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.3]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating AI Consultant trigger bubble */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-4 sm:right-6 lg:right-8 z-40 px-5 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-black shadow-2xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <div className="relative flex justify-center items-center">
            <BatteryCharging className="w-5 h-5 text-slate-950 stroke-[2.3] animate-pulse" />
            <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-emerald-400 border border-slate-950 rounded-full"></span>
          </div>
          <span className="text-xs sm:text-sm font-sans tracking-tight">알토케어 AI 컨설턴트</span>
        </button>
      )}
    </div>
  );
}
