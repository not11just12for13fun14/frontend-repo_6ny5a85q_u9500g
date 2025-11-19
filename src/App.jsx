import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Industries from './components/Industries'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* subtle star-like pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(225,29,72,0.06),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(244,63,94,0.05),transparent_50%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Industries />
      <CTA />

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Orbit360. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
