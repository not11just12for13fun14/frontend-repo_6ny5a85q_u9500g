import { Camera, Layers, Share2, Sparkles, ShieldCheck, Rocket } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Camera className="h-5 w-5" />, 
      title: 'Crystal‑clear capture',
      desc: 'Professional-grade 360° photography and HDR stitching for lifelike tours.'
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Hotspots & overlays',
      desc: 'Interactive hotspots, callouts, and info panels to guide exploration.'
    },
    {
      icon: <Share2 className="h-5 w-5" />,
      title: 'One‑click sharing',
      desc: 'Embed anywhere or share as a link. Works across devices and browsers.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Secure & reliable',
      desc: 'Enterprise‑grade hosting, role permissions, and watermarking.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Brand‑perfect UI',
      desc: 'Themes, custom markers, and branded loading screens that match your identity.'
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: 'Fast deployment',
      desc: 'From capture to publish in days, not weeks — with white‑glove support.'
    }
  ];

  return (
    <section id="features" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything you need in a virtual tour</h2>
          <p className="mt-3 text-white/70 max-w-2xl">From stunning 360° imagery to powerful analytics, our platform covers the entire lifecycle of your immersive experiences.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur hover:bg-white/10 transition shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-700/30">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
