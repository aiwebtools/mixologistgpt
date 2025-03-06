
import { useState, useEffect, useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Bartender",
    image: "https://i.pravatar.cc/150?img=32",
    content: "Kenny made me look like a professional mixologist at my dinner party. The personalized recipes were a hit with all my guests, even those with dietary restrictions!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Cocktail Enthusiast",
    image: "https://i.pravatar.cc/150?img=11",
    content: "I've always struggled with creating unique cocktails for my friends. Kenny not only suggested amazing recipes based on what I had in my pantry but explained the rationale behind each ingredient. Amazing tool!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Party Planner",
    image: "https://i.pravatar.cc/150?img=5",
    content: "As someone who plans events, Kenny has become my secret weapon. I can create themed drink menus in minutes that perfectly match the vibe of each event. My clients are always impressed!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Beginner Mixologist",
    image: "https://i.pravatar.cc/150?img=53",
    content: "The step-by-step instructions are perfect for beginners like me. I went from making basic rum and cokes to crafting impressive cocktails with complex flavors. Kenny's humor makes learning fun too!",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    role: "Health-Conscious Drinker",
    image: "https://i.pravatar.cc/150?img=44",
    content: "I love that Kenny can create delicious low-calorie and non-alcoholic options. The mocktails he suggested were so flavorful that I didn't miss the alcohol at all. Perfect for my health goals!",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyberpunk-neon">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? "text-cyberpunk-yellow fill-cyberpunk-yellow" : "text-gray-600"
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-300 flex-1">"{testimonial.content}"</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);
  const maxIndex = Math.max(0, testimonials.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="py-24 relative" id="testimonials" ref={testimonialsRef}>
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-cyberpunk-pink/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="neon-text-green">Users Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            See how Kenny is transforming the way people enjoy cocktails
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / (testimonials.length > 3 ? 3 : testimonials.length))}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                disabled={currentIndex === 0}
                className={`p-3 rounded-full ${
                  currentIndex === 0 
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                    : "bg-cyberpunk-neon/20 text-cyberpunk-neon hover:bg-cyberpunk-neon/30"
                } transition-colors`}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                disabled={currentIndex === maxIndex}
                className={`p-3 rounded-full ${
                  currentIndex === maxIndex
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                    : "bg-cyberpunk-neon/20 text-cyberpunk-neon hover:bg-cyberpunk-neon/30"
                } transition-colors`}
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
