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
      <div className="text-center py-12">
        <p className="text-charcoal/70">
          No clients yet — create one below to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {visibleSlice.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onClick={() => onSelectClient(client.id)}
            onClientsChanged={onClientsChanged}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="text-2xl text-primary hover:text-primary-dark disabled:text-charcoal/30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          ‹
        </button>

        <p className="text-sm text-charcoal/70">
          Showing {visibleSlice.length} of {clients.length}
        </p>

        <button
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          className="text-2xl text-primary hover:text-primary-dark disabled:text-charcoal/30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </div>
  );
}
