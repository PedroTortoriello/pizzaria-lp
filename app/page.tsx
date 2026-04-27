import { ExperienceSection } from "@/components/ExperienceSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { GalleryIngredients } from "@/components/GalleryIngredients";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ItalianSoulSection } from "@/components/ItalianSoulSection";
import { MenuHighlights } from "@/components/MenuHighlights";
import { PoliciesSection } from "@/components/PoliciesSection";
import { SitePreloader } from "@/components/SitePreloader";
import { SpecialEntriesSection } from "@/components/SpecialEntriesSection";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <>
      <SitePreloader />
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ItalianSoulSection />
        <ExperienceSection />
        <MenuHighlights />
        <SpecialEntriesSection />
        <GalleryIngredients />
        <PoliciesSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
