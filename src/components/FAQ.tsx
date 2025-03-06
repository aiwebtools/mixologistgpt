
import { useState, useEffect, useRef } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const faqs = [
  {
    question: "What is iMixologist GPT?",
    answer: "iMixologist GPT (Kenny) is an AI virtual bartender that creates personalized cocktail recipes based on your preferences, available ingredients, and dietary restrictions. Kenny combines mixology expertise with a fun, engaging personality to deliver unique drink recommendations."
  },
  {
    question: "Do I need to know about cocktails to use Kenny?",
    answer: "Not at all! Kenny is designed for everyone from beginners to cocktail enthusiasts. If you're new to mixology, Kenny will provide detailed, easy-to-follow instructions and explanations. For experienced users, Kenny can suggest complex creations and discuss advanced techniques."
  },
  {
    question: "Can Kenny create non-alcoholic drinks?",
    answer: "Absolutely! Kenny excels at creating delicious mocktails and non-alcoholic beverages. Just mention that you're looking for non-alcoholic options, and Kenny will craft perfectly balanced alcohol-free recipes."
  },
  {
    question: "How does Kenny handle dietary restrictions?",
    answer: "Kenny takes dietary restrictions very seriously. Simply inform Kenny about any allergies, intolerances, or dietary preferences, and all recommendations will accommodate those needs while still delivering great taste experiences."
  },
  {
    question: "Can Kenny create original cocktail recipes?",
    answer: "Yes! One of Kenny's specialties is creating unique, original cocktail recipes based on your preferences or available ingredients. These custom creations come with creative names, detailed instructions, and Kenny's signature humor."
  },
  {
    question: "Is there a limit to how many recipes Kenny can provide?",
    answer: "Kenny typically provides 5 detailed cocktail recipes per request, but you can always ask for more options or variations if you'd like to explore additional possibilities."
  },
  {
    question: "Who created iMixologist GPT?",
    answer: "Kenny, the virtual bartender and mixologist, was created by Kenneth Bastian from AI WEB TOOLS LLC. The tool combines expertise in mixology with advanced AI capabilities to deliver a personalized cocktail experience."
  }
];

const FAQItem = ({ faq, index, isOpen, toggle }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div 
      className="border-b border-gray-800 last:border-b-0"
      data-open={isOpen}
    >
      <button
        className="w-full py-6 flex items-center justify-between focus:outline-none"
        onClick={() => toggle(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
      >
        <h3 className="text-left text-lg font-semibold text-white">{faq.question}</h3>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <MinusCircle className="w-6 h-6 text-cyberpunk-neon" />
          ) : (
            <PlusCircle className="w-6 h-6 text-cyberpunk-neon" />
          )}
        </div>
      </button>
      
      <div
        id={`faq-content-${index}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? `${contentHeight}px` : "0",
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-6 text-gray-300" ref={contentRef}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-24 relative" id="faq" ref={faqRef}>
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyberpunk-purple/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently <span className="neon-text-purple">Asked Questions</span>
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about Kenny the Mixologist
            </p>
          </div>
          
          <div className={`glass-card rounded-xl p-6 md:p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                toggle={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
