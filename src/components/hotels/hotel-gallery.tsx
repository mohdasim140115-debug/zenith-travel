import Image from "next/image";

export default function HotelGallery({ images, name }: { images: string[]; name: string }) {
  const [main, ...rest] = images;
  const side = rest.slice(0, 2);
  const extraCount = images.length - 3;

  return (
    <div className="grid h-72 grid-cols-1 gap-3 sm:h-96 sm:grid-cols-[2fr_1fr]">
      <div className="relative h-full w-full overflow-hidden rounded-card">
        <Image src={main} alt={name} fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" priority />
      </div>
      <div className="hidden grid-rows-2 gap-3 sm:grid">
        {side.map((src, i) => {
          const isLast = i === side.length - 1;
          return (
            <div key={i} className="relative h-full w-full overflow-hidden rounded-card">
              <Image src={src} alt={`${name} photo ${i + 2}`} fill sizes="320px" className="object-cover" />
              {isLast && extraCount > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/50">
                  <span className="text-lg font-semibold text-white">+{extraCount} Photos</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
