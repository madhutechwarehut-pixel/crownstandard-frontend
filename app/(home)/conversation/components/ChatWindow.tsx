"use client";

import type { Chat } from "@/types/conversation";
import { useRef, useEffect } from "react";

export default function ChatWindow({ chat }: { chat: Chat }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // auto-scroll to bottom when chat changes
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight });
  }, [chat]);

  const initials = chat.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {initials}
        </div>
        <div>
          <p className="font-medium text-gray-900">{chat.name}</p>
          <p className={`text-xs ${chat.online ? "text-green-500" : "text-gray-400"}`}>
            {chat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollerRef}
        className="flex-1 p-6 space-y-4 overflow-y-auto bg-white scrollbar-hide"
      >
        {chat.messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`relative max-w-md px-4 py-3 text-sm rounded-lg ${m.sender === "me"
                  ? // ===== Sender bubble =====
                  "bg-[#1D2432] text-white before:content-[''] before:absolute before:top-0 before:right-[-8px] before:w-0 before:h-0 before:border-t-[10px] before:border-t-[#1D2432] before:border-r-[10px] before:border-r-transparent rounded-tr-none"
                  : // ===== Receiver bubble =====
                  "bg-[#F3F1ED] text-gray-800 before:content-[''] before:absolute before:top-0 before:left-[-8px] before:w-0 before:h-0 before:border-t-[10px] before:border-t-[#F3F1ED] before:border-l-[10px] before:border-l-transparent rounded-tl-none"
                }`}
            >
              {m.text}

              {!m.seen && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] px-1 rounded">
                  New
                </span>
              )}
            </div>
          </div>
        ))}

      </div>

      {/* Input */}
      <div className="flex items-center p-4 bg-white border-t border-gray-100">
        <input
          type="text"
          placeholder="Type Your Message..."
          className="flex-1 px-3 py-2 text-sm border rounded-md outline-none focus:ring-1 focus:ring-amber-600"
        />
        <button className="px-6 py-2 ml-3 text-white rounded-md bg-amber-600 hover:bg-amber-700">
          Send
        </button>
      </div>
    </div>
  );
}
