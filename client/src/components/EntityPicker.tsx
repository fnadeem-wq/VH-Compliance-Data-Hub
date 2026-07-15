import { useState } from "react";
import type { Entity } from "../state/types";
import { Button } from "./ui/Button";
import { Select } from "./ui/Select";
import { EntityModal } from "./EntityModal";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";

interface EntityPickerProps {
  label: string;
  placeholder: string;
  entities: Entity[];
  selectedId: number | null;
  disabled?: boolean;
  addLabel: string;
  addFieldLabel: string;
  onSelect: (id: number | null) => void;
  onAdd: (name: string) => Promise<void>;
  onRename: (id: number, name: string) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  getRecordCount: (id: number) => Promise<number>;
}

export function EntityPicker({
  label,
  placeholder,
  entities,
  selectedId,
  disabled,
  addLabel,
  addFieldLabel,
  onSelect,
  onAdd,
  onRename,
  onDelete,
  getRecordCount,
}: EntityPickerProps) {
  const [modal, setModal] = useState<"add" | "rename" | "delete" | null>(null);
  const [recordCount, setRecordCount] = useState<number | null>(null);

  const selected = entities.find((e) => e.id === selectedId) ?? null;

  async function openDelete() {
    if (!selected) return;
    setRecordCount(null);
    setModal("delete");
    const count = await getRecordCount(selected.id);
    setRecordCount(count);
  }

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-navy">{label}</label>
      <div className="flex items-center gap-2">
        <Select
          value={selectedId ?? ""}
          disabled={disabled}
          onChange={(e) => onSelect(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">{placeholder}</option>
          {entities.map((entity) => (
            <option key={entity.id} value={entity.id}>
              {entity.name}
            </option>
          ))}
        </Select>
        <button
          type="button"
          title={`Rename ${label}`}
          disabled={!selected}
          onClick={() => setModal("rename")}
          className="rounded-md p-2 text-charcoal hover:bg-bg-subtle disabled:opacity-30"
        >
          ✎
        </button>
        <button
          type="button"
          title={`Delete ${label}`}
          disabled={!selected}
          onClick={openDelete}
          className="rounded-md p-2 text-error hover:bg-bg-subtle disabled:opacity-30"
        >
          🗑
        </button>
      </div>
      <Button
        type="button"
        variant="secondary"
        className="mt-2"
        disabled={disabled}
        onClick={() => setModal("add")}
      >
        + {addLabel}
      </Button>

      {modal === "add" && (
        <EntityModal
          title={addLabel}
          label={addFieldLabel}
          confirmLabel="Add"
          onClose={() => setModal(null)}
          onConfirm={async (name) => {
            await onAdd(name);
            setModal(null);
          }}
        />
      )}

      {modal === "rename" && selected && (
        <EntityModal
          title={`Rename "${selected.name}"`}
          label={addFieldLabel}
          initialValue={selected.name}
          confirmLabel="Save"
          onClose={() => setModal(null)}
          onConfirm={async (name) => {
            await onRename(selected.id, name);
            setModal(null);
          }}
        />
      )}

      {modal === "delete" && selected && (
        <ConfirmDeleteModal
          entityName={selected.name}
          recordCount={recordCount}
          onClose={() => setModal(null)}
          onConfirm={async () => {
            await onDelete(selected.id);
            setModal(null);
          }}
        />
      )}
    </div>
  );
}
