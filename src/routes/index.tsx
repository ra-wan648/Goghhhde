import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/site/Marquee";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { StatsSection, TestimonialsSection } from "@/components/sections/Extras";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jepy — Your Content, Elevated." },
      { name: "description", content: "Cinematic edits, motion design and color for creators, brands and SaaS that demand attention." },
      { property: "og:title", content: "Jepy — Your Content, Elevated." },
      { property: "og:description", content: "Cinematic post-production for creators, brands and SaaS." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <WorkSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
