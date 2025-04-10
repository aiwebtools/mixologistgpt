import { MessageSquare, Sparkles, Coffee, ExternalLink, ChefHat } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Share Your Preferences",
    description: "Tell Kenny about your flavor preferences, available ingredients, or dietary restrictions. Be as specific or open-ended as you like.",
    color: "from-cyberpunk-neon to-blue-400",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Get Personalized Recipes",
    description: "Kenny will analyze your preferences and suggest 5 perfect cocktail recipes with detailed instructions and creative descriptions.",
    color: "from-cyberpunk-pink to-purple-400",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Mix and Enjoy",
    description: "Follow Kenny's detailed instructions to craft your personalized drink. Enjoy your creation and share feedback for even better recommendations.",
    color: "from-cyberpunk-green to-emerald-400",
  },
];

const StepCard = ({ step, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Connecting line */}
      {index < steps.length - 1 && (
        <div className="absolute top-16 left-10 w-1 h-[calc(100%-4rem)] bg-gradient-to-b from-gray-500 to-transparent z-0"></div>
      )}
      
      <div className="relative z-10 flex gap-6 mb-12">
        {/* Step number */}
        <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg`}>
          <div className="flex flex-col items-center justify-center">
            {step.icon}
            <span className="text-xs font-bold mt-1">STEP {index + 1}</span>
          </div>
        </div>
        
        {/* Step content */}
        <div className="glass-card rounded-xl p-6 flex-1">
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-gray-300">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-cyberpunk-neon/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="neon-text-pink">It Works</span>
          </h2>
          <p className="text-lg text-gray-300">
            Get started with Kenny the Mixologist in just a few simple steps
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button-blue inline-flex items-center gap-2 group"
          >
            <span className="relative z-10">
              TRY KENNY NOW
              <Sparkles className="w-5 h-5 inline-block ml-2 transition-transform group-hover:scale-110" />
            </span>
          </a>
        </div>
        
        {/* YouTube Video Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-6 border border-white/10">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/vJz1HOGtV0I?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&hd=1"
                title="Kenny the Mixologist Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-300 mt-4 text-center">
              See how Kenny creates amazing personalized cocktail recipes just for you!
            </p>
            
            {/* Added Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
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
                href="https://chefgpt.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-green group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  TRY CHEF SIZZLE GPT
                  <ChefHat className="w-5 h-5 transition-transform group-hover:scale-110" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
