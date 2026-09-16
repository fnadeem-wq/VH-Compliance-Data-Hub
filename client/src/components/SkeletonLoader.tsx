export function SkeletonCard() {
  return (
    <div className="rounded-lg border-2 border-primary/10 p-6 bg-white animate-pulse">
      <div className="h-6 bg-primary/5 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-primary/5 rounded mb-2 w-full"></div>
      <div className="h-4 bg-primary/5 rounded w-5/6"></div>
    </div>
  );
}

export function SkeletonCarousel() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="h-6 w-6 bg-primary/5 rounded-full"></div>
        <div className="h-4 w-32 bg-primary/5 rounded"></div>
        <div className="h-6 w-6 bg-primary/5 rounded-full"></div>
      </div>
    </div>
  );
}
