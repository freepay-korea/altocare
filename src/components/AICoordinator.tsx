import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, BatteryCharging, AlertCircle, Bot, User, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "model";
  content: string;
}

interface AICoordinatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AICoordinator({ isOpen, onClose }: AICoordinatorProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "반갑습니다! AI 기반 응용 소프트웨어 혁신 스타트업 **알토케어(Altocare) AI 솔루션 어드바이저**입니다. Claude 등 최신 AI 기술을 활용해 사용자의 일상과 업무를 돕는 애플리케이션 개발 및 맞춤형 솔루션에 대해 궁금한 점을 편하게 물어보세요! 친절하게 안내해 드리겠습니다.",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userText = inputText;
    setInputText("");
    setErrorMsg("");

    const newMessages = [...messages, { role: "user" as const, content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("서버와의 통신에 실패했습니다.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { role: "model", content: data.reply }]);
    } catch (err: any) {
      console.warn("Backend not reachable (static hosting / GitHub Pages environment). Using smart fallback:", err);
      // Fallback response for static hosting environments like GitHub Pages
      let fallbackText = "알토케어(Altocare)는 Claude 등 최신 AI 기술을 활용해 사용자의 일상과 업무를 돕는 AI 기반 응용 소프트웨어를 개발하는 스타트업입니다.";
      if (userText.includes("소개") || userText.includes("회사") || userText.includes("알토케어")) {
        fallbackText = "알토케어는 AI 기반 응용 소프트웨어 전문 개발 기업입니다. 최신 LLM 및 Claude 기술을 토대로 비즈니스 워크플로우를 자동화하고 사용자의 생산성을 극대화하는 솔루션을 제공합니다.";
      } else if (userText.includes("문의") || userText.includes("연락") || userText.includes("견적") || userText.includes("이메일")) {
        fallbackText = "개발 및 협업 문의는 공식 이메일 **kssu5632@powerkon.kr** 또는 사이트 하단의 문의하기 폼을 작성해 주시면 담당자가 빠르게 연락드리겠습니다.";
      } else if (userText.includes("Claude") || userText.includes("기술")) {
        fallbackText = "알토케어는 Anthropic의 Claude를 비롯한 최첨단 파운데이션 모델을 결합하여 고도의 자연어 처리와 스마트 의사결정을 지원하는 애플리케이션을 구축합니다.";
      }
      setMessages((prev) => [...prev, { role: "model", content: fallbackText }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggest = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.95 }}
          className="fixed bottom-6 right-4 sm:right-6 lg:right-8 z-50 w-full max-w-[420px] h-[550px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col font-sans"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-500/20 via-slate-900/10 to-cyan-500/10 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-left">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shrink-0">
                <BatteryCharging className="w-5 h-5 text-slate-950 stroke-[2.3]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-1">
                  Altocare AI 어드바이저
                  <span className="text-[9px] bg-emerald-950 text-emerald-300 font-mono px-2 py-0.5 rounded-full border border-emerald-900/30">
                    ONLINE
                  </span>
                </h3>
                <span className="text-[10px] text-slate-400 block tracking-wide">
                  AI 응용 소프트웨어 실시간 상담
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-805 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation messages center list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/20 text-left">
            {messages.map((msg, idx) => {
              const isModel = msg.role === "model";
              return (
                <div key={idx} className={`flex ${isModel ? "justify-start" : "justify-end"} items-start space-x-2.5`}>
                  {isModel && (
                    <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0 text-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-[80%] leading-relaxed ${
                      isModel
                        ? "bg-slate-900 text-slate-200 rounded-tl-none border border-slate-850"
                        : "bg-emerald-500 text-slate-950 font-bold rounded-tr-none shadow-md shadow-emerald-500/5 select-none"
                    }`}
                  >
                    {/* Render helper basic formatting for markdown bolding/italics */}
                    <p className="whitespace-pre-line font-sans tracking-wide">
                      {msg.content.split("**").map((text, sIdx) => {
                        if (sIdx % 2 === 1) {
                          return (
                            <strong key={sIdx} className="font-extrabold underline decoration-cyan-500/40">
                              {text}
                            </strong>
                          );
                        }
                        return text;
                      })}
                    </p>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start items-center space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0 text-xs animate-spin">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <div className="p-3 bg-slate-900 rounded-2xl rounded-tl-none border border-slate-850 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-950 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-xs text-rose-300 leading-normal">{errorMsg}</p>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions Tags Bubble */}
          <div className="p-2 border-t border-slate-850 bg-slate-900/40 flex gap-1.5 overflow-x-auto select-none no-scrollbar">
            {[
              "알토케어 소개?",
              "주요 AI 기술?",
              "앱 개발 문의?",
              "Claude 활용 사례?",
            ].map((sug, sidx) => (
              <button
                key={sidx}
                onClick={() => handleSuggest(sug)}
                className="px-3 py-1.2 sm:py-1.5 rounded-full bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-750 text-[10.5px] font-sans font-semibold shrink-0 cursor-pointer transition-all"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Textarea submit box footer */}
          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="궁금하신 AI 응용 소프트웨어 문의사항을 입력하세요..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 hover:brightness-105 active:scale-95 transition-all text-slate-950 disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none cursor-pointer flex justify-center items-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
