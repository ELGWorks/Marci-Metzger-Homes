import Image from "next/image";

const ITEMS = [
  {
    image: "/images/get-it-sold-1.webp",
    alt: "Modern kitchen with an island and large windows",
    title: "Top Residential Sales Last 5 Years",
    text: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
  },
  {
    image: "/images/get-it-sold-2.webp",
    alt: "Luxury home with a pool at dusk",
    title: "Don't Just List It...",
    text: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    image: "/images/get-it-sold-3.webp",
    alt: "House-shaped keychain with keys on a wooden table",
    title: "Guide to Buyers",
    text: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
];

export function GetItSold() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden px-5 py-20 lg:px-10">
      {/* Background photo */}
      <Image
        src="/images/background.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Navy overlay keeps the white heading readable */}
      <div className="absolute inset-0 -z-10 bg-primary/70" />

      <div className="text-center">
        <h2 className="text-3xl tracking-[0.2em] text-white uppercase sm:text-4xl">
          Get It Sold
        </h2>
        <span className="mx-auto mt-4 block h-0.5 w-16 bg-secondary" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center py-10">
        <div className="mx-auto grid w-full max-w-xl gap-8 lg:max-w-none lg:grid-cols-3">
          {ITEMS.map(({ image, alt, title, text }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 576px) 576px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 text-center">
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <span className="mx-auto block h-0.5 w-10 bg-secondary" />
                <p className="text-sm leading-relaxed text-text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}