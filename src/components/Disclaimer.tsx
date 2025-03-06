
import { useState, useEffect, useRef } from "react";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const disclaimerRef = useRef(null);

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

    if (disclaimerRef.current) {
      observer.observe(disclaimerRef.current);
    }

    return () => {
      if (disclaimerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-24 relative" id="disclaimer" ref={disclaimerRef}>
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyberpunk-pink/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Legal <span className="neon-text-pink">Disclaimer</span>
          </h2>
        </div>
        
        <div className={`max-w-4xl mx-auto glass-card rounded-xl p-6 md:p-8 border border-cyberpunk-pink/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-cyberpunk-pink flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Important Notice</h3>
              <p className="text-gray-300">
                Please read this disclaimer carefully before using iMixologist GPT.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">General Information</h4>
              <p>
                iMixologist GPT provides cocktail recipes and mixology information for entertainment and educational purposes only. While we strive for accuracy, we cannot guarantee that all information provided is complete, up-to-date, or error-free.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Alcoholic Beverages</h4>
              <p>
                Recommendations involving alcoholic beverages are intended only for adults of legal drinking age in their respective jurisdictions. We strongly encourage responsible drinking and discourage any form of alcohol abuse. Do not drink and drive or operate machinery after consuming alcohol.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Allergies and Dietary Restrictions</h4>
              <p>
                While iMixologist GPT attempts to accommodate allergies and dietary restrictions when mentioned, users with severe allergies or medical conditions should exercise caution and consult with healthcare professionals before consuming any recommended beverage.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Medical Advice</h4>
              <p>
                iMixologist GPT does not provide medical advice. Information provided should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions regarding medical conditions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Limitation of Liability</h4>
              <p>
                AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use iMixologist GPT or any content provided.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">User Responsibility</h4>
              <p>
                By using iMixologist GPT, you acknowledge and agree that you are responsible for your own actions and decisions related to the information provided. You must exercise judgment and care when implementing any recipes or advice given.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Changes to Disclaimer</h4>
              <p>
                AI WEB TOOLS LLC reserves the right to modify this disclaimer at any time without prior notice. Your continued use of iMixologist GPT constitutes your acceptance of such modifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
