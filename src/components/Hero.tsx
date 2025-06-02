
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Martini, Sparkles, Book, ChefHat } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <div className="absolute inset-0 cyberpunk-grid-bg opacity-40"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyberpunk-pink/25 blur-[120px] rounded-full animate-ethereal-drift"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyberpunk-neon/25 blur-[120px] rounded-full animate-ethereal-drift animation-delay-300"></div>
        <div className="absolute top-[30%] left-[70%] w-[40%] h-[40%] bg-cyberpunk-purple/20 blur-[100px] rounded-full animate-ethereal-drift animation-delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyberpunk-neon rounded-full animate-pulse-divine"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyberpunk-pink rounded-full animate-pulse-divine animation-delay-200"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyberpunk-purple rounded-full animate-pulse-divine animation-delay-400"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-cyberpunk-green rounded-full animate-pulse-divine animation-delay-700"></div>
        <div className="absolute top-[60%] right-[60%] w-1 h-1 bg-cyberpunk-yellow rounded-full animate-pulse-divine animation-delay-100"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-12">
          {/* Text content */}
          <div className={`lg:w-1/2 text-center lg:text-left space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-block mb-2">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyberpunk-neon/10 to-cyberpunk-pink/10 border border-cyberpunk-neon/30 text-cyberpunk-neon text-xs font-semibold animate-glow-pulse backdrop-blur-sm">
                INTRODUCING THE FUTURE OF MIXOLOGY
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Meet <span className="neon-text-blue text-glow-lg">Kenny</span>, Your AI <span className="neon-text-pink text-glow-lg">Mixologist</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Pouring Knowledge, Shaking Wisdom: Where Every Sip Tells a Story
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
              <a
                href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-blue group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  TRY MIXOLOGIST GPT
                  <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110 animate-pulse-divine" />
                </span>
              </a>
              <a
                href="#how-it-works"
                className="neon-button-pink group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  HOW IT WORKS
                  <Book className="w-5 h-5 transition-transform group-hover:scale-110" />
                </span>
              </a>
            </div>
          </div>
          
          {/* 3D/Image element */}
          <div className={`lg:w-1/2 flex justify-center items-center ${isVisible ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Enhanced Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-neon via-cyberpunk-pink to-cyberpunk-purple opacity-40 blur-[40px] rounded-full animate-glow"></div>
              <div className="absolute inset-[-10px] bg-gradient-to-br from-cyberpunk-blue/30 to-transparent opacity-50 blur-[20px] rounded-full animate-pulse-divine"></div>
              
              {/* Main image */}
              <div className="relative z-10 bg-gradient-to-br from-cyberpunk-pink/15 to-cyberpunk-neon/15 backdrop-blur-lg p-2 rounded-3xl border-2 border-white/20 shadow-divine animate-float">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
                    alt="Kenny the AI Mixologist"
                    className="rounded-2xl w-full max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark/20 via-transparent to-cyberpunk-neon/10 rounded-2xl"></div>
                </div>
              </div>
              
              {/* Enhanced Floating elements */}
              <div className="absolute top-[5%] right-[-5%] glass-card p-4 rounded-xl shadow-divine-glow animate-float animate-delay-300 z-20 border border-cyberpunk-neon/30">
                <Martini className="w-8 h-8 text-cyberpunk-neon animate-pulse-divine" />
              </div>
              
              <div className="absolute bottom-[10%] left-[-8%] glass-card p-4 rounded-xl shadow-divine-glow animate-float animate-delay-500 z-20 border border-cyberpunk-pink/30">
                <ChefHat className="w-8 h-8 text-cyberpunk-pink animate-pulse-divine" />
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-[70%] right-[10%] glass-card p-2 rounded-lg shadow-divine animate-float animate-delay-700 z-20 border border-cyberpunk-purple/30">
                <Sparkles className="w-6 h-6 text-cyberpunk-purple animate-pulse-divine" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-divine">
          <span className="text-sm text-cyberpunk-neon/80 mb-3 text-glow">Scroll to explore</span>
          <div className="w-6 h-12 border-2 border-cyberpunk-neon/60 rounded-full flex justify-center bg-gradient-to-b from-cyberpunk-neon/10 to-transparent backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-cyberpunk-neon to-cyberpunk-pink rounded-full mt-2 animate-[bounce_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
