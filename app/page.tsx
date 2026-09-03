import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <Services />
      <WhyUs />
      <ServiceArea />
      <CTASection />
      <Footer />
    </main>
  );
}
