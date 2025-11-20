import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";

const benefits = [
  "10-digit join codes for easy access",
  "Equal & custom split options",
  "Payment approval workflow",
  "Real-time expense tracking",
  "Automated payment reminders",
  "Secure data encryption",
];

const DownloadCTA = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="clean-card p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stop Chasing Friends for Money
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands using SplitSync to manage group expenses professionally
          </p>

          <Button 
            size="lg" 
            className="text-xl px-16 py-8 app-gradient hover:opacity-90 transition-opacity shadow-xl mb-12"
          >
            <Download className="mr-3 h-7 w-7" />
            Download SplitSync
          </Button>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: "hsl(var(--app-green))" }} />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
