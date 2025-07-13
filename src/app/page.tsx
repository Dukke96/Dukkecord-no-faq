import FeaturesSectionDemo2 from "@/components/features-section-demo-2";
import FeaturesSectionDemo3 from "@/components/features-section-demo-3";
import { HeroSection } from "@/components/hero-section";
import PricingSectionCards from "@/components/pricing-section";
import NavBar from "@/components/navbar";
import IntegrationsSection from "@/components/integrations-1";
import WallOfLoveSection from "@/components/testimonials";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import FooterSection from "@/components/footer";
import CTATest from "@/components/cta-test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mx-auto">
      <NavBar />
      <div id="#home" className="mt-20">
        <HeroSection />
      </div>
      {/* Features Section */}
      <div id="features" className="">
        <FeaturesSectionDemo3 />
        <FeaturesSectionDemo2 />
        <IntegrationsSection />
      </div>
      {/* Stats Section */}
      <StatsSection />
      {/* Wall of Love Section */}
      <div id="testimonials" className="pt-20">
        <WallOfLoveSection />
      </div>
      {/* Team Section */}
      <div id="team" className="pt-20">
        <TeamSection />
      </div>
      {/* Pricing Section */}
      <div id="pricing" className="pt-20">
        <PricingSectionCards />
      </div>
      {/* CTA Section */}
      <CTATest />
      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
