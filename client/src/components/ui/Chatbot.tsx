import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { getBotReply } from "../../services/chatbotService";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../../assets/images/doctor/doctor-profile.jpg";
import doctorSticker from "../../assets/images/ai/doctor-sticker.png";

type Message = {
  sender: "bot" | "user";
  text: string;
  time: string;
};

const getTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const GREETINGS = {
  en: "Welcome to Spark Diagnostics 👋\nI can help you choose tests, understand reports, and guide health checkups.",
  kn: "ಸ್ಪಾರ್ಕ್ ಡಯಾಗ್ನಾಸ್ಟಿಕ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ 👋\nನಾನು ನಿಮಗೆ ಪರೀಕ್ಷೆಗಳನ್ನು ಆರಿಸಲು, ವರದಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಆರೋಗ್ಯ ಪರೀಕ್ಷೆಗಳನ್ನು ಮಾರ್ಗದರ್ಶನ ಮಾಡಲು ಸಹಾಯ ಮಾಡಬಹುದು.",
};

const SUGGESTIONS = {
  en: ["Fever", "Diabetes", "Thyroid", "Health Checkup"],
  kn: ["ಜ್ವರ", "ಮಧುಮೇಹ", "ಥೈರಾಯ್ಡ್", "ಆರೋಗ್ಯ ಪರೀಕ್ಷೆ"],
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "kn" | null>(null);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("spark-chat");
      if (saved) setMessages(JSON.parse(saved));
    } catch {
      localStorage.removeItem("spark-chat");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spark-chat", JSON.stringify(messages));
  }, [messages]);

useEffect(() => {
  if (open && language && !initialized && messages.length === 0) {
    setInitialized(true);

    setMessages([
      {
        sender: "bot",
        text: GREETINGS[language],
        time: getTime(),
      },
    ]);
  }
}, [open, language, initialized, messages.length]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
  if (!input.trim()) return;

  const userMessage: Message = {
    sender: "user",
    text: input,
    time: getTime(),
  };

  setMessages((prev) => [...prev, userMessage]);

  // ✅ Use scalable knowledge engine with language support
  const reply = getBotReply(input, language || "en");

  setTyping(true);

  setTimeout(() => {
    setTyping(false);

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: reply, time: getTime() },
    ]);
  }, 1200);

  setInput("");
};


  return (
    <>
      <style>
        {`
          @keyframes gentleWave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
          }
          
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }

          .chatbot-sticker-wrapper {
            position: fixed;
            bottom: 6px;
            right: 16px;
            z-index: 50;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            cursor: pointer;
            animation: pulseGlow 2s infinite;
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            justify-center;
          }

          .chatbot-sticker-wrapper:hover {
            transform: scale(1.05);
          }

          .chatbot-sticker-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            animation: gentleWave 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Floating Button with Doctor Sticker */}
      <button
        onClick={() => setOpen(!open)}
        className="chatbot-sticker-wrapper md:bottom-6 md:right-6"
      >
        <img src={doctorSticker} alt="Doctor Assistant" className="chatbot-sticker-img" />
      </button>

      {/* Language Selection Modal */}
      <AnimatePresence>
        {open && !language && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm w-[90%] text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Select Language</h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ</p>

              <div className="space-y-3">
                <button
                  onClick={() => setLanguage("en")}
                  className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-emerald-500/50 transition"
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("kn")}
                  className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-emerald-500/50 transition"
                >
                  ಕನ್ನಡ (Kannada)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && language && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 w-[75%] md:w-80 h-[450px] md:h-[500px] bg-white rounded-2xl shadow-soft flex flex-col overflow-hidden z-50"
          >
          {/* Header */}
            <div className="bg-primary text-white p-3 md:p-4 flex items-center gap-2 md:gap-3 justify-between">
              <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                <img
                  src={avatar}
                  className="w-8 md:w-10 h-8 md:h-10 rounded-3xl shadow-soft object-cover border border-white/20 flex-shrink-0"
                  alt="Assistant"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base truncate">Spark Health Assistant</p>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setLanguage(null)}
                className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition flex-shrink-0 whitespace-nowrap"
              >
                {language === "en" ? "ಕನ್ನಡ" : "English"}
              </button>
            </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2 md:space-y-3 bg-background">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-3 md:px-4 py-2 rounded-2xl max-w-[85%] text-xs md:text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white shadow-soft"
                  }`}
                >
                  {msg.text}
                  <p className="text-[10px] opacity-60 mt-1 text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white shadow-soft px-4 py-2 rounded-2xl text-sm">
                  typing...
                </div>
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* Quick Suggestions */}
          <div className="px-2 md:px-3 py-2 flex flex-wrap gap-1 md:gap-2 border-t bg-slate-50">
            {SUGGESTIONS[language || "en"].map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="text-[10px] md:text-xs bg-gradient-to-r from-primary to-emerald-600 text-white px-2 md:px-3 py-1 rounded-full hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-emerald-500/50 transition whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 md:p-3 border-t flex gap-2 bg-white">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type message..."
              className="flex-1 border rounded-xl px-2 md:px-3 py-2 text-xs md:text-sm outline-none focus:ring-1 focus:ring-primary"
            />

            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="bg-gradient-to-r from-primary to-emerald-600 text-white p-2 md:p-2 rounded-xl disabled:opacity-50 hover:bg-primary/90 hover:shadow-lg hover:shadow-emerald-500/50 transition flex-shrink-0"
            >
              <Send size={16} className="md:w-[18px] md:h-[18px]" />
            </button>
          </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}