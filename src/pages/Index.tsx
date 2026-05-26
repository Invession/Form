import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductSection } from "@/components/home/ProductSection";
import { TeamSection } from "@/components/home/TeamSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <FeaturesSection />
      <ProductSection />
      <TeamSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
