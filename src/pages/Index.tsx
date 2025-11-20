import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import { Shield, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg finance-gradient flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">SplitSync</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Download</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <DownloadCTA />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg finance-gradient flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">SplitSync</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Professional expense management platform for group travels. 
                Secure, transparent, and efficient financial coordination.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@splitsync.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 SplitSync. All rights reserved. Built for professional expense management.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
