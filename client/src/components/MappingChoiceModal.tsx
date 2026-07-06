import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

interface MappingChoiceModalProps {
  clientName: string;
  sourceSystemName: string;
  updatedAt: string | null;
  onUseSaved: () => void;
  onCreateNew: () => void;
  onCancel: () => void;
}

export function MappingChoiceModal({
  clientName,
  sourceSystemName,
  updatedAt,
  onUseSaved,
  onCreateNew,
  onCancel,
}: MappingChoiceModalProps) {
  return (
    <Modal
      title="Saved mapping found"
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCreateNew}>
            Create New Mapping
          </Button>
          <Button onClick={onUseSaved}>Use Saved Mapping</Button>
        </>
      }
    >
      <p className="text-sm text-charcoal">
        A saved column mapping exists for <span className="font-semibold">{clientName}</span> /{" "}
        <span className="font-semibold">{sourceSystemName}</span>
        {updatedAt && ` (last updated ${new Date(updatedAt).toLocaleString()})`}. Do you want to
        reuse it for this file, or create a new mapping?
      </p>
    </Modal>
  );
}
