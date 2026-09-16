import { useEffect, useState } from "react";
import { clientsApi, type ClientSummary } from "../api/clients";
import { ClientCarousel } from "../components/ClientCarousel";
import { EntityModal } from "../components/EntityModal";

interface HomePageProps {
  onSelectClient: (clientId: number) => void;
}

export function HomePage({ onSelectClient }: HomePageProps) {
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const loadClients = async () => {
    const summary = await clientsApi.summary();
    setClients(summary);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const handleCreateClient = async (name: string) => {
    await clientsApi.create(name);
    setIsCreateModalOpen(false);
    await loadClients();
  };

  return (
    <div className="min-h-[calc(100vh-200px)]">
      {/* Banner Section */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-lg bg-primary-dark px-8 py-6 text-center">
            <p className="text-lg text-primary-light">
              Transform raw healthcare data into standardized, compliant records.
              Upload, map, and standardize with confidence using our proven
              compliance data hub.
            </p>
          </div>
        </div>
      </section>

      {/* Client Selection Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-8 text-2xl font-bold text-primary">
            Pick Client Name
          </h2>

          <div className="rounded-lg border-2 border-primary p-8 bg-white">
            <ClientCarousel
              clients={clients}
              onSelectClient={onSelectClient}
              onClientsChanged={loadClients}
            />
          </div>

          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="mt-6 text-primary hover:text-primary-dark hover:underline font-medium"
          >
            Create a new Client Name +
          </button>
        </div>
      </section>

      {isCreateModalOpen && (
        <EntityModal
          title="Create Client"
          label="Client name"
          confirmLabel="Create"
          onConfirm={handleCreateClient}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
}
