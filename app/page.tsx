import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import Cotizador from "@/components/Cotizador";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BeforeAfter />
      <TrustBadges />
      <HowItWorks />
      <Cotizador />
      <Services />
      <AboutUs />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
