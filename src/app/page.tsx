import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { GetItSold } from "../../components/GetItSold";
import { FindYourDreamHome } from "../../components/FindYourDreamHome";
import { BrandLogos } from "../../components/BrandLogos";
import { PhotoGallery } from "../../components/PhotoGallery";
import { OurServices } from "../../components/OurServices";
import { CallOrVisit } from "../../components/CallOrVisit";
import { MapSection } from "../../components/MapSection";

export const metadata: Metadata = {
  title: "Marci Metzger | Pahrump Realtor – The Ridge Realty Group",
  description:
    "Marci Metzger, Pahrump realtor for nearly 3 decades with The Ridge Realty Group. Buy, sell and find your dream home in Pahrump, Nevada.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 text-text">
        <Hero />
        <FindYourDreamHome />
        <OurServices />
        <PhotoGallery />
        <BrandLogos />
        <GetItSold />
        <CallOrVisit />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
