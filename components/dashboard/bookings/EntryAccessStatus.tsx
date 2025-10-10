import { Shield, Clock } from "lucide-react";

export default function EntryAccessStatus() {
  return (
    <div className="mt-10">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">Entry Access Status</h3>
      <p className="mb-4 text-sm text-gray-600">
        Track when cleaner accesses entry information
      </p>

      <div className="rounded-lg border border-gray-200 bg-[#F8F7F4] p-5">
        <h4 className="mb-2 text-sm font-medium text-gray-800">Your Entry Information</h4>
        <p className="mb-1 text-sm text-gray-700">
          <strong>Method:</strong> Code
        </p>
        <p className="text-sm text-gray-700">
          <strong>Instructions:</strong> Provided
        </p>
      </div>

      <p className="mt-3 text-xs text-gray-600">
        <Shield className="inline w-4 h-4 text-[#C5A04B] mr-1" />
        <strong>Privacy Protected:</strong> Your entry details are only visible to
        your cleaner after they confirm arrival at your location. The information is
        automatically cleared when the job is completed.
      </p>

      <div className="flex items-center gap-2 mt-2 text-sm text-amber-700">
        <Clock className="w-4 h-4" />
        Waiting for Approval – Your cleaner hasn’t confirmed yet.
      </div>
    </div>
  );
}
