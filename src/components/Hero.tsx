import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Shield, Zap, Sparkles, BatteryCharging } from "lucide-react";

interface HeroProps {
  onLearnMoreClick: () => void;
  onChatClick: () => void;
}

export default function Hero({ onLearnMoreClick, onChatClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Left */}
          <div className="lg:col-span-7 select-none text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              AI 기반 응용 소프트웨어 혁신 스타트업
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6"
            >
              사용자의 일상과 업무를 돕는
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI 기반 응용 소프트웨어
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-350 max-w-2xl leading-relaxed mb-10"
            >
              알토케어는 AI 기반 응용 소프트웨어를 개발하는 스타트업입니다. Claude 등 최신 AI 기술을 활용해 사용자의 일상과 업무를 돕는 애플리케이션을 만듭니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onChatClick}
                className="px-8 py-4 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:brightness-105 active:scale-98 transition-all shadow-lg shadow-emerald-500/20 text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-slate-950 animate-bounce" />
                AI 솔루션 실시간 상담하기
              </button>
              <button
                onClick={onLearnMoreClick}
                className="px-8 py-4 rounded-xl text-white font-bold bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-700 active:scale-98 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
              >
                솔루션 라인업 둘러보기
              </button>
            </motion.div>
          </div>

          {/* Graphical Right Dashboard Card Showcase */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 shadow-2xl overflow-hidden hover:border-slate-700/50 transition-colors"
            >
              {/* Inner ambient shine */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>

              {/* Title Header */}
              <div className="flex justify-between items-center pb-6 border-b border-slate-800/80 mb-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    ALTOCARE ESS SPEC
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-mono">MODEL: ALTO-2.4K</span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono bg-emerald-950/30 px-2.5 py-1 rounded-full border border-emerald-900/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-300">ACTIVE PROTOTYPE</span>
                </div>
              </div>

              {/* Visualized Stack Icon Illustration */}
              <div className="flex justify-center py-6 mb-4">
                <div className="flex flex-col-reverse space-y-reverse space-y-1 w-44">
                  {/* Module Base */}
                  <div className="h-4 rounded-b-md bg-slate-800 border-t border-slate-700 flex justify-center items-center text-[7px] text-slate-500 font-mono">
                    STAND FOUNDATION
                  </div>
                  {/* 3 stacked blocks with emerald glow */}
                  <div className="h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 shadow-inner flex items-center justify-between px-3">
                    <span className="text-[9px] text-emerald-300 font-mono">BLOCK #1 (2.4kWh)</span>
                    <span className="text-[9px] text-emerald-400 font-bold">100% SOH</span>
                  </div>
                  <div className="h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 shadow-inner flex items-center justify-between px-3">
                    <span className="text-[9px] text-emerald-300 font-mono">BLOCK #2 (2.4kWh)</span>
                    <span className="text-[9px] text-emerald-400 font-bold">100% SOH</span>
                  </div>
                  <div className="h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 shadow-inner flex items-center justify-between px-3">
                    <span className="text-[9px] text-emerald-300 font-mono">BLOCK #3 (2.4kWh)</span>
                    <span className="text-[9px] text-emerald-400 font-bold">100% SOH</span>
                  </div>
                  {/* Integrated Control Inverter */}
                  <div className="h-10 rounded-t-xl bg-slate-800 border border-slate-700/80 flex items-center justify-between px-3 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
                    <div className="flex items-center space-x-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[10px] text-white font-bold tracking-tight">
                        INTEGRATED INVERTER
                      </span>
                    </div>
                    <span className="text-[9px] text-cyan-400 font-mono">4.4kW PEAK</span>
                  </div>
                </div>
              </div>

              {/* Stats parameters grid */}
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    보장 배터리 수명
                  </span>
                  <span className="text-xl font-black text-white font-mono">
                    6,500<span className="text-emerald-400 text-xs font-sans font-medium ml-1">Cycles</span>
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    충전 시간 (85%)
                  </span>
                  <span className="text-xl font-black text-white font-mono">
                    1<span className="text-cyan-400 text-xs font-sans font-medium ml-1">Hour</span>
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    설계 확장 한계
                  </span>
                  <span className="text-xl font-black text-white font-mono">
                    10<span className="text-emerald-400 text-xs font-sans font-medium ml-1">Blocks</span>
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">
                    화재 테스트 지수
                  </span>
                  <div className="flex items-center space-x-1 mt-1">
                    <Shield className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    <span className="text-sm font-bold text-white">ZERO FIRE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
