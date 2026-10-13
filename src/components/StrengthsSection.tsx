import React from "react";
import { Cpu, ShieldAlert, Layers, Zap, Printer, CheckCircle } from "lucide-react";
import { strengths } from "../data";

const iconMap: Record<string, React.ComponentType<any>> = {
  Cpu,
  ShieldAlert,
  Layers,
  Zap,
  Printer,
  CheckCircle,
};

export default function StrengthsSection() {
  return (
    <section id="technology" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/30">
            TECHNOLOGY DIFFERENTIATORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            독창적인 신소재 공법과
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              스마트 전력 제어 6대 주력 기술
            </span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            중국 Xinhui, 심천 Troncube 인적 R&D 제휴부터 특허 수명 SOH 검증까지 설계 국산화 및 핵심 부품 설계 고집적으로 배터리 한계를 돌파합니다.
          </p>
        </div>

        {/* Grid Column Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {strengths.map((str, idx) => {
            const IconComp = iconMap[str.iconName] || Cpu;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 sm:p-8 bg-slate-950/40 border border-slate-800/80 hover:border-emerald-500/20 hover:bg-slate-950/60 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-emerald-500/2"
              >
                {/* Visual Connector Line */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/10 group-hover:via-emerald-400/50 group-hover:to-cyan-400/10 transition-all duration-500"></div>

                {/* Animated Logo / Icon container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-350 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/10 transition-all duration-300 mb-6">
                  <IconComp className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {str.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-sans">{str.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
