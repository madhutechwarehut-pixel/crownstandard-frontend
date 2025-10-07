import Link from "next/link";
import type { Chat } from "@/types/conversation";

export default function ChatList({
  chats,
  selectedId,
}: { chats: Chat[]; selectedId?: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto scrollbar-hide">
        {chats.map((chat) => {
          const initials = chat.name.split(" ").map((n) => n[0]).join("");
          const selected = selectedId === chat.id;
          return (
            <Link
              key={chat.id}
              href={`/conversation/${chat.id}`}
              className={[
                "flex gap-2 justify-between items-center px-4 py-3 transition-all",
                selected
                  ? "bg-white shadow-sm border border-gray-100"
                  : "bg-gray-100 hover:bg-gray-200",
              ].join(" ")}
            >
              <div className="relative flex items-center justify-center p-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                {initials}
                <span
                  className={` absolute -bottom-2 -right-1 w-2 h-2 rounded-full m-2 ${chat.online ? "bg-green-500" : "bg-red-500"
                    }`}
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>

              <div className="flex items-center shrink-0">
                {chat.unreadCount > 0 && (
                  <span className="px-2 py-1 text-xs border rounded-full text-brand-gold border-brand-gold">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
