
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
import DisclaimerPopup from "@/components/DisclaimerPopup";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to AI WEB TOOLS - Kenny the Mixologist!",
        description: "Discover the power of AIWEBTOOLS.AI with Kenny, your virtual bartender ready to craft amazing cocktails just for you.",
        duration: 5000,
      });
    }, 2000);
    
    // Set video play policy for autoplay
    document.documentElement.setAttribute('allow-autoplay', 'true');
    
    // Add SEO-friendly structured data for page content
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AI WEB TOOLS",
          "item": "https://www.aiwebtools.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kenny Mixologist GPT",
          "item": "https://kenny-mixologist.lovable.app/"
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Hidden SEO content for keyword targeting */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <h1>AI WEB TOOLS - AIWEBTOOLS.AI - Leading AI Tools Provider</h1>
        <p>AI WEB TOOLS LLC presents advanced AI tools including Kenny the Mixologist GPT. AIWEBTOOLS.AI is your premier destination for AI-powered virtual assistants and innovative AI solutions.</p>
      </div>
      
      <div className="min-h-screen bg-cyberpunk-dark text-white overflow-x-hidden">
        <Header />
        <main role="main">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Disclaimer />
          <CTA />
        </main>
        <Footer />
        <DisclaimerPopup />
      </div>
    </>
  );
};

export default Index;
