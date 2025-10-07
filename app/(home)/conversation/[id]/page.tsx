import { notFound } from "next/navigation";
import { chats, getChatById } from "../data";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

export default async function ConversationDetailPage(props: {
    params: Promise<{ id: string }>;
}) {
    // ✅ wait for params to resolve
    const { id } = await props.params;

    const chat = getChatById(id);
    if (!chat) return notFound();

    return (
        <div className="flex flex-col min-h-[95vh] mx-auto bg-white max-w-7xl">
            {/* ===== Page Heading outside layout ===== */}
            <div className="px-16 pt-10">
                <h1 className="text-2xl font-semibold text-gray-900">Your Conversations</h1>
                <p className="mt-1 text-gray-500">
                    Manage your messages with service providers and customers
                </p>
            </div>

            {/* ===== Main layout ===== */}
            <div className="flex flex-1 gap-8 px-16 pb-10 mt-6">
                {/* Chat list with highlight */}
                <div className="w-1/3 flex flex-col overflow-hidden pt-4 border border-gray-100 rounded-xl bg-[#F3F1ED] h-[75vh]">
                    <ChatList chats={chats} />
                </div>

                {/* Active conversation window */}
                <div className="flex-1 border border-gray-100 rounded-xl h-[75vh]">
                    <ChatWindow chat={chat} />
                </div>
            </div>
        </div>
    );
}
