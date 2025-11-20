import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* App Logo/Name */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            SplitSync
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Never Chase Your Friends
            <br />
            <span className="text-primary">For Money After Trips Again</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Track, split, and settle group expenses in real-time. 
            Say goodbye to awkward payment reminders and hello to stress-free trips.
          </p>
        </div>

        {/* Download Button */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 gradient-primary"
          >
            <Download className="mr-3 h-6 w-6" />
            Download SplitSync
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Available for iOS and Android
          </p>
        </div>

        {/* App Preview Image Placeholder */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground text-lg">App Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
