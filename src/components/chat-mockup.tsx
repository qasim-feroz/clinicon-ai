import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, CheckCheck, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    text: "Hi, are you open today?",
    sender: "user",
    time: "07:00 PM",
  },
];

const SEQUENCE = [
  { delay: 1000, type: "typing", sender: "ai" as const },
  {
    delay: 2500,
    type: "message",
    message: {
      id: "2",
      text: "Hello! The clinic is closed right now, but I can book an appointment for you tomorrow.",
      sender: "ai" as const,
      time: "07:00 PM",
    },
  },
  { delay: 4000, type: "message", message: { id: "3", text: "That sounds perfect, thank you.", sender: "user" as const, time: "07:01 PM" } },
  { delay: 5000, type: "typing", sender: "ai" as const },
  {
    delay: 6500,
    type: "message",
    message: {
      id: "4",
      text: "Great! I have availability tomorrow at 2:00 PM or 4:30 PM. Which time works best for you?",
      sender: "ai" as const,
      time: "07:01 PM",
    },
  },
  { delay: 8000, type: "message", message: { id: "5", text: "2:00 PM works for me, please.", sender: "user" as const, time: "07:01 PM" } },
  { delay: 9000, type: "typing", sender: "ai" as const },
  {
    delay: 10500,
    type: "message",
    message: {
      id: "6",
      text: "Perfect, your consultation is booked for tomorrow at 2:00 PM. We'll send a reminder one hour before.",
      sender: "ai" as const,
      time: "07:02 PM",
    },
  },
];

const BEFORE_MESSAGES: Message[] = [
  {
    id: "b1",
    text: "Hi, are you open today?",
    sender: "user",
    time: "07:00 PM",
  },
  {
    id: "b2",
    text: "Sorry, we are currently closed. Our clinic hours are from 2:00 PM to 6:00 PM",
    sender: "ai",
    time: "07:00 PM",
  },
];

