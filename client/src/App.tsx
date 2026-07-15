import { useState } from "react";
import vhLogo from "./assets/vh-logo.png";
import { HomePage } from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";

type View = "home" | "upload";

export function App() {
  const [view, setView] = useState<View>("home");
  const [pendingSelection, setPendingSelection] = useState<{
    clientId: number;
    sourceSystemId: number;
  } | null>(null);

  function goToUploadWithSelection(clientId: number, sourceSystemId: number) {
    setPendingSelection({ clientId, sourceSystemId });
    setView("upload");
  }

  return (
    <div className="min-h-screen">
      <header className="bg-navy px-6 py-4 shadow-card">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setView("home")}
              className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                view === "home"
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary-light hover:bg-white/10"
              }`}
            >
              Home
            </button>
            <div>
              <h1 className="text-4xl font-bold text-white">VH Compliance Data Hub</h1>
              <p className="text-sm text-primary-light">Customer Delivery Team</p>
            </div>
          </div>
          <div className="rounded-md bg-white px-4 py-3">
            <img src={vhLogo} alt="Vector Health Compliance" className="h-10 w-auto" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] space-y-6 p-6">
        {view === "home" ? (
          <HomePage onNavigateToUpload={goToUploadWithSelection} />
        ) : (
          <MainPage initialSelection={pendingSelection ?? undefined} />
        )}
      </main>
    </div>
  );
}
