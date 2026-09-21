import { useEffect, useState } from "react";
import { clientsApi, type ClientSummary } from "../api/clients";
import { ClientCarousel } from "../components/ClientCarousel";
import { AddOrganizationModal } from "../components/AddOrganizationModal";
import { SkeletonCarousel } from "../components/SkeletonLoader";

interface HomePageProps {
  onSelectClient: (clientId: number) => void;
}

export function HomePage({ onSelectClient }: HomePageProps) {
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const loadClients = async () => {
    setIsLoading(true);
    try {
      const summary = await clientsApi.summary();
      setClients(summary);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  const handleCreateClient = async (name: string, company?: { companyName: string; applicableManufacturerOrGpoMakingPaymentId?: string; submittingApplicableManufacturerOrGpoName?: string }) => {
    await clientsApi.create(name, company);
    setIsCreateModalOpen(false);
    await loadClients();
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-white to-primary-light/10">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark px-6 py-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 px-8 py-8 text-center shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vector Health Compliance Data Hub
            </h1>
            <p className="text-base md:text-lg text-white font-semibold leading-relaxed max-w-3xl mx-auto">
              Transform raw healthcare data into standardized, compliant records.
              Upload, map, and standardize with confidence using our proven
              compliance data hub.
            </p>
          </div>
        </div>
      </section>

      {/* Client Selection Section */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Select Your Organization
            </h2>
            <p className="text-charcoal/60">
              Choose a client to view and manage your compliance data
            </p>
          </div>

          {/* Snowy Border Carousel Container */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Carousel with snowy border */}
            <div className="relative rounded-2xl border-2 border-primary/20 bg-white/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border-primary/40">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-xl"></div>

              {/* Skeleton Loading Base */}
              {isLoading && (
                <div className="pointer-events-none">
                  <SkeletonCarousel itemCount={clients.length} />
                </div>
              )}

              {/* Carousel Content - Fades in over skeleton */}
              <div className={`relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <ClientCarousel
                  clients={clients}
                  onSelectClient={onSelectClient}
                  onClientsChanged={loadClients}
                />
              </div>
            </div>
          </div>

          {/* Create Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="group relative px-8 py-3 rounded-lg font-semibold text-primary hover:text-white bg-transparent border-2 border-primary hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="relative z-10">+ Add an Organisation</span>
            </button>
          </div>
        </div>
      </section>

      {isCreateModalOpen && (
        <AddOrganizationModal
          onConfirm={handleCreateClient}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </div>
  );
}
