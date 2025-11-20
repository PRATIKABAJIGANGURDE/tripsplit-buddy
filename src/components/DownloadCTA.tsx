import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-3xl">
          <div className="mb-8">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
              <Smartphone className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ready to Simplify Your Group Trips?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've eliminated the stress of tracking group expenses
            </p>
          </div>

          <Button 
            size="lg" 
            className="text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 gradient-primary"
          >
            <Download className="mr-3 h-6 w-6" />
            Download SplitSync Now
          </Button>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Free to Download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>No Ads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
