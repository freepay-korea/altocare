import React, { useState, useEffect } from "react";
import { Mail, Phone, Briefcase, FileText, CheckCircle2, Trash2, HelpCircle } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  content: string;
  timestamp: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("AI 응용 소프트웨어 개발 문의");
  const [content, setContent] = useState("");
  
  const [submittedInquiries, setSubmittedInquiries] = useState<Inquiry[]>([]);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  useEffect(() => {
    const list = localStorage.getItem("altocare_inquiries");
    if (list) {
      setSubmittedInquiries(JSON.parse(list));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !content.trim()) return;

    const newInquiry: Inquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      inquiryType,
      content,
      timestamp: new Date().toLocaleString("ko-KR"),
    };

    const updatedList = [newInquiry, ...submittedInquiries];
    setSubmittedInquiries(updatedList);
    localStorage.setItem("altocare_inquiries", JSON.stringify(updatedList));

    // Reset fields
    setName("");
    setEmail("");
    setPhone("");
    setContent("");

    // Show Success Banner
    setShowSuccessBanner(true);
    setTimeout(() => {
      setShowSuccessBanner(false);
    }, 4500);
  };

  const handleDelete = (id: string) => {
    const updated = submittedInquiries.filter((item) => item.id !== id);
    setSubmittedInquiries(updated);
    localStorage.setItem("altocare_inquiries", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-900/30">
            PARTNERSHIP & CONSULTING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight leading-none">
            알토케어 AI 솔루션 및
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              비즈니스 협력 제휴 문의
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            알토케어의 AI 기반 응용 소프트웨어 개발 및 맞춤 솔루션 프로젝트 가동에 참여해 보세요. 하단 폼을 입력 즉시 담당 엔지니어가 직접 연락드립니다.
          </p>
        </div>

        {/* Form and List Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          {/* Inquiry form Left */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-900/30 border border-slate-800 rounded-3xl text-left flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="pb-4 border-b border-slate-800 mb-6 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  온디맨드 매칭 문의서 작성
                </h3>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider">ALL FIELDS REQUIRED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    신청자 성함 / 기업명
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-650 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    대표 연락처
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-1234-5678"
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-650 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  소통용 이메일 주소
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-650 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Inquiry Type selection dropdown */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  상담 신청 성격 분류
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                >
                  <option>AI 응용 소프트웨어 개발 문의</option>
                  <option>기업 맞춤형 AI 솔루션 도입 상담</option>
                  <option>Claude 기반 워크플로우 자동화 제휴</option>
                  <option>기술 협력 및 파트너십</option>
                </select>
              </div>

              {/* Request content textarea */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  세부 요청 내용 / 궁금하신 사항
                </label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="예: 업무 효율화를 위한 Claude 기반 AI 응용 소프트웨어 도입 범위 및 개발 견적을 문의드립니다."
                  className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-650 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:brightness-105 hover:scale-[1.01] active:scale-99 transition-all text-slate-950 font-black tracking-wide text-sm cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                알토케어 솔루션 문의 신청서 전송
              </button>
            </form>

            {/* In-app success alert banner */}
            {showSuccessBanner && (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-900/50 text-left flex items-start space-x-3 animate-fade-in shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block mb-0.5">신청서가 완벽하게 접수되었습니다!</span>
                  <span className="text-slate-450 block leading-relaxed">
                    입력하신 정보는 브라우저 내부 스토리지에 기록되었으며, 알토케어 담당자가 실시간으로 접수하여 빠른 시간 내에 최적의 조언 지표와 이메일을 발송하겠습니다.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Submitted inquiries display and lists Right */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-900/30 border border-slate-800 rounded-3xl flex flex-col justify-between text-left">
            <div>
              <div className="pb-4 border-b border-slate-800 mb-6">
                <h3 className="text-base sm:text-lg font-bold text-white">나의 전송 신청 기록</h3>
                <span className="text-xs text-slate-400">
                  로컬 스토리지 데이터 동기화 기반 실시간 신청 이력 확인 테이블입니다.
                </span>
              </div>

              {submittedInquiries.length === 0 ? (
                <div className="h-68 sm:h-76 flex flex-col justify-center items-center rounded-2xl border border-dashed border-slate-800 p-6 text-center select-none text-slate-500 gap-2">
                  <Mail className="w-10 h-10 text-slate-600 stroke-[1.5]" />
                  <span className="text-xs font-semibold">아직 전송된 견적 신청서가 없습니다.</span>
                  <span className="text-[10px] text-slate-600">왼쪽 폼을 채워 첫 견적서를 제출해 보세요!</span>
                </div>
              ) : (
                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1 no-scrollbar select-none">
                  {submittedInquiries.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-slate-950/40 border border-slate-850 hover:border-slate-800/80 transition-all text-xs flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-bold text-white text-sm">{item.name} 님</span>
                          <span className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full ml-2 font-mono">
                            {item.inquiryType}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1 rounded-md text-slate-500 hover:text-rose-400 hover:bg-slate-900 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mb-2 text-slate-400 space-y-0.5">
                        <p className="font-mono">이메일: {item.email}</p>
                        <p className="font-mono">연락처: {item.phone}</p>
                        <p className="font-sans leading-relaxed text-slate-300 mt-2 bg-slate-950/20 p-2.5 rounded-lg border border-slate-900 [white-space:pre-line]">
                          {item.content}
                        </p>
                      </div>

                      <span className="text-[9px] text-slate-500 block text-right font-mono mt-1">
                        전송 시각: {item.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick company info block */}
            <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-850 text-xs sm:text-sm text-slate-400 space-y-1.5 mt-6 font-sans text-left">
              <div>
                <span className="text-slate-500 block uppercase font-bold text-[9px] font-mono">Company Info</span>
                <span className="text-white font-bold">알토케어 (Altocare)</span>
                <span className="text-slate-400 text-xs block mt-0.5">
                  대표: 김수연 | 사업자등록번호: 246-02-03757
                </span>
                <span className="text-slate-400 text-xs block">
                  업태: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업
                </span>
              </div>
              <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 block uppercase font-bold text-[9px] font-mono">Official Email</span>
                  <a href="mailto:kssu5632@powerkon.kr" className="text-cyan-400 font-mono select-text hover:underline">
                    kssu5632@powerkon.kr
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-1 rounded-full font-mono">
                    AI STARTUP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
