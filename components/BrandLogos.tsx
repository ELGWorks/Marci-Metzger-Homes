import Image from "next/image";

const LOGOS = [
  { src: "/logos/brand-logo-1.webp", alt: "The Ridge Realty Group" },
  { src: "/logos/brand-logo-2.webp", alt: "Equal Housing Opportunity" },
  { src: "/logos/brand-logo-3.webp", alt: "REALTOR" },
  { src: "/logos/brand-logo-4.webp", alt: "Pahrump Valley Chamber of Commerce" },
];

export function BrandLogos() {
  return (
    <section className="flex min-h-dvh flex-col bg-surface px-5 pt-12 pb-20 lg:px-10">
      <div className="text-center">
        <h2 className="text-3xl tracking-[0.2em] text-primary uppercase sm:text-4xl">
          Trusted Affiliations
        </h2>
        <span className="mx-auto mt-4 block h-0.5 w-16 bg-secondary" />
      </div>

      <div className="flex flex-1 items-center justify-center py-10">
        <ul className="grid w-full max-w-5xl grid-cols-2 items-center gap-10 md:grid-cols-4">
          {LOGOS.map(({ src, alt }) => (
            <li key={alt} className="flex justify-center">
              <Image
                src={src}
                alt={alt}
                width={220}
                height={220}
                className="h-auto max-h-32 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:max-h-40"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}