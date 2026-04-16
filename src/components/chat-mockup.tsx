import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Check, CheckCheck } from "lucide-react";

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
    time: "10:00 AM",
  },
];

const SEQUENCE = [
  { delay: 1000, type: "typing", sender: "ai" as const },
  {
    delay: 2500,
    type: "message",
    message: {
      id: "2",
      text: "Hello! Yes, Clinicon is open today until 7:00 PM. How can I help you?",
      sender: "ai" as const,
      time: "10:00 AM",
    },
  },
  { delay: 4000, type: "message", message: { id: "3", text: "I need to book a consultation.", sender: "user" as const, time: "10:01 AM" } },
  { delay: 5000, type: "typing", sender: "ai" as const },
  {
    delay: 6500,
    type: "message",
    message: {
      id: "4",
      text: "Great! I can help with that. We have slots available today at 2:00 PM or 4:30 PM. Which works better for you?",
      sender: "ai" as const,
      time: "10:01 AM",
    },
  },
  { delay: 8000, type: "message", message: { id: "5", text: "2:00 PM please.", sender: "user" as const, time: "10:02 AM" } },
  { delay: 9000, type: "typing", sender: "ai" as const },
  {
    delay: 10500,
    type: "message",
    message: {
      id: "6",
      text: "Perfect. I've booked your consultation for today at 2:00 PM. You'll receive a reminder an hour before. See you then!",
      sender: "ai" as const,
      time: "10:02 AM",
    },
  },
];

export function ChatMockup() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let timeouts: NodeJS.Timeout[] = [];

    const runSequence = () => {
      let currentDelay = 0;
      
      // Reset
      setMessages(INITIAL_MESSAGES);
      setIsTyping(false);

      SEQUENCE.forEach((step) => {
        currentDelay += step.delay;
        const timeout = setTimeout(() => {
          if (step.type === "typing") {
            setIsTyping(true);
          } else if (step.type === "message" && step.message) {
            setIsTyping(false);
            setMessages((prev) => [...prev, step.message!]);
          }
        }, currentDelay);
        timeouts.push(timeout);
      });
      
      // Loop
      timeouts.push(setTimeout(runSequence, currentDelay + 5000));
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  return (
    <div 
      className="relative w-full max-w-sm mx-auto bg-[#efeae2] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900"
      onMouseEnter={() => setHasStarted(true)}
      onClick={() => setHasStarted(true)}
    >
      {/* Phone Header */}
      <div className="bg-[#005e54] text-white p-4 flex items-center gap-3 shadow-md relative z-10">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
          <Bot className="w-6 h-6 text-[#005e54]" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-base leading-tight">Clinicon Front Desk</h3>
          <p className="text-xs text-white/80">Always online</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-4 h-[400px] overflow-y-auto flex flex-col gap-3 relative scrollbar-hide">
        {/* WhatsApp Background Pattern - Simplified via CSS */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
        
        {!hasStarted && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              Hover to watch
            </span>
          </div>
        )}

        <div className="relative z-10 flex flex-col gap-3">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
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
      </div>

      {/* Input Area */}
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
