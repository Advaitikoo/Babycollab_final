import Hero from "../components/Hero";
import Features from "../components/Features";
import Impressions from "../components/Impressions";
import Team from "../components/Team";
import CTAAndFooter from "../components/CTAAndFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Impressions />
      <Team />
      <CTAAndFooter />
    </div>
  );
}
