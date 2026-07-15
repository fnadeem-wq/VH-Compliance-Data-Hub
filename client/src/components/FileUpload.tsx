import type { ChangeEvent } from "react";

interface FileUploadProps {
  onFileSelected: (file: File) => void;
  disabled?: boolean;
}

export function FileUpload({ onFileSelected, disabled }: FileUploadProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onFileSelected(file);
    e.target.value = "";
  }

  return (
    <label
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-white p-10 text-center hover:border-primary ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <span className="text-3xl">📄</span>
      <span className="text-sm font-medium text-navy">
        Click to upload a CSV or Excel file
      </span>
      <span className="text-xs text-charcoal/70">.csv, .xlsx, .xls</span>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        className="hidden"
        disabled={disabled}
        onChange={handleChange}
      />
    </label>
  );
}
