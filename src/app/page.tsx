import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StatsBar from "./Components/StatsBar";
import NetworkingSection from "./Components/NetworkingSection";
import StepByStep from "./Components/StepByStep";
import MadeForPeople from "./Components/MadeForPeople";
import Testimonials from "./Components/Testimonials";
import Facilitators from "./Components/Facilitators";
import PricingPlans from "./Components/PricingPlans";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";


export default function HomePage() {
  return (
    <main className="bg-[#F9F9F9] text-[#1C1C1C] min-h-screen overflow-x-hidden antialiased scroll-smooth">
      {/* 🧭 NAVBAR */}
      <header>
        <Navbar />
      </header>

      {/* 🎯 HERO */}
      <section id="hero" className="relative">
        <HeroSection />
      </section>
      <section>
        <StatsBar /></section>

      {/* 💬 NOT YOUR TYPICAL NETWORKING GROUP */}
      <section id="networking" className="relative z-10">
        <NetworkingSection />
      </section>

      {/* 🪜 STEP BY STEP */}
      <section id="step-by-step">
        <StepByStep />
      </section>

      {/* 👥 MADE FOR PEOPLE */}
      <section id="made-for-people">
        <MadeForPeople />
      </section>

      {/* 💬 TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 🎓 FACILITATORS */}
      <section id="facilitators">
        <Facilitators />
      </section>

      {/* 💸 PRICING PLANS */}
      <section id="pricing">
        <PricingPlans />
      </section>

      {/* ❓ FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* 🦶 FOOTER */}
      <footer className="mt-24">
        <Footer />
      </footer>
    </main>
  );
}
