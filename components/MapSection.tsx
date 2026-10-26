const ADDRESS = "3190 Nevada Hwy 160 Suite F, Pahrump, NV 89048";
const query = encodeURIComponent(ADDRESS);

export function MapSection() {
  return (
    <section className="relative h-dvh min-h-125 w-full">
      <iframe
        title="Map showing the Marci Metzger – The Ridge Realty Group office in Pahrump, Nevada"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="absolute top-4 left-4 max-w-xs rounded-lg bg-primary p-4 text-white shadow-xl sm:top-6 sm:left-6">
        <p className="text-sm font-semibold">The Ridge Realty Group</p>
        <p className="mt-1 text-xs text-white/80">{ADDRESS}</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-secondary px-4 py-2 text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:bg-white"
        >
          Get directions
        </a>
      </div>
    </section>
  );
}