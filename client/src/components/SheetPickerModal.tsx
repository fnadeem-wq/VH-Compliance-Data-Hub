import { useState } from "react";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";
import { Select } from "./ui/Select";

interface SheetPickerModalProps {
  sheetNames: string[];
  onChoose: (sheetName: string) => void;
  onClose: () => void;
}

export function SheetPickerModal({ sheetNames, onChoose, onClose }: SheetPickerModalProps) {
  const [selected, setSelected] = useState(sheetNames[0] ?? "");

  return (
    <Modal
      title="Choose a sheet"
      onClose={onClose}
      footer={
        <Button onClick={() => onChoose(selected)} disabled={!selected}>
          Continue
        </Button>
      }
    >
      <p className="mb-3 text-sm text-charcoal">
        This Excel file has multiple sheets. Choose which one to load.
      </p>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {sheetNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </Modal>
  );
}
