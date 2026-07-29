import { siteConfig } from "@/data/site-config";

export default function Stats() {
  return (
    <section className="border-b border-mist-100 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-700/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
