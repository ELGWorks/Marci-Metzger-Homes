import Image from "next/image";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/MarciHomes/", icon: "/icons/facebook-logo.svg" },
  { name: "Instagram", href: "https://www.instagram.com/marcimetzger_theridge/", icon: "/icons/instagram-logo.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/marci-metzger-30642496/", icon: "/icons/linkedin-logo.svg" },
  { name: "Yelp", href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump", icon: "/icons/yelp-svgrepo-com.svg" },
];

export function Footer() {
  return (
    <footer className="w-full bg-primary px-4 py-8">
      <nav aria-label="Social media" className="flex justify-center gap-5">
        {SOCIALS.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            className="opacity-90 transition hover:-translate-y-0.5 hover:opacity-100"
          >
            <Image
              src={icon}
              alt=""
              width={32}
              height={32}
              className="brightness-0 invert"
            />
          </a>
        ))}
      </nav>
      <p className="mt-6 text-center text-xs tracking-widest text-white/70 uppercase">
        Copyright © {new Date().getFullYear()} Marci Metzger – All Rights Reserved
      </p>
    </footer>
  );
}