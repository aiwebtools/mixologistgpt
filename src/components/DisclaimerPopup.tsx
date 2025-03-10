
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem("disclaimerAgreed");
    
    if (!hasAgreed) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("disclaimerAgreed", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-cyberpunk-darker to-[#150D1A] border border-cyberpunk-purple/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyberpunk-pink/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyberpunk-neon/20 rounded-full blur-xl"></div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyberpunk-neon to-cyberpunk-purple bg-clip-text text-transparent">
                  Before You Continue
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-cyberpunk-neon to-cyberpunk-pink rounded-full mx-auto mt-2"></div>
              </div>
              
              <div className="space-y-4 mb-6 text-gray-300 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                <p className="font-medium">
                  By using <span className="text-cyberpunk-neon font-bold">Kenny the Mixologist</span>, you confirm that:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>You are of legal drinking age in your country or region</li>
                  <li>You understand that consumption of alcoholic beverages impairs your ability to drive or operate machinery</li>
                  <li>You agree to drink responsibly and acknowledge that AI WEB TOOLS LLC is not liable for any consequences resulting from the use of provided recipes</li>
                  <li>You will exercise caution regarding allergies and ingredients</li>
                </ul>
                
                <p>
                  Our recipes are for entertainment purposes. Always use your best judgment when mixing and consuming alcoholic beverages.
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handleAgree}
                  className="relative group overflow-hidden rounded-xl px-8 py-3 font-bold tracking-wider text-white"
                >
                  {/* Button background gradient */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink opacity-80 group-hover:opacity-100 transition-opacity"></span>
                  
                  {/* Button glow effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></span>
                  
                  {/* Button text */}
                  <span className="relative font-extrabold tracking-wider text-lg bg-clip-text bg-gradient-to-r from-white to-white/90 group-hover:text-white transition-all">
                    I AGREE
                  </span>
                  
                  {/* Button hover effects */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 group-hover:animate-pulse"></span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
