import React from "react";
import { partners } from "../data";
import { Globe, Users, ShieldAlert, Award, Handshake, CheckSquare } from "lucide-react";

export default function PartnershipSection() {
  const iconList = [Globe, Users, Handshake, Award];

  return (
    <section id="partners" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Ambience Backing */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.03),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/30">
              GLOBAL EXCLUSIVE PARTNERSHIPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight leading-none">
              대기업들과 맺은
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                견고한 독점 기술 동맹
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              알토케어 솔루션은 모사나 임의 제작품이 아닙니다. 해외 일급 인산철 셀 수급 보장 및 최고성능 임베디드 펌웨어 제휴를 바탕으로 기술 자립과 글로벌 판로를 완벽하게 선도하고 있습니다.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 flex items-start space-x-4">
              <ShieldAlert className="w-8 h-8 text-cyan-400 shrink-0 mt-1" />
              <div className="text-left">
                <h4 className="text-sm font-bold text-white mb-1">안정적 셀 수급 및 단가 경쟁력 확보</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  중국 Xinhui Group 8만 평 제조 2공장 인프라와 Troncube BMS 기술 독점 실시권 획득을 완료하여 시장의 LFP 원자재 가격 급등 현상에서도 고정적이고 합리적인 단가로 안정 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Grid Partnerships Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {partners.map((pt, idx) => {
            const Icon = iconList[idx] || Globe;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-slate-950/40 border border-slate-850 hover:border-emerald-500/20 hover:bg-slate-950/60 transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-350 group-hover:text-emerald-400 group-hover:border-emerald-500/25 transition-all">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {pt.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider block uppercase">
                      {pt.country} | {idx < 2 ? "EXCLUSIVE LICENSE" : "DOMESTIC ALLIANCE"}
                    </span>
                  </div>
                </div>

                <div className="pb-4 mb-4 border-b border-slate-850 font-sans">
                  <span className="text-xs font-bold text-emerald-450 block mb-1">핵심 제휴 내용 :</span>
                  <span className="text-xs font-semibold text-slate-250 italic bg-emerald-950/10 border border-emerald-950 px-2 py-1 rounded inline-block">
                    {pt.collaboration}
                  </span>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{pt.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
