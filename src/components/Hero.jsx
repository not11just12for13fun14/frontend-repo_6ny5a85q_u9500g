import Spline from '@splinetool/react-spline';
import { PlayCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-rose-600/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />

      {/* 3D Spline Scene */}
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-rose-400" />
              Interactive 360° Experiences
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Bring your spaces to life with immersive virtual tours
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              We create high‑fidelity 360° tours that engage, educate and convert. Spin, explore and interact with a futuristic globe that sets the tone for what your brand can offer.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-6 text-white font-medium shadow-lg shadow-red-700/30 hover:brightness-110 transition">
                Get a live demo
              </a>
              <a href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-white/90 hover:bg-white/10 transition">
                <PlayCircle className="mr-2 h-5 w-5" />
                View portfolio
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-white/70 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
              <p className="text-sm"><span className="text-white font-semibold">4K</span> capture</p>
              <p className="text-sm"><span className="text-white font-semibold">AR‑ready</span> assets</p>
              <p className="text-sm"><span className="text-white font-semibold">CMS</span> integration</p>
              <p className="text-sm"><span className="text-white font-semibold">Analytics</span> included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
