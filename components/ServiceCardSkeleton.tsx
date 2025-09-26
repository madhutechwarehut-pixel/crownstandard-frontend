// components/ServiceCardSkeleton.tsx
export default function ServiceCardSkeleton() {
  return (
    <article className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl animate-pulse">
      <div className="w-full bg-gray-200 h-60" />
      <div className="p-4 bg-[#F4F1EC]">
        <div className="flex gap-2 mb-2">
          <div className="w-20 bg-gray-200 rounded-full h-7" />
          <div className="bg-gray-200 rounded-full h-7 w-28" />
          <div className="bg-gray-200 rounded-full h-7 w-14" />
        </div>
        <div className="w-3/4 h-5 bg-gray-200 rounded" />
        <div className="w-full h-4 mt-2 bg-gray-200 rounded" />
      </div>
      <div className="p-4 bg-[#FFF6E2]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-24 h-4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-24 h-4 bg-gray-200 rounded" />
          <div className="w-16 h-4 bg-gray-200 rounded" />
        </div>
        <div className="w-full h-10 mt-4 bg-gray-200 rounded-lg" />
      </div>
    </article>
  );
}
