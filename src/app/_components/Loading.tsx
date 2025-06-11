export function Loading() {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg animate-pulse"
        >
          <div className="w-8 h-6 bg-gray-200 rounded"></div>
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-grow space-y-2">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-24 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}
