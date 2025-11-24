import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-border/50 shadow-lg rounded-2xl relative">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="SplitSync" className="w-10 h-10 rounded-none" />
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
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <DownloadCTA />

      {/* Clean Professional Footer */}
      <footer id="contact" className="py-12 px-4 bg-app-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="SplitSync" className="w-10 h-10 rounded-none" />
                <span className="text-2xl font-bold">SplitSync</span>
              </div>
              <p className="text-white/70 text-sm">
                Modern group expense management with UPI integration.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
                <li><a href="#download" className="text-white/70 hover:text-white transition-colors">Download</a></li>
                <li><Link to="/security" className="text-white/70 hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} SplitSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
