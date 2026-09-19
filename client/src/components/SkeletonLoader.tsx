export function SkeletonCard() {
  return (
    <div className="rounded-xl border-2 border-primary/10 bg-white animate-pulse overflow-hidden">
      <div className="h-20 bg-primary/10 rounded-t-lg mb-4"></div>
      <div className="px-6 pb-6 space-y-3">
        <div className="h-4 bg-primary/5 rounded w-full"></div>
        <div className="h-4 bg-primary/5 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function SkeletonTableRow() {
  return (
    <tr className="hover:bg-bg-subtle transition-colors">
      <td className="px-6 py-3">
        <div className="h-4 bg-primary/5 rounded w-24 animate-pulse"></div>
      </td>
      <td className="px-6 py-3">
        <div className="h-4 bg-primary/5 rounded w-32 animate-pulse"></div>
      </td>
      <td className="px-6 py-3">
        <div className="h-4 bg-primary/5 rounded w-40 animate-pulse"></div>
      </td>
      <td className="px-6 py-3">
        <div className="h-4 bg-primary/5 rounded w-28 animate-pulse"></div>
      </td>
      <td className="px-6 py-3 text-center">
        <div className="h-4 bg-primary/5 rounded w-16 mx-auto animate-pulse"></div>
      </td>
      <td className="px-6 py-3 text-center">
        <div className="flex gap-2 justify-center">
          <div className="h-8 bg-primary/5 rounded w-24 animate-pulse"></div>
          <div className="h-8 bg-primary/5 rounded w-20 animate-pulse"></div>
        </div>
      </td>
    </tr>
  );
}

export function SkeletonCarousel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-8">
        <div className="w-16 h-16 rounded-full border-2 border-primary/10 bg-primary/5 animate-pulse flex-shrink-0"></div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>

        <div className="w-16 h-16 rounded-full border-2 border-primary/10 bg-primary/5 animate-pulse flex-shrink-0"></div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="h-4 w-32 bg-primary/5 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
