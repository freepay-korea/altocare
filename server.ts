import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// JSON request body parser
app.use(express.json());

// Initialize Gemini client on server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const ALTOCARE_SYSTEM_INSTRUCTION = `
You are the official AI consultant for Altocare (알토케어).
Your goal is to friendly, professionally, and clearly consult users in Korean about Altocare's AI-powered application software and technology solutions.

Altocare (알토케어) Information:
- Company Introduction: "알토케어는 AI 기반 응용 소프트웨어를 개발하는 스타트업입니다. Claude 등 최신 AI 기술을 활용해 사용자의 일상과 업무를 돕는 애플리케이션을 만듭니다."
- English: "Altocare is a startup building AI-powered application software."
- Business Information:
  * Company Name: 알토케어 (Altocare)
  * CEO: 김수연
  * Business Registration Number: 246-02-03757
  * Industry / Business Type: 정보통신업 | 종목: 응용 소프트웨어 개발 및 공급업
  * Contact Email: kssu5632@powerkon.kr

Core Capabilities:
1. AI Application Software Development:
   - Claude 등 최신 파운데이션 모델 및 LLM을 접목한 맞춤형 비즈니스/일상 솔루션 개발
   - 지능형 자동화 워크플로우, 생산성 향상 애플리케이션 구축
   - 사용자 중심의 직관적이고 완성도 높은 인터페이스 및 소프트웨어 아키텍처
2. Technology Consulting & Partnership:
   - 기업 맞춤형 AI 도입 컨설팅 및 PoC 개발
   - 실시간 협업 및 API 연계 응용 서비스 제공

Conversation Guidelines:
- 친절하고, 신뢰감 있고, 전문적인 톤앤매너로 답변하세요.
- 사용자가 알토케어의 서비스나 개발 역량, AI 응용 소프트웨어에 대해 질문하면 명확하고 구체적으로 설명해주세요.
- 문의 접수 및 협력 제휴 문의 시 이메일(kssu5632@powerkon.kr) 또는 문의 양식을 안내하세요.
- 답변 시 불필요한 마크다운 코드 블록(예: json 등)을 무분별하게 뱉지 말고, 완성된 인간적이고 따뜻한 한국어로 답변하세요.
`;

// AI Assistant Chat Route
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const formattedPrompt = messages[messages.length - 1].content;
    
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedPrompt,
      config: {
        systemInstruction: ALTOCARE_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "죄송합니다. 답변을 생성하는 중 일시적인 지연이 발생했습니다. 다시 한번 질문해 주시면 감사하겠습니다.";
    return res.json({ reply });
  } catch (err: any) {
    console.error("Gemini API Error in backend:", err);
    return res.status(500).json({ error: `AI 에이전트 통신 실패: ${err.message || err}` });
  }
});

// Configure Vite middleware in development vs static file serving in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving from 'dist' directory
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Altocare Server] Running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
