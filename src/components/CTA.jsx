export default function CTA() {
  return (
    <section id="demo" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 md:p-12 backdrop-blur">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to launch your virtual tour?</h3>
            <p className="mt-3 text-white/70">Tell us about your space and we’ll send a tailored demo within 48 hours.</p>

            <form className="mt-8 grid gap-3 sm:grid-cols-2">
              <input className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white/90 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="Your name" />
              <input className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white/90 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="Email" />
              <input className="sm:col-span-2 h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white/90 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-rose-500/40" placeholder="Company / Project" />
              <button type="button" className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-6 text-white font-medium shadow-lg shadow-red-700/30 hover:brightness-110 transition">Request demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
