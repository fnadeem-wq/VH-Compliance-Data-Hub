import { useState } from "react";
import type { ClientSummary } from "../api/clients";
import { ClientCard } from "./ClientCard";

interface ClientCarouselProps {
  clients: ClientSummary[];
  onSelectClient: (id: number) => void;
  onClientsChanged: () => void;
}

const PAGE_SIZE = 3;

export function ClientCarousel({
  clients,
  onSelectClient,
  onClientsChanged,
}: ClientCarouselProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(clients.length / PAGE_SIZE));
  const visibleSlice = clients.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  const handlePrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const handleNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  if (clients.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mb-4">
          <div className="inline-block text-4xl mb-4">📋</div>
        </div>
        <p className="text-lg text-charcoal/70 font-medium">
          No organizations yet
        </p>
        <p className="text-sm text-charcoal/50 mt-2">
          Create your first organization below to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-8">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="w-16 h-16 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:border-charcoal/30 disabled:text-charcoal/30 disabled:cursor-not-allowed transition-all flex items-center justify-center flex-shrink-0"
          aria-label="Previous page"
        >
          <span className="text-3xl font-light leading-none">‹</span>
        </button>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {visibleSlice.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              onClick={() => onSelectClient(client.id)}
              onClientsChanged={onClientsChanged}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          className="w-16 h-16 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:border-charcoal/30 disabled:text-charcoal/30 disabled:cursor-not-allowed transition-all flex items-center justify-center flex-shrink-0"
          aria-label="Next page"
        >
          <span className="text-3xl font-light leading-none">›</span>
        </button>
      </div>

      <div className="flex justify-center pt-4">
        <p className="text-sm font-medium text-charcoal/70">
          Showing <span className="text-primary font-bold">{visibleSlice.length}</span> of <span className="text-primary font-bold">{clients.length}</span>
        </p>
      </div>
    </div>
  );
}
