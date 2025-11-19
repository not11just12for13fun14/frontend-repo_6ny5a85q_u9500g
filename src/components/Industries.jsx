import { Building2, GraduationCap, Home, Hotel, Store, Trees } from 'lucide-react';

export default function Industries() {
  const items = [
    { icon: <Home className="h-5 w-5" />, name: 'Real Estate' },
    { icon: <Hotel className="h-5 w-5" />, name: 'Hospitality' },
    { icon: <Building2 className="h-5 w-5" />, name: 'Corporate' },
    { icon: <GraduationCap className="h-5 w-5" />, name: 'Education' },
    { icon: <Store className="h-5 w-5" />, name: 'Retail' },
    { icon: <Trees className="h-5 w-5" />, name: 'Museums & Parks' },
  ];

  return (
    <section id="industries" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for every industry</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Whether you are showcasing properties, campuses or exhibitions, our tours adapt to your goals.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                {it.icon}
              </div>
              <p className="text-white font-medium">{it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
