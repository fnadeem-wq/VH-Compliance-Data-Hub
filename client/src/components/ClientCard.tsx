import { useState } from "react";
import type { ClientSummary } from "../api/clients";
import { clientsApi } from "../api/clients";
import { EntityModal } from "./EntityModal";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { Button } from "./ui/Button";

interface ClientCardProps {
  client: ClientSummary;
  onClick: () => void;
  onClientsChanged: () => void;
}

export function ClientCard({ client, onClick, onClientsChanged }: ClientCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const formattedDate = client.lastModifiedAt
    ? new Date(client.lastModifiedAt).toLocaleDateString()
    : "Never";

  const handleRename = async (name: string) => {
    await clientsApi.rename(client.id, name);
    setIsRenameModalOpen(false);
    setIsMenuOpen(false);
    onClientsChanged();
  };

  const handleDelete = async () => {
    await clientsApi.remove(client.id);
    setIsDeleteModalOpen(false);
    setIsMenuOpen(false);
    onClientsChanged();
  };

  return (
    <>
      <div
        onClick={onClick}
        className="group rounded-xl border-2 border-primary/20 min-h-[240px] flex flex-col bg-white cursor-pointer shadow-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      >
        {/* Full-width header section with org name */}
        <div className="bg-primary text-white px-6 py-6 group-hover:bg-primary-dark transition-colors relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="absolute top-4 right-4 z-20"
          >
            <button
              className="p-1 hover:bg-white/20 rounded-full text-white group-hover:text-white transition-colors"
              aria-label="Menu"
            >
              ⋮
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-primary/20 rounded-lg shadow-lg z-10 min-w-[120px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsRenameModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-primary/10 transition-colors"
                >
                  Rename
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDeleteModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-error hover:bg-error/10 border-t border-primary/10 transition-colors"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <h3 className="text-2xl font-extrabold text-white pr-8">
            {client.name}
          </h3>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-6 py-6 space-y-2">
          <p className="text-sm text-charcoal/70 font-medium">
            <span className="text-charcoal/60">Last Modified Date:</span>{" "}
            <span className="font-semibold text-charcoal">{formattedDate}</span>
          </p>
          <p className="text-sm text-charcoal/70 font-medium">
            <span className="text-charcoal/60">Total Files:</span>{" "}
            <span className="font-semibold text-charcoal">{client.totalFiles}</span>
          </p>
        </div>
      </div>

      {isRenameModalOpen && (
        <EntityModal
          title="Rename Client"
          label="Client name"
          initialValue={client.name}
          confirmLabel="Save"
          onConfirm={handleRename}
          onClose={() => setIsRenameModalOpen(false)}
        />
      )}

      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          entityName={client.name}
          recordCount={null}
          onConfirm={handleDelete}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  );
}
