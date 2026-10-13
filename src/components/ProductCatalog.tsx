import React, { useState } from "react";
import { products, Product } from "../data";
import { Info, Check, Shield, Award, Layers, Zap, InfoIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ess" | "custom_pack" | "charger" | "solar">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", name: "전체 제품" },
    { id: "ess", name: "HOME ESS" },
    { id: "custom_pack", name: "맞춤형 배터리 팩" },
    { id: "charger", name: "전기차 충전기" },
    { id: "solar", name: "태양광 패널" },
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-900/30">
            PRODUCT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            용도와 규격을 뛰어넘는
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              알토케어 공식 라인업 및 솔루션
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            친환경 고품질 LFP 배터리와 특허받은 히트싱크 케이싱 공법을 결합하여 완성한, 주거용 및 고부가가치 특수 기기용 포괄적 제품군을 전격 공개합니다.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/10 scale-102"
                  : "bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Framer Motion Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={prod.id}
                className="group relative rounded-3xl p-6 sm:p-8 bg-slate-900/30 border border-slate-800 hover:border-cyan-500/20 hover:bg-slate-900/40 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/5 to-emerald-500/0 rounded-full blur-xl group-hover:scale-110 transition-transform"></div>

                <div>
                  {/* Card category tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider font-bold text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-900/30 px-2.5 py-1 rounded-full">
                      {prod.category === "ess"
                        ? "HOME ESS"
                        : prod.category === "custom_pack"
                        ? "CUSTOM BATTERY PACK"
                        : prod.category === "charger"
                        ? "EV CHARGER"
                        : "SOLAR ENERGY"}
                    </span>
                    {prod.id === "pk-home-ess" && (
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-900/20">
                        추천 베스트셀러
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {prod.name}
                  </h3>
                  <span className="text-xs text-slate-400 block font-sans mb-3">{prod.subName}</span>

                  <p className="text-sm font-bold text-slate-200 mb-4">{prod.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {prod.description}
                  </p>

                  {/* Icon Checklist Preview */}
                  <ul className="space-y-2 mb-8">
                    {prod.features.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start text-xs text-slate-350">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Show details CTA */}
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="w-full py-3.5 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-slate-900 hover:border-slate-700 text-slate-300 font-bold hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Info className="w-4 h-4 text-cyan-400" />
                  제품 상세사양 및 규격 보기
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Specifications Overlay Drawer Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-850 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal header */}
              <div className="pb-6 border-b border-slate-800/80 mb-6 text-left">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded-full border border-cyan-900/30 uppercase">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-black text-white mt-3">{selectedProduct.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedProduct.subName}</p>
              </div>

              {/* Modal content body */}
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-2">
                    개요 및 설명
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Specs Specifications Table */}
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-3">
                    상세 기계적 공학 규격
                  </h4>
                  <div className="rounded-xl border border-slate-800 overflow-hidden font-sans">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-950/50 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                          <th className="px-4 py-2">상세 측정 파라미터</th>
                          <th className="px-4 py-2">공학 설계 사양</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-xs">
                        {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                          <tr key={key} className="hover:bg-slate-850/40">
                            <td className="px-4 py-2.5 font-bold text-slate-300 bg-slate-950/20">{key}</td>
                            <td className="px-4 py-2.5 text-slate-400 font-mono">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* All Detailed Checklist */}
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-3">
                    소프트웨어 및 기능 장점
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-450 mr-2 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Close CTA footer */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
