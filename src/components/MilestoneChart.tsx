import React, { useState } from "react";
import { milestones } from "../data";
import { TrendingUp, Award, Calendar, DollarSign, AwardIcon, Bookmark } from "lucide-react";
import { motion } from "motion/react";

export default function MilestoneChart() {
  const [selectedYearIdx, setSelectedYearYearIdx] = useState(0);

  // 2026~2030 projected revenues in KRW (hundred millions)
  const revenueData = [
    { year: "2026년", value: 34.8, subVal: "HOME ESS 국내 본격 출시 및 전동골프카트 SMT 양산 시작" },
    { year: "2027년", value: 120, subVal: "서유럽, 남유럽 정부 보조금 연계 대규모 가구 수출 확대" },
    { year: "2028년", value: 224, subVal: "사용후 LFP배터리 리사이클링 및 재재조 공정 라인 확보" },
    { year: "2029년", value: 416, subVal: "방산 전용 특수 목적 전원 민수 양산 및 북미 에너지 지사 가동" },
    { year: "2030년", value: 748, subVal: "글로벌 홈 ESS Top-Tier 특화 달성 및 기술성평가 IPO 주식 상장" },
  ];

  const maxVal = 800; // for chart scaling

  return (
    <section id="vision" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Caption Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-405 uppercase bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/30">
            BUSINESS BLUEPRINT & VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            5개년 연간 매출 목표 및
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              글로벌 Top-Tier 도약 마일스톤
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            알토케어는 안정적인 원자재 독점 보호막 아래 고부가가치 방산/산업 배터리와 HOME ESS 수출을 양 날개 삼아, 연평균 14.5% 이상의 영업이익과 투명한 성장을 실천합니다.
          </p>
        </div>

        {/* Outer Box containing Chart and Milestone detail lists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Revenue Chart Box Left */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-800 relative">
            <div className="absolute top-4 right-4 flex items-center space-x-1 text-[10px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>추정 매출액 추이 (단위: 억원)</span>
            </div>

            <div className="text-left mb-6">
              <h3 className="text-lg font-bold text-white">5개년 장기 추정 매출 지표</h3>
              <span className="text-xs text-slate-400">2030년 대한민국 배터리 국가 공인 강소 1위 도약</span>
            </div>

            {/* Custom SVG Interactive Bar Chart */}
            <div className="h-64 sm:h-76 w-full flex items-end justify-between px-2 sm:px-6 pb-6 border-b border-slate-800/80 mt-4 relative font-mono select-none">
              {revenueData.map((item, idx) => {
                const heightPercent = `${(item.value / maxVal) * 100}%`;
                const isSelected = selectedYearIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedYearYearIdx(idx)}
                    className="flex flex-col items-center group cursor-pointer w-[16%] relative"
                  >
                    {/* Floating Value indicator */}
                    <div
                      className={`absolute -top-12 z-20 transition-all duration-300 transform scale-90 sm:scale-100 ${
                        isSelected
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                      }`}
                    >
                      <div className="px-2.5 py-1 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 text-[10px] sm:text-xs font-bold font-mono tracking-tight shrink-0 shadow-md">
                        {item.value}억
                      </div>
                    </div>

                    {/* Bar Pillar */}
                    <div className="w-full relative h-48 sm:h-56 flex items-end">
                      <div
                        style={{ height: heightPercent }}
                        className={`w-full rounded-t-lg transition-all duration-500 relative ${
                          isSelected
                            ? "bg-gradient-to-t from-cyan-600 via-emerald-500 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                            : "bg-slate-800 hover:bg-slate-705 border border-slate-700/50"
                        }`}
                      >
                        {/* Glow beam */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-white/10 rounded-t-lg"></div>
                        )}
                      </div>
                    </div>

                    {/* Year Label */}
                    <span
                      className={`text-[10px] sm:text-xs tracking-tight mt-3 transition-colors ${
                        isSelected ? "text-emerald-400 font-bold" : "text-slate-400"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Selected Value Extra details panel */}
            <div className="mt-6 text-left p-4 rounded-xl bg-slate-950/40 border border-slate-850">
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider block mb-1">
                {revenueData[selectedYearIdx].year} 추정 목표 가치 실현
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-sans tracking-wide leading-relaxed">
                {revenueData[selectedYearIdx].subVal}
              </p>
            </div>
          </div>

          {/* Milestones Right Box Detail lists */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-800 text-left">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-emerald-400" />
                연도별 기술 및 사업 마일스톤
              </h3>
              <span className="text-xs text-slate-400">선택된 년도의 주요 사업 계획 및 실현 목표입니다.</span>
            </div>

            {/* Custom Tab Selector based on chronological order of milestones */}
            <div className="flex border-b border-slate-800 mb-6 font-mono text-xs sm:text-sm">
              {milestones.map((ms, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedYearYearIdx(idx)}
                  className={`flex-1 text-center py-2.5 font-bold transition-all cursor-pointer ${
                    selectedYearIdx === idx
                      ? "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {ms.year}
                </button>
              ))}
              {/* Force extra tab for final placeholder milestone selection */}
              <button
                onClick={() => setSelectedYearYearIdx(3)}
                className={`flex-1 text-center py-2.5 font-bold transition-all cursor-pointer ${
                  selectedYearIdx === 3
                    ? "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                2028-2030
              </button>
            </div>

            {/* Milestone List Items */}
            <div className="flex-1 space-y-4">
              {milestones[selectedYearIdx]?.items.map((it, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/40 border border-slate-850 flex items-start space-x-3.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-950 text-emerald-450 border border-emerald-900 text-[10px] font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                    {it}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
