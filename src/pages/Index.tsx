import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import { Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-border/50 shadow-lg rounded-2xl relative">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="SplitSync" className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">SplitSync</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-app-green transition-colors font-medium">Features</a>
              <a href="#download" className="text-muted-foreground hover:text-app-green transition-colors font-medium">Download</a>
              <a href="#contact" className="text-muted-foreground hover:text-app-green transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-xl border border-border/50 shadow-lg rounded-2xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
              <a
                href="#features"
                className="text-muted-foreground hover:text-app-green transition-colors font-medium p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#download"
                className="text-muted-foreground hover:text-app-green transition-colors font-medium p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-app-green transition-colors font-medium p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </div>

      <Hero />
      <Features />
      <DownloadCTA />

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-border bg-app-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="SplitSync" className="w-10 h-10" />
                <span className="text-2xl font-bold text-foreground">SplitSync</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Track trip expenses with friends. Simple, secure, and efficient expense management.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@splitsync.com</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-app-green transition-colors">Features</a></li>
                <li><a href="#download" className="hover:text-app-green transition-colors">Download</a></li>
                <li><Link to="/security" className="hover:text-app-green transition-colors">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-app-green transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-app-green transition-colors">Terms of Service</Link></li>
                <li><Link to="/contact" className="hover:text-app-green transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 SplitSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
