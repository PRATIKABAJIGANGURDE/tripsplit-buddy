import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <DownloadCTA />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2 text-foreground">SplitSync</h3>
          <p className="text-muted-foreground mb-6">
            Making group trip expenses stress-free
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SplitSync. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