export function ChatMockup() {
  const [stage, setStage] = useState<"before" | "cross-in" | "cross-clear" | "cross-out" | "after">("before");
  const [beforeVisible, setBeforeVisible] = useState<Message[]>([BEFORE_MESSAGES[0]]);
  const [afterMessages, setAfterMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isBeforeScreen = stage === "before";
  const isAfterScreen = stage === "after";
  const showBeforeHeader = stage === "before";
  const showAfterHeader = stage === "cross-out" || stage === "after";

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const startBeforeSequence = () => {
      setStage("before");
      setBeforeVisible([BEFORE_MESSAGES[0]]);
      setAfterMessages([]);
      setIsTyping(false);

      let currentDelay = 0;
      BEFORE_MESSAGES.slice(1).forEach((msg) => {
        currentDelay += msg.sender === "ai" ? 2000 : 6500;
        timeouts.push(
          setTimeout(() => {
            setBeforeVisible((prev) => [...prev, msg]);
          }, currentDelay),
        );
      });

      return currentDelay;
    };

    const startAfterSequence = () => {
      setStage("after");
      setAfterMessages([INITIAL_MESSAGES[0]]);
      setIsTyping(false);

      let currentDelay = 0;
      SEQUENCE.forEach((step) => {
        const delay =
          step.type === "typing"
            ? 2000
            : step.message?.sender === "ai"
            ? 2000
            : 6500;

        currentDelay += delay;
        timeouts.push(
          setTimeout(() => {
            if (step.type === "typing") {
              setIsTyping(true);
            } else if (step.type === "message" && step.message) {
              setIsTyping(false);
              setAfterMessages((prev) => [...prev, step.message!]);
            }
          }, currentDelay),
        );
      });

      return currentDelay;
    };

    const runCycle = () => {
      const beforeDelay = startBeforeSequence();
      const crossDelay = 2500;
      const crossInDuration = 1000;
      const crossHoldDuration = 600;
      const crossOutDuration = 1000;

      timeouts.push(setTimeout(() => setStage("cross-in"), beforeDelay + crossDelay));
      timeouts.push(setTimeout(() => setStage("cross-clear"), beforeDelay + crossDelay + crossInDuration));
      timeouts.push(setTimeout(() => setStage("cross-out"), beforeDelay + crossDelay + crossInDuration + crossHoldDuration));

      const afterStartDelay = beforeDelay + crossDelay + crossInDuration + crossHoldDuration + crossOutDuration;
      timeouts.push(
        setTimeout(() => {
          startAfterSequence();
        }, afterStartDelay),
      );

      const afterHoldDuration = 2000;
      const repeatDelay = afterStartDelay + 3000 + afterHoldDuration + SEQUENCE.reduce((sum, step) => {
        const delay =
          step.type === "typing"
            ? 2000
            : step.message?.sender === "ai"
            ? 2000
            : 6500;
        return sum + delay;
      }, 0);

      timeouts.push(setTimeout(runCycle, repeatDelay));
    };

    runCycle();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [beforeVisible, afterMessages, stage, isTyping]);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-[#efeae2] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 max-h-[calc(100vh-180px)]">
      <div className="bg-[#005e54] text-white p-4 flex items-center gap-3 shadow-md relative z-10 min-h-[72px]">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
          <AnimatePresence mode="wait">
            {showBeforeHeader && (
              <motion.div
                key="before-avatar"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full flex items-center justify-center"
              >
                <Bot className="w-6 h-6 text-[#005e54]" />
              </motion.div>
            )}

            {showAfterHeader && (
              <motion.div
                key="after-avatar"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full rounded-full bg-primary flex items-center justify-center border-3 border-white"
                style={{ boxSizing: 'border-box' }}
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {showBeforeHeader && (
              <motion.div
                key="before-header"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-1"
              >
                <h3 className="font-semibold text-base leading-tight">Ordinary Chatbot</h3>
                <p className="text-xs text-white/80">Standard Timings</p>
              </motion.div>
            )}

            {showAfterHeader && (
              <motion.div
                key="after-header"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-1"
              >
                <h3 className="font-semibold text-base leading-tight">Clinicon AI</h3>
                <p className="text-xs text-white/80">Always Online</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div ref={scrollRef} className="p-4 h-[min(58vh,380px)] max-h-[58vh] overflow-y-auto flex flex-col gap-4 relative no-scrollbar pr-3" style={{ scrollbarGutter: 'stable' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

        <AnimatePresence>
          {(stage === "cross-in" || stage === "cross-clear" || stage === "cross-out") && (
            <motion.div
              key="cross-overlay"
              initial={{ opacity: 0, y: 0 }}
              animate={
                stage === "cross-out"
                  ? { opacity: 0, scale: 0.8, y: 0 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={{ opacity: 0, scale: 0.8, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 0 }}
                animate={
                  stage === "cross-out"
                    ? { scale: 0.8, opacity: 0, y: 0 }
                    : { scale: 1, opacity: 1, y: 0 }
                }
                exit={{ scale: 0.8, opacity: 0, y: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center rounded-full bg-red-500/95 w-16 h-16 text-white text-lg font-bold shadow-2xl"
              >
                <X className="w-8 h-8" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {isBeforeScreen && (
              <motion.div
                key="before-screen"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {beforeVisible.map((msg) => (
                  <div key={msg.id} className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm relative ${
                        msg.sender === "user"
                          ? "bg-[#dcf8c6] text-gray-900 rounded-tr-sm"
                          : "bg-white text-gray-900 rounded-tl-sm"
                      }`}>
                      <p>{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">{msg.time}</span>
                        {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {isAfterScreen && (
              <motion.div
                key="after-screen"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <div className="flex flex-col gap-3">
                  <AnimatePresence initial={false}>
                    {afterMessages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm relative ${
                            msg.sender === "user"
                              ? "bg-[#dcf8c6] text-gray-900 rounded-tr-sm"
                              : "bg-white text-gray-900 rounded-tl-sm"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-gray-500">{msg.time}</span>
                            {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-[#f0f0f0] p-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full h-10 px-4 flex items-center text-sm text-gray-400 shadow-sm">
          Message...
        </div>
        <div className="w-10 h-10 rounded-full bg-[#005e54] flex items-center justify-center shrink-0 shadow-sm">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" style={{ transform: 'translateX(2px)' }}>
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
