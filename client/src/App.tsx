import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { UploadLogPage } from "./pages/UploadLogPage";
import { MainPage } from "./pages/MainPage";

type View = "home" | "uploadLog" | "clientDetail";

export function App() {
  const [view, setView] = useState<View>("home");
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);

  function goHome() {
    setView("home");
  }

  function goToUploadLog() {
    setView("uploadLog");
  }

  function goToClientDetail(clientId: number) {
    setSelectedClientId(clientId);
    setView("clientDetail");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b-2 border-primary/10 bg-gradient-to-r from-white via-white to-primary-light/5 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-[1400px] px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goHome}
              className="group transition-all hover:opacity-90"
            >
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Vector Health Compliance Data Hub
              </h1>
            </button>
            {view === "home" && (
              <button
                onClick={goToUploadLog}
                className="px-4 py-1.5 text-sm font-semibold text-primary hover:text-primary-dark bg-primary/5 hover:bg-primary/10 rounded-lg transition-all border border-primary/20 hover:border-primary/40"
              >
                Upload Log
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {view === "home" && <HomePage onSelectClient={goToClientDetail} />}
        {view === "uploadLog" && <UploadLogPage onSelectClient={goToClientDetail} />}
        {view === "clientDetail" && selectedClientId && (
          <MainPage key={selectedClientId} clientId={selectedClientId} />
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
