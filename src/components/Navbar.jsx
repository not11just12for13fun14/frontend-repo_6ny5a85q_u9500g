import { Menu, Globe2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 grid place-items-center ring-1 ring-white/10 shadow-lg shadow-red-600/30">
            <Globe2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">Orbit360</p>
            <p className="text-[11px] -mt-0.5 text-white/60 tracking-wide">Virtual Tours</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#industries" className="text-white/80 hover:text-white transition">Industries</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex h-10 items-center rounded-xl border border-white/10 px-4 text-white/90 hover:text-white hover:border-white/20 transition">Contact</a>
          <a href="#demo" className="inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 text-white font-medium shadow-lg shadow-red-600/30 hover:brightness-110 transition">Get a demo</a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
