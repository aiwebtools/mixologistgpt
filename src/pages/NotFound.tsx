
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyberpunk-dark flex items-center justify-center p-4">
      <div className="glass-card rounded-xl p-8 max-w-md w-full text-center relative overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon via-cyberpunk-pink to-cyberpunk-purple animate-gradient-shift opacity-20"></div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-cyberpunk-pink/10 border border-cyberpunk-pink/30">
            <AlertTriangle className="w-8 h-8 text-cyberpunk-pink" />
          </div>
          
          <h1 className="text-5xl font-bold mb-2 neon-text-pink">404</h1>
          <p className="text-xl text-gray-300 mb-8">Oops! This page doesn't exist</p>
          
          <Link to="/" className="neon-button-blue inline-flex items-center gap-2">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Back to Home
              <Home className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
