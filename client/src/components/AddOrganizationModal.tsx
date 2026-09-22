import { useState } from "react";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";
import { organizationDirectoryApi, type OrganizationDirectoryEntry } from "../api/organizationDirectory";
import type { CreateClientPayload } from "../api/clients";

interface AddOrganizationModalProps {
  onConfirm: (payload: CreateClientPayload) => Promise<void> | void;
  onClose: () => void;
}

export function AddOrganizationModal({ onConfirm, onClose }: AddOrganizationModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<OrganizationDirectoryEntry[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<OrganizationDirectoryEntry | null>(null);
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customName, setCustomName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  async function handleSearch() {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    try {
      const results = await organizationDirectoryApi.search(searchQuery.trim());
      setSearchResults(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setIsSearching(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedCustom = customName.trim();

    if (!selectedCompany && !trimmedCustom) {
      setError("Select a company from the search results or enter a new organisation name");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      if (selectedCompany) {
        await onConfirm({
          name: selectedCompany.companyName,
          isCustomEntry: false,
          applicableManufacturerOrGpoMakingPaymentId: selectedCompany.applicableManufacturerOrGpoMakingPaymentId,
          submittingApplicableManufacturerOrGpoName: selectedCompany.submittingApplicableManufacturerOrGpoName,
        });
      } else {
        await onConfirm({
          name: trimmedCustom,
          isCustomEntry: true,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal title="Add an Organisation" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Organization Name - Single Search Box */}
          <div>
            <label htmlFor="company-search" className="mb-1 block text-sm font-medium text-charcoal">
              Organisation name
            </label>
            <div className="flex gap-2">
              <input
                id="company-search"
                autoFocus
                className="flex-1 rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="e.g., Kedrion, Orthofix..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                type="button"
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSearching ? "..." : "Search"}
              </button>
              <button
                type="button"
                onClick={() => setIsAddingCustom(!isAddingCustom)}
                className="rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                + Add new
              </button>
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="mt-2 rounded-md border border-border bg-white max-h-60 overflow-y-auto">
                {searchResults.map((company) => (
                  <button
                    key={company.id}
                    type="button"
                    onClick={() => {
                      setSelectedCompany(company);
                      setSearchResults([]);
                      setSearchQuery("");
                      setCustomName("");
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-bg-subtle border-b border-border/50 last:border-b-0 transition-colors"
                  >
                    <div className="font-medium text-charcoal">{company.companyName}</div>
                    {company.submittingApplicableManufacturerOrGpoName && (
                      <div className="text-xs text-charcoal/60">{company.submittingApplicableManufacturerOrGpoName}</div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Selected Chip */}
            {selectedCompany && (
              <div className="mt-2 flex items-center gap-2 bg-primary/10 rounded px-3 py-2 w-fit">
                <span className="text-sm text-charcoal">Selected: {selectedCompany.companyName}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCompany(null)}
                  className="text-charcoal/60 hover:text-charcoal text-sm font-bold"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Custom Entry Field - Revealed by Toggle */}
          {isAddingCustom && (
            <div>
              <label htmlFor="custom-org-name" className="mb-1 block text-sm font-medium text-charcoal">
                New organisation name
              </label>
              <input
                id="custom-org-name"
                className="w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter a new organisation name"
                value={customName}
                onChange={(e) => {
                  setCustomName(e.target.value);
                  if (e.target.value.trim() && selectedCompany) {
                    setSelectedCompany(null);
                  }
                }}
              />
              <p className="text-xs text-charcoal/60 mt-1">
                This will be added as a brand-new organisation (not in the directory).
              </p>
            </div>
          )}

          {error && <p className="text-sm text-error">{error}</p>}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating…" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
