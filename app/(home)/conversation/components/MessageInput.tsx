export default function MessageInput() {
  return (
    <div className="flex items-center p-4 bg-white border-t">
      <input
        type="text"
        placeholder="Type Your Message..."
        className="flex-1 p-2 text-sm border rounded-md outline-none"
      />
      <button className="px-6 py-2 ml-3 text-white rounded-md bg-amber-600 hover:bg-amber-700">
        Send
      </button>
    </div>
  );
}
