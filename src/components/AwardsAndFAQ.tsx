import React, { useState } from "react";
import { awards, faqs } from "../data";
import { Plus, Minus, Award, HelpCircle, ShieldCheck, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AwardsAndFAQ() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Awards Column Left */}
          <div className="lg:col-span-6 text-left">
            <div className="mb-10">
              <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/30">
                AWARDS & PATENT STATUS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-4 mb-4 tracking-tight">
                수상 및 공인 기술 특허 현황
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                알토케어는 SOH 분석, 삼차원 카본 하우징 구조 3D프린터 등 10건 이상의 다수 특허 출원 및 국방부 장관상을 비롯한 최고 수준의 정부 훈격을 통해 완벽한 기술 공신력을 쌓아가고 있습니다.
              </p>
            </div>

            {/* Awards timelines list */}
            <div className="space-y-4">
              {awards.map((aw, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/40 border border-slate-850 hover:border-emerald-500/10 transition-colors flex items-start space-x-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0 mt-0.5">
                    <Award className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                        {aw.date}
                      </span>
                      <span className="text-[10.5px] bg-slate-900 text-slate-350 border border-slate-800 px-2 py-0.5 rounded-full font-sans font-medium">
                        {aw.organization}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{aw.prize}</h4>
                    <p className="text-xs leading-relaxed text-slate-400 font-sans">
                      {aw.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Column Right */}
          <div className="lg:col-span-6 text-left">
            <div className="mb-10">
              <span className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-900/30">
                FAQ / KNOWLEDGE BASE
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-4 mb-4 tracking-tight">
                자주 묻는 핵심 질문
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                알토케어의 하이테크 하드웨어 기술 및 인산철(LFP)의 안전성에 관해 가장 자주 문의해 주시는 내용의 종합 답변입니다.
              </p>
            </div>

            {/* Accordion list */}
            <div className="space-y-3.5">
              {faqs.map((fq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-850 bg-slate-950/30 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-start justify-between space-x-4 hover:bg-slate-950/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-3.5">
                        <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide leading-snug">
                          {fq.question}
                        </h4>
                      </div>
                      <div className="text-slate-400 mt-0.5">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans border-t border-slate-900 bg-slate-950/20 font-medium">
                            {fq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
