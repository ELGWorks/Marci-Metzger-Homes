import Image from "next/image";

const field =
  "w-full rounded-md border border-muted/40 bg-white px-3 py-3 text-sm text-text outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/40";
const label =
  "mb-1 block text-xs font-semibold tracking-widest text-primary uppercase";

export function FindYourDreamHome() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center px-5 py-20">
      <Image
        src="/images/dream-house-form-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/55" />

      <div className="relative z-10 w-full max-w-4xl">
        <h2 className="mb-8 text-center text-3xl tracking-[0.2em] text-white uppercase sm:text-4xl">
          Find Your Dream Home
        </h2>

        <form
          action="/listings"
          method="get"
          className="rounded-xl bg-surface p-6 shadow-2xl sm:p-10"
        >
          <h3 className="mb-6 text-xl tracking-widest text-secondary uppercase">
            Search Listings
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="location" className={label}>Location</label>
              <select id="location" name="location" className={field} defaultValue="">
                <option value="">Any</option>
                <option>Pahrump</option>
                <option>Las Vegas</option>
                <option>Amargosa Valley</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className={label}>Type</label>
              <select id="type" name="type" className={field} defaultValue="">
                <option value="">Any</option>
                <option>House</option>
                <option>Condo</option>
                <option>Land</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label htmlFor="sort" className={label}>Sort By</label>
              <select id="sort" name="sort" className={field} defaultValue="newest">
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="beds" className={label}>Bedrooms</label>
              <select id="beds" name="beds" className={field} defaultValue="">
                <option value="">Any Number</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}+</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="baths" className={label}>Baths</label>
              <select id="baths" name="baths" className={field} defaultValue="">
                <option value="">Any Number</option>
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}+</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="min" className={label}>Min Price</label>
                <input id="min" name="min" type="number" min={0} step={10000} placeholder="$" className={field} />
              </div>
              <div>
                <label htmlFor="max" className={label}>Max Price</label>
                <input id="max" name="max" type="number" min={0} step={10000} placeholder="$" className={field} />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full cursor-pointer rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-secondary hover:text-primary sm:w-auto"
          >
            Search now
          </button>
        </form>
      </div>
    </section>
  );
}