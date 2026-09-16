import { useState } from "react";

interface DataPreviewStepProps {
  rawParsedRows: string[][];
  onSelectStartingRow: (rowIndex: number) => void;
  isLoading: boolean;
}

export function DataPreviewStep({
  rawParsedRows,
  onSelectStartingRow,
  isLoading,
}: DataPreviewStepProps) {
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  if (!rawParsedRows || rawParsedRows.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-error">No data found in file</p>
      </div>
    );
  }

  const previewRows = rawParsedRows.slice(0, 25);
  const maxCols = Math.max(...rawParsedRows.map((row) => row.length), 10);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Select Data Starting Row
        </h2>
        <p className="text-charcoal/70">
          Click on the row that contains your data headers or the first row of actual data.
        </p>
      </div>

      <div className="border border-primary/20 rounded-lg overflow-auto max-h-[400px]">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {previewRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => setSelectedRowIndex(rowIndex)}
                className={`cursor-pointer hover:bg-primary/10 transition-colors ${
                  selectedRowIndex === rowIndex ? "bg-primary/20 font-semibold" : ""
                } border-b border-primary/10`}
              >
                <td className="sticky left-0 bg-white px-3 py-2 font-bold text-primary/60 min-w-[60px] border-r border-primary/10">
                  Row {rowIndex + 1}
                </td>
                {Array.from({ length: maxCols }).map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-3 py-2 border-r border-primary/10 whitespace-nowrap"
                  >
                    {row[colIndex] || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-primary-light/10 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-charcoal/70 mb-2">
          <strong>Selected row:</strong> Row {selectedRowIndex + 1}
        </p>
        {selectedRowIndex < rawParsedRows.length && (
          <div className="space-y-1">
            <p className="text-xs font-semibold text-primary">Preview columns:</p>
            <div className="flex flex-wrap gap-2">
              {rawParsedRows[selectedRowIndex].slice(0, 10).map((cell, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white border border-primary/30 rounded text-xs text-charcoal"
                >
                  {cell || "(empty)"}
                </span>
              ))}
              {rawParsedRows[selectedRowIndex].length > 10 && (
                <span className="px-2 py-1 bg-white border border-primary/30 rounded text-xs text-charcoal">
                  +{rawParsedRows[selectedRowIndex].length - 10} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => onSelectStartingRow(selectedRowIndex)}
          disabled={isLoading}
          className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isLoading ? "Processing..." : "Confirm & Continue"}
        </button>
      </div>
    </div>
  );
}
