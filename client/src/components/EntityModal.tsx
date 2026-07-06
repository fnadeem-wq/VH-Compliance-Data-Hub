import { useState } from "react";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

interface EntityModalProps {
  title: string;
  label: string;
  initialValue?: string;
  confirmLabel: string;
  onConfirm: (value: string) => Promise<void> | void;
  onClose: () => void;
}

export function EntityModal({
  title,
  label,
  initialValue = "",
  confirmLabel,
  onConfirm,
  onClose,
}: EntityModalProps) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) {
      setError("This field is required");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await onConfirm(value.trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputId = `entity-modal-input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Modal title={title} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-charcoal">
          {label}
        </label>
        <input
          id={inputId}
          autoFocus
          className="w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {error && <p className="mt-2 text-sm text-error">{error}</p>}
        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving…" : confirmLabel}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
