import type { ReactNode } from "react";

interface ModalProps {
  title: string;
  onClose?: () => void;
  children: ReactNode;
  footer?: ReactNode;
  widthClassName?: string;
}

export function Modal({ title, onClose, children, footer, widthClassName = "max-w-md" }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-4">
      <div className={`w-full ${widthClassName} rounded-lg bg-white p-6 shadow-card`}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-navy">{title}</h2>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-1 text-charcoal hover:bg-bg-subtle"
            >
              ✕
            </button>
          )}
        </div>
        <div>{children}</div>
        {footer && <div className="mt-6 flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
}
