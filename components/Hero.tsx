import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-68px)] flex-col items-center justify-center overflow-hidden bg-background text-text md:flex-row md:gap-10 lg:gap-35 xl:gap-50">
      {/* Soft decorative glows behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 -z-10 size-96 rounded-full bg-secondary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 -z-10 size-96 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Left: headshot */}
      <div className="mt-10 flex flex-col items-center justify-center p-4">
        <h1 className="animate-fade-up pb-10 text-4xl font-bold text-primary motion-reduce:animate-none sm:mb-5 sm:text-5xl md:hidden">
          MARCI METZGER
        </h1>

        <div className="animate-fade-up relative mb-5 [animation-delay:150ms] motion-reduce:animate-none">
          {/* Offset gold frame */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-secondary sm:translate-x-4 sm:translate-y-4"
          />
          <Image
            src="/images/intro_image.webp"
            alt="Marci Metzger, Pahrump realtor"
            width={500}
            height={500}
            priority
            className="relative h-60 w-50 rounded-xl object-cover shadow-2xl sm:h-100 sm:w-80 md:h-130 md:w-100 xl:h-150 xl:w-130"
          />
        </div>
      </div>

      {/* Right: text */}
      <div className="mb-10 flex flex-col items-center justify-center gap-10 px-4 sm:gap-15 md:m-0 md:gap-15 xl:gap-30">
        <div className="animate-fade-up flex flex-col items-center gap-5 [animation-delay:300ms] motion-reduce:animate-none">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-secondary uppercase sm:text-sm">
            <span className="h-px w-8 bg-secondary" />
            Realtor for nearly 3 decades
            <span className="h-px w-8 bg-secondary" />
          </p>
          <h2 className="hidden text-5xl font-bold text-primary md:block xl:text-7xl">
            MARCI METZGER
          </h2>
          <span className="block h-0.5 w-16 bg-secondary" />
        </div>

        <p className="animate-fade-up text-center font-medium tracking-wide text-primary [animation-delay:450ms] motion-reduce:animate-none sm:mt-5 sm:text-lg md:text-xl xl:text-2xl">
          THE RIDGE REALTY GROUP | Pahrump Realtor
        </p>

        <div className="animate-fade-up flex flex-col items-center gap-4 [animation-delay:600ms] motion-reduce:animate-none">
          <a
            href="tel:+12069196886"
            className="cursor-pointer rounded-xl bg-primary px-8 py-4 text-xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-secondary hover:text-primary hover:shadow-xl lg:px-16"
          >
            Call now
          </a>
          <a
            href="tel:+12069196886"
            className="text-lg font-semibold tracking-wider text-primary transition-colors hover:text-secondary"
          >
            206-919-6886
          </a>
        </div>
      </div>
    </section>
  );
}