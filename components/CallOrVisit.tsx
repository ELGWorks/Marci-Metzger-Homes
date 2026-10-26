"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent";

const input =
  "w-full border-b border-muted/50 bg-transparent py-3 text-text outline-none transition-colors placeholder:text-muted focus:border-secondary";

const HOURS = [
  { label: "Open today", time: "08:00 am – 07:00 pm" },
  { label: "Open daily", time: "8:00 am – 7:00 pm" },
];

export function CallOrVisit() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    // TODO: replace with a real request (Web3Forms, Formspree, API route...)
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("sent");
    form.reset();
  }

  return (
    <section className="flex min-h-dvh flex-col bg-surface px-5 pt-12 pb-20 lg:px-10">
      <div className="text-center">
        <h2 className="text-3xl tracking-[0.2em] text-primary uppercase sm:text-4xl">
          Call or Visit
        </h2>
        <span className="mx-auto mt-4 block h-0.5 w-16 bg-secondary" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center py-10">
        <div className="grid w-full gap-14 md:grid-cols-2">
          {/* Form */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-primary">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" required placeholder="Name" autoComplete="name" className={input} />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" required placeholder="Email *" autoComplete="email" className={input} />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Message" className={`${input} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full cursor-pointer rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-secondary hover:text-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>

              <p role="status" aria-live="polite" className="min-h-6 text-sm text-primary">
                {status === "sent" && "Thank you! Your message has been sent."}
              </p>
            </form>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Marci Metzger - THE RIDGE REALTY GROUP
              </h3>
              <address className="not-italic leading-relaxed text-text">
                3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
              </address>
              <a
                href="tel:+12069196886"
                className="mt-3 inline-block font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-secondary"
              >
                (206) 919-6886
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Office Hours
              </h3>
              <dl className="divide-y divide-muted/30 border-y border-muted/30">
                {HOURS.map(({ label, time }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <dt className="font-semibold text-primary">{label}</dt>
                    <dd className="text-text">{time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted">
                Appointments outside office hours available upon request. Just call!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}