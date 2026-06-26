import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { AboutSection } from '@/components/sections/AboutSection';
import { CostCalculatorSection } from '@/components/sections/CostCalculatorSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CostCalculatorSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
