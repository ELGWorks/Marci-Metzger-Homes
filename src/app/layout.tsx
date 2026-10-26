import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Marci Metzger | Pahrump Realtor – The Ridge Realty Group",
  description:
    "Marci Metzger, Pahrump realtor for nearly 3 decades with The Ridge Realty Group. Buy, sell and find your dream home in Pahrump, Nevada.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
