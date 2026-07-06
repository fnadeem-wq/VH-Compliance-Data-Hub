import { useState } from "react";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

interface ConfirmDeleteModalProps {
  entityName: string;
  recordCount: number | null;
  onConfirm: () => Promise<void> | void;
  onClose: () => void;
}

export function ConfirmDeleteModal({
  entityName,
  recordCount,
  onConfirm,
  onClose,
}: ConfirmDeleteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConfirm() {
    setIsSubmitting(true);
    setError(null);
    try {
      await onConfirm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsSubmitting(false);
    }
  }

  return (
    <Modal title={`Delete "${entityName}"?`} onClose={onClose}>
      <p className="text-sm text-charcoal">
        This action cannot be undone.
        {recordCount !== null && recordCount > 0 && (
          <>
            {" "}
            This will permanently delete{" "}
            <span className="font-semibold text-error">
              {recordCount.toLocaleString()} processed record{recordCount === 1 ? "" : "s"}
            </span>{" "}
            along with any saved column mappings.
          </>
        )}
      </p>
      {error && <p className="mt-2 text-sm text-error">{error}</p>}
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm} disabled={isSubmitting}>
          {isSubmitting ? "Deleting…" : "Delete"}
        </Button>
      </div>
    </Modal>
  );
}
