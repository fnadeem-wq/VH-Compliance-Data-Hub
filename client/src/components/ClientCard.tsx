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
        className="group rounded-xl border-2 border-primary/20 p-8 min-h-[240px] flex flex-col justify-between bg-gradient-to-br from-white to-primary-light/5 cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      >
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

        {/* Menu Button */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="absolute top-4 right-4 z-20"
        >
          <button
            className="p-1 hover:bg-primary/10 rounded-full text-primary group-hover:text-primary transition-colors"
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

        <h3 className="text-2xl font-extrabold text-primary mb-6 pr-6 group-hover:text-primary-dark transition-colors relative z-10">
          {client.name}
        </h3>
        <div className="space-y-2 relative z-10">
          <p className="text-sm text-charcoal/70 font-medium">
            <span className="text-primary/60">Last modified:</span> {formattedDate}
          </p>
          <p className="text-sm text-charcoal/70 font-medium">
            <span className="text-primary/60">Total Files:</span>{" "}
            <span className="font-bold text-primary">{client.totalFiles}</span>
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
