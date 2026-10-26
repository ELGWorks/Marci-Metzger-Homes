import Image from "next/image";

const SERVICES = [
  {
    image: "/images/our-service-1.webp",
    alt: "Modern living room with a coffee table and plant",
    title: "Real Estate Done Right",
    text: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the market, our team ensures you get the best experience possible!",
  },
  {
    image: "/images/our-service-2.webp",
    alt: "Contemporary home with a lawn and mountain backdrop",
    title: "Commercial & Residential",
    text: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
  },
  {
    image: "/images/our-service-3.webp",
    alt: "Two people shaking hands over a laptop",
    title: "Rely on Expertise",
    text: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

export function OurServices() {
  return (
    <section className="flex min-h-dvh flex-col bg-background px-5 pt-12 pb-20 lg:px-10">
      <div className="text-center">
        <h2 className="text-3xl tracking-[0.2em] text-primary uppercase sm:text-4xl">
          Our Services
        </h2>
        <span className="mx-auto mt-4 block h-0.5 w-16 bg-secondary" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center py-10">
        <div className="grid w-full gap-10 md:grid-cols-3">
          {SERVICES.map(({ image, alt, title, text }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
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