
import { Sparkles, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        {/* Animated background grid */}
        <div className="absolute inset-0 cyberpunk-grid-bg opacity-50"></div>
        
        {/* Glow effects */}
        <div className="absolute top-[-20%] left-[30%] w-[60%] h-[60%] bg-gradient-to-br from-cyberpunk-neon/20 to-cyberpunk-purple/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[30%] w-[60%] h-[60%] bg-gradient-to-br from-cyberpunk-pink/20 to-cyberpunk-green/20 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10 max-w-5xl mx-auto relative overflow-hidden">
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon via-cyberpunk-pink to-cyberpunk-purple animate-gradient-shift opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready To Meet Your New<br />
              <span className="neon-text-blue">AI Mixologist?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Start crafting amazing cocktails with Kenny's expert guidance and discover a world of mixology at your fingertips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-blue group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  TRY MIXOLOGIST GPT NOW
                  <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
                </span>
              </a>
              
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-pink group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  EXPLORE MORE AI TOOLS
                  <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
