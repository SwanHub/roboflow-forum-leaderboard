export function ErrorDisplay({ error }: { error: Error }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <h3 className="text-red-800 font-semibold">Error loading leaderboard</h3>
      <p className="text-red-600 text-sm mt-1">{error.message}</p>
    </div>
  );
}
