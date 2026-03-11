import { BrandPhilosophy } from "@/components/BrandPhilosophy";
import { CommunitySection } from "@/components/CommunitySection";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { HeroSection } from "@/components/HeroSection";
import { JournalSection } from "@/components/JournalSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ProductHighlight } from "@/components/ProductHighlight";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <ScrollReveal />
      <HeroSection />
      <FeaturedCollection />
      <BrandPhilosophy />
      <ProductHighlight />
      <CommunitySection />
      <JournalSection />
      <NewsletterSection />
    </main>
  );
}
