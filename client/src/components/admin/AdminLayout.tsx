import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 md:hidden z-50 bg-slate-900 text-white p-2 rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-slate-900 text-white p-6 transform transition-transform duration-300 z-40 md:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >

        <h2 className="text-xl font-semibold mb-10">
          Spark Diagnostics
        </h2>

        <nav className="space-y-4">
          {/* <a
            href="/admin/dashboard"
            onClick={() => setSidebarOpen(false)}
            className="block hover:text-emerald-400 transition"
          >
            📊 Dashboard
          </a> */}

          <button
            className="mt-10 text-red-400 hover:text-red-300 transition block w-full text-left"
            onClick={() => {
              localStorage.removeItem("admin-auth");
              window.location.href = "/admin/login";
            }}
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto w-full md:p-10 p-4 pt-16 md:pt-0">
        {children}
      </main>
    </div>
  );
}
