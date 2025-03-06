
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
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden cyberpunk-grid-bg z-[-1]">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[40%] bg-cyberpunk-pink/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[40%] bg-cyberpunk-neon/20 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-12">
          {/* Text content */}
          <div className={`lg:w-1/2 text-center lg:text-left space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-block mb-2">
              <div className="px-3 py-1 rounded-full bg-cyberpunk-neon/10 border border-cyberpunk-neon/30 text-cyberpunk-neon text-xs font-semibold">
                INTRODUCING THE FUTURE OF MIXOLOGY
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Meet <span className="neon-text-blue">Kenny</span>, Your AI <span className="neon-text-pink">Mixologist</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Pouring Knowledge, Shaking Wisdom: Where Every Sip Tells a Story
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-blue group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  TRY MIXOLOGIST GPT
                  <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
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
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-neon to-cyberpunk-blue opacity-30 blur-[30px] rounded-full"></div>
              
              {/* Main image */}
              <div className="relative z-10 bg-gradient-to-br from-cyberpunk-pink/10 to-cyberpunk-neon/10 backdrop-blur-sm p-1 rounded-2xl border border-white/10 shadow-xl animate-float">
                <img
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-modern-and-stylish-bartender-with.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
                  alt="Kenny the AI Mixologist"
                  className="rounded-2xl w-full max-w-md lg:max-w-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-[5%] right-[-5%] glass-card p-3 rounded-xl shadow-neon-blue animate-float animate-delay-300 z-20">
                <Martini className="w-8 h-8 text-cyberpunk-neon" />
              </div>
              
              <div className="absolute bottom-[10%] left-[-8%] glass-card p-3 rounded-xl shadow-neon-pink animate-float animate-delay-500 z-20">
                <ChefHat className="w-8 h-8 text-cyberpunk-pink" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
          <span className="text-sm text-cyberpunk-neon/80 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyberpunk-neon/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyberpunk-neon rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
