
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Marci Metzger",
  description: "The page you are looking for is not available."
};

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="min-h-[calc(100dvh-68px)] flex-1 flex justify-center flex-col gap-20 items-center p-4 bg-background text-text">
          <h1 className="text-2xl font-bold text-primary">
            Oh no... The page you are looking for is not available.
          </h1>
          <button className="text-xl text-white border border-none bg-primary px-5 pt-4 pb-5 rounded-xl hover:bg-secondary hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer">
            <Link href="/">
              Back to Home
            </Link>
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
}
