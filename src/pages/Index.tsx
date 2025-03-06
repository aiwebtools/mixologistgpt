
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to iMixologist GPT!",
        description: "Meet Kenny, your virtual bartender ready to craft amazing cocktails just for you.",
        duration: 5000,
      });
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
