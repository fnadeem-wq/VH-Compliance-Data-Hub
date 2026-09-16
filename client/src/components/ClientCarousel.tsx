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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {visibleSlice.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onClick={() => onSelectClient(client.id)}
            onClientsChanged={onClientsChanged}
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-primary/10">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="group p-2 rounded-lg text-primary hover:text-white hover:bg-primary disabled:text-charcoal/30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all"
          aria-label="Previous page"
        >
          <span className="text-2xl font-light">‹</span>
        </button>

        <p className="text-sm font-medium text-charcoal/70">
          Showing <span className="text-primary font-bold">{visibleSlice.length}</span> of <span className="text-primary font-bold">{clients.length}</span>
        </p>

        <button
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          className="group p-2 rounded-lg text-primary hover:text-white hover:bg-primary disabled:text-charcoal/30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all"
          aria-label="Next page"
        >
          <span className="text-2xl font-light">›</span>
        </button>
      </div>
    </div>
  );
}
