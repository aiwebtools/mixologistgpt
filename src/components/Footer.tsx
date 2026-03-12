
import { Phone, Mail, ExternalLink, Martini, ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyberpunk-darker relative pt-16 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background effects */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-neon via-cyberpunk-pink to-cyberpunk-purple"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Logo and about */}
          <div className="md:col-span-4">
            <a href="/" className="flex items-center gap-2 no-underline mb-6 group" aria-label="AI WEB TOOLS - AIWEBTOOLS.AI Home">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyberpunk-neon to-cyberpunk-blue opacity-80 blur-[2px] group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-cyberpunk-darker rounded-full p-2">
                  <Martini className="w-5 h-5 text-cyberpunk-neon group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold neon-text-blue m-0 leading-tight">
                  iMixologist GPT
                </h2>
                <p className="text-[10px] opacity-80 text-gray-300 leading-tight">
                  Powered by AI WEB TOOLS - AIWEBTOOLS.AI
                </p>
              </div>
            </a>
            
            <p className="text-gray-400 mb-6">
              Your personal virtual bartender by AI WEB TOOLS LLC (AIWEBTOOLS.AI), crafting personalized cocktail recipes with a touch of humor and expertise. Where every sip tells a story through advanced AI technology.
            </p>
            
            <div className="space-y-3">
              <a
                href="tel:+14758008096"
                className="flex items-center gap-2 text-gray-300 hover:text-cyberpunk-neon transition-colors"
                aria-label="Call AI WEB TOOLS Support"
              >
                <Phone className="w-4 h-4" />
                <span>(475) 800-8096</span>
              </a>
              
              <a
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center gap-2 text-gray-300 hover:text-cyberpunk-neon transition-colors"
                aria-label="Email AI WEB TOOLS Support"
              >
                <Mail className="w-4 h-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">AI Tools & Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://chatgpt.com/g/g-eFVru5HD4-mixologist-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyberpunk-neon transition-colors flex items-center gap-1"
                  aria-label="Try Kenny Mixologist GPT - AI Virtual Bartender"
                >
                  TRY MIXOLOGIST GPT
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://chefgpt.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyberpunk-green transition-colors flex items-center gap-1"
                  aria-label="Try Chef Sizzle GPT - AI Cooking Assistant by AI WEB TOOLS"
                >
                  TRY CHEF SIZZLE GPT
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-cyberpunk-neon transition-colors"
                  aria-label="Frequently Asked Questions about AI WEB TOOLS"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  className="text-gray-300 hover:text-cyberpunk-neon transition-colors"
                  aria-label="AI WEB TOOLS Disclaimer"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyberpunk-neon transition-colors flex items-center gap-1"
                  aria-label="Explore More AI Tools at AIWEBTOOLS.AI"
                >
                  More AI Tools
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Legal & Privacy</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyberpunk-neon transition-colors flex items-center gap-1"
                  aria-label="AI WEB TOOLS Privacy Policy"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyberpunk-neon transition-colors flex items-center gap-1"
                  aria-label="AI WEB TOOLS Terms of Service"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* More AI Tools button */}
          <div className="md:col-span-2">
            <div className="flex justify-start md:justify-end">
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-cyberpunk-neon/20 to-cyberpunk-blue/20 backdrop-blur-sm px-5 py-3 rounded-full border border-cyberpunk-neon/30 text-white hover:bg-gradient-to-br hover:from-cyberpunk-neon/30 hover:to-cyberpunk-blue/30 transition-all hover:border-cyberpunk-neon/50"
                aria-label="Visit AIWEBTOOLS.AI for More AI Tools"
              >
                <span>More AI Tools</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyberpunk-neon transition-colors"
            aria-label="AI WEB TOOLS LLC - AIWEBTOOLS.AI Official Website"
          >
            © 2025 AI WEB TOOLS LLC - AIWEBTOOLS.AI. All rights reserved. Leading provider of advanced AI tools and virtual assistants.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
