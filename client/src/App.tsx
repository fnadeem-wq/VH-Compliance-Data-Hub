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
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-3 transition-opacity hover:opacity-75"
            >
              <div className="rounded-lg bg-accent-light p-2">
                <img src={vhLogo} alt="Vector Health Compliance" className="h-8 w-auto" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-primary">VH Compliance</h1>
                <p className="text-xs text-charcoal/60">Data Standardization</p>
              </div>
            </button>
            <nav className="flex items-center gap-6">
              <button
                onClick={() => setView("home")}
                className={`text-sm font-medium transition-colors ${
                  view === "home"
                    ? "text-primary"
                    : "text-charcoal hover:text-primary"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setView("upload")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  view === "upload"
                    ? "bg-primary text-white"
                    : "bg-accent-light text-primary hover:bg-accent"
                }`}
              >
                Upload
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {view === "home" ? (
          <HomePage onNavigateToUpload={goToUploadWithSelection} />
        ) : (
          <MainPage initialSelection={pendingSelection ?? undefined} />
        )}
      </main>

      <footer className="border-t border-border bg-bg-subtle">
        <div className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-semibold text-navy mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Data Upload</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Column Mapping</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Results & Export</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-charcoal hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-charcoal/60">
            <p>&copy; 2026 Vector Health Compliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
