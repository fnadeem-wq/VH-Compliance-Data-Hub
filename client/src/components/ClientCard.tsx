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
        className="rounded-lg border-2 border-primary p-6 bg-white cursor-pointer hover:shadow-lg transition-shadow relative"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="absolute top-4 right-4"
        >
          <button
            className="p-1 hover:bg-bg-subtle rounded-full text-charcoal"
            aria-label="Menu"
          >
            ⋮
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-1 bg-white border border-border rounded-lg shadow-card z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRenameModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-bg-subtle"
              >
                Rename
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDeleteModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-error hover:bg-bg-subtle border-t border-border"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-primary mb-3 pr-6">
          {client.name}
        </h3>
        <p className="text-sm text-charcoal/70 mb-2">
          Last modified on: {formattedDate}
        </p>
        <p className="text-sm text-charcoal/70">
          Total Files: {client.totalFiles}
        </p>
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
