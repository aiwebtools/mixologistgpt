
import { Sparkles, BookOpen, Beaker, Zap, Cocktail, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: <Cocktail className="w-6 h-6 text-cyberpunk-neon" />,
    title: "Personalized Recipes",
    description: "Kenny crafts cocktail recipes tailored to your taste preferences, available ingredients, and dietary restrictions.",
    color: "neon-blue",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-cyberpunk-pink" />,
    title: "Interactive Conversations",
    description: "Have lively, humorous chats with Kenny about all things mixology, from classic cocktails to modern innovations.",
    color: "neon-pink", 
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyberpunk-purple" />,
    title: "Mixology Knowledge",
    description: "Access a vast database of cocktail recipes, techniques, and insights from an experienced virtual bartender.",
    color: "neon-purple",
  },
  {
    icon: <Beaker className="w-6 h-6 text-cyberpunk-green" />,
    title: "Creative Concoctions",
    description: "Get unique drink creations tailored to your preferences or inspired by your favorite flavors and ingredients.",
    color: "neon-green",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyberpunk-yellow" />,
    title: "Instant Assistance",
    description: "Receive immediate help with cocktail recipes, substitutions, and mixology techniques whenever you need it.",
    color: "neon-blue",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-cyberpunk-pink" />,
    title: "Entertaining Personality",
    description: "Enjoy Kenny's humorous, quirky style that makes learning about cocktails fun and engaging.",
    color: "neon-pink",
  },
];

const FeatureCard = ({ feature, index }) => {
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
      className={`glass-card p-6 rounded-xl transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`mb-4 p-3 rounded-lg inline-flex ${feature.color === "neon-blue" ? "bg-cyberpunk-neon/10" : feature.color === "neon-pink" ? "bg-cyberpunk-pink/10" : feature.color === "neon-purple" ? "bg-cyberpunk-purple/10" : "bg-cyberpunk-green/10"}`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-[-10%] left-[30%] w-[40%] h-[40%] bg-cyberpunk-purple/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Kenny <span className="neon-text-blue">Special</span>
          </h2>
          <p className="text-lg text-gray-300">
            Discover all the amazing capabilities of your new favorite AI bartender
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
