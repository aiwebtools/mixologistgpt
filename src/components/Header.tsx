
import { useState, useEffect } from "react";
import { Martini, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-cyberpunk-darker/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center gap-2 no-underline group"
          aria-label="Home"
        >
          <div className="w-10 h-10 relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyberpunk-neon to-cyberpunk-blue opacity-80 blur-[2px] group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-cyberpunk-darker rounded-full p-2">
              <Martini className="w-5 h-5 text-cyberpunk-neon group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold neon-text-blue m-0 leading-tight">
              iMixologist GPT
            </h1>
            <p className="text-[10px] opacity-80 text-gray-300 leading-tight">
              Presented by AiWebTools.Ai
            </p>
          </div>
        </a>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none focus:ring-1 focus:ring-cyberpunk-neon rounded-md"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-cyberpunk-pink" />
              ) : (
                <Menu className="w-6 h-6 text-cyberpunk-neon" />
              )}
            </button>

            {/* Mobile menu */}
            <div
              className={cn(
                "fixed inset-0 z-50 bg-cyberpunk-darker/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out",
                isMenuOpen
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible translate-x-full"
              )}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-cyberpunk-pink" />
              </button>

              <a
                href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-blue"
                onClick={closeMenu}
              >
                TRY MIXOLOGIST GPT
              </a>
              <a
                href="#faq"
                className="text-white hover:text-cyberpunk-neon transition-colors"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <a
                href="#disclaimer"
                className="text-white hover:text-cyberpunk-neon transition-colors"
                onClick={closeMenu}
              >
                Disclaimer
              </a>
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyberpunk-neon transition-colors"
                onClick={closeMenu}
              >
                More AI Tools
              </a>
            </div>
          </>
        ) : (
          <nav className="flex items-center gap-8">
            <a
              href="#faq"
              className="text-white hover:text-cyberpunk-neon transition-colors text-sm"
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="text-white hover:text-cyberpunk-neon transition-colors text-sm"
            >
              Disclaimer
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyberpunk-neon transition-colors text-sm"
            >
              More AI Tools
            </a>
            <a
              href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-blue text-sm"
            >
              TRY MIXOLOGIST GPT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
