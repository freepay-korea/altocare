import React, { useState, useEffect } from "react";
import { Calculator, CircleDollarSign, Leaf, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

export default function EnergyCalculator() {
  const [householdType, setHouseholdType] = useState<"apt" | "house" | "shop">("apt");
  const [monthlyBill, setMonthlyBill] = useState<number>(80000); // monthly electricity bill in KRW
  const [solarOption, setSolarOption] = useState<number>(100); // solar capacity in W

  // calculated outputs
  const [recommendedBlocks, setRecommendedBlocks] = useState<number>(1);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [co2Reduction, setCo2Reduction] = useState<number>(0);
  const [pineTrees, setPineTrees] = useState<number>(0);

  useEffect(() => {
    // 1. Calculate recommended modules counts
    let blocks = 1;
    if (householdType === "apt") {
      blocks = monthlyBill < 100000 ? 1 : 2;
    } else if (householdType === "house") {
      blocks = monthlyBill < 120050 ? 2 : 4;
    } else {
      blocks = monthlyBill < 150000 ? 4 : 8;
    }
    setRecommendedBlocks(blocks);

    // 2. Calculate savings estimations
    // Average savings rate: Base savings (ESS peak shifting) + solar compensation
    const basicReductionRate = 0.22; // 20% savings via ESS smart load management
    const solarMultiplier = solarOption === 0 ? 0 : solarOption === 100 ? 0.08 : solarOption === 200 ? 0.15 : 0.28;
    const finalReductionRate = Math.min(0.55, basicReductionRate + solarMultiplier);

    const calculatedAnnualSavings = Math.round(monthlyBill * 12 * finalReductionRate);
    setAnnualSavings(calculatedAnnualSavings);

    // 3. Carbon emission reduction formulas
    // Average 1 kWh reduction compensates 0.466 kg transition carbon
    const estimatedKwhReduced = (calculatedAnnualSavings / 115) || 50; 
    const calculatedCo2 = Math.round(estimatedKwhReduced * 0.466);
    setCo2Reduction(calculatedCo2);

    // 1 pine tree absorbs 6.6kg carbon per year
    const calculatedTrees = Math.round(calculatedCo2 / 6.6) || 1;
    setPineTrees(calculatedTrees);
  }, [householdType, monthlyBill, solarOption]);

  const handleReset = () => {
    setHouseholdType("apt");
    setMonthlyBill(80000);
    setSolarOption(100);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/30">
            INTERACTIVE CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight leading-none">
            우리집 전기요금 기준
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              실시간 에너지 절감액 시뮬레이터
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            거주 형태 및 전력 사용 세부사항을 기반으로 알토케어 LFP ESS와 태양광 패널 매칭 시 예상되는 가계 지출 축소 효과를 과학적으로 모사해 보세요.
          </p>
        </div>

        {/* Dashboard Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          {/* Inputs Section Left */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-950/45 border border-slate-800 text-left flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  전력 기초환경 설정
                </h3>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  설정 초기화
                </button>
              </div>

              {/* Step 1: Household Type Radio Buttons */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-3">
                  거주 및 시설 형태 선택
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "apt", name: "아파트 베란다" },
                    { id: "house", name: "단독 주택형" },
                    { id: "shop", name: "소상공인/농가" },
                  ].map((it) => (
                    <button
                      key={it.id}
                      onClick={() => setHouseholdType(it.id as any)}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        householdType === it.id
                          ? "bg-slate-900 border-emerald-500 text-emerald-400 font-bold"
                          : "bg-slate-950 border-slate-850 hover:bg-slate-900 text-slate-400"
                      }`}
                    >
                      {it.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Monthly bill range slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                    월평균 납부 전기요금
                  </label>
                  <span className="text-sm font-black text-emerald-400 font-mono">
                    {monthlyBill.toLocaleString()}원
                  </span>
                </div>
                <input
                  type="range"
                  min={30000}
                  max={300000}
                  step={10000}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-900 accent-emerald-500 cursor-pointer outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
                  <span>3만 원</span>
                  <span>15만 원</span>
                  <span>30만 원</span>
                </div>
              </div>

              {/* Step 3: Solar options selector */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-3">
                  태양광 연계 발전 옵션
                </label>
                <div className="grid grid-cols-4 gap-2.1">
                  {[
                    { size: 0, name: "미연계" },
                    { size: 100, name: "100W 플렉스" },
                    { size: 200, name: "200W 더블" },
                    { size: 400, name: "400W 패밀리" },
                  ].map((x) => (
                    <button
                      key={x.size}
                      onClick={() => setSolarOption(x.size)}
                      className={`py-2.5 rounded-lg text-xs font-sans tracking-tight border transition-all cursor-pointer ${
                        solarOption === x.size
                          ? "bg-slate-900 border-cyan-500 text-cyan-400 font-bold"
                          : "bg-slate-950 border-slate-850 hover:bg-slate-900 text-slate-400"
                      }`}
                    >
                      {x.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Warning disclaimer */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-950 flex items-start space-x-2.5 mt-4">
              <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                해당 시뮬레이션 계산 지표는 한국전력 누진세 표준 요금 체계를 기준으로 설계되었으며, 기후 환경 및 개별 가구 실 전기사용 피크 시점에 따라 다소 상이할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Result Section Right Dashboard */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Shine background */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>

            {/* Result Header */}
            <div className="text-left mb-6">
              <span className="text-[10px] text-emerald-400 font-mono tracking-widest block uppercase">
                ESTIMATED RESULTS
              </span>
              <h3 className="text-xl font-bold text-white mt-1">예상 지출 축소 & 친환경 기여 지표</h3>
            </div>

            {/* Recommendations Blocks Badge banner */}
            <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-85 * grid grid-cols-12 gap-4 items-center mb-6">
              <div className="col-span-8 text-left">
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest block uppercase">
                  RECOMMENDED CONFIG
                </span>
                <span className="text-sm font-bold text-white">
                  알토케어 HOME ESS {recommendedBlocks}개 모듈 적층
                </span>
                <span className="block text-xs text-slate-400 font-sans mt-0.5">
                  총 전력 보존 용량: {(recommendedBlocks * 2.4).toFixed(1)} kWh 설치 제안
                </span>
              </div>
              <div className="col-span-4 justify-end flex">
                <div className="px-3.5 py-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-slate-950 text-sans text-xs font-black shadow-lg">
                  {recommendedBlocks} BLOCKS
                </div>
              </div>
            </div>

            {/* Numerical indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {/* Box 1: Dollar savings */}
              <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-2xl">
                <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                  <CircleDollarSign className="w-5 h-5 stroke-[1.8]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    연간 예상 절감 전기 요금
                  </span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-white font-mono leading-none">
                  약 {annualSavings.toLocaleString()}
                  <span className="text-xs text-slate-400 font-sans font-medium ml-1">원</span>
                </div>
                <span className="text-[10.5px] text-slate-400 block mt-1.5 font-sans leading-none">
                  월평균 {(Math.round(annualSavings / 12)).toLocaleString()}원 가사 지출 복리 절감됨
                </span>
              </div>

              {/* Box 2: Carbon leaf indicator */}
              <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-2xl">
                <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                  <Leaf className="w-5 h-5 stroke-[1.8]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    연간 CO₂ 탄소 배출 감소량
                  </span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-white font-mono leading-none">
                  약 {co2Reduction}
                  <span className="text-xs text-slate-400 font-sans font-medium ml-1">kg CO₂</span>
                </div>
                <span className="text-[10.5px] text-slate-400 block mt-1.5 font-sans leading-none">
                  매년 성한 <span className="text-emerald-400 font-black">{pineTrees}그루</span>의 소나무를 심는 효과
                </span>
              </div>
            </div>

            {/* AI consultant link block */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 border border-emerald-500/10 text-left">
              <span className="text-[10px] text-emerald-400 font-mono tracking-widest block uppercase font-bold">
                PRO ACTIVE RECOMMENDATION
              </span>
              <p className="text-xs text-slate-350 mt-1 lines-relaxed">
                알토케어 LFP 시스템은 하루 1회 충방전 기준 무려 <span className="text-white font-bold">6,500회(17년 상당)</span> 수명 가치가 상업적으로 안전하게 보장됩니다. 더 상세한 오프그리드 견적 조언이 필요하시다면 하단의 실시간 AI 버튼을 통해 맞춤 처방을 즉각 받아보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
