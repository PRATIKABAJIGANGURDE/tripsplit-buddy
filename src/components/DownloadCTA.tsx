import { Button } from "@/components/ui/button";
import { Download, CheckCircle2 } from "lucide-react";

const benefits = [
  "Instant expense tracking",
  "Automated payment reminders",
  "Secure data encryption",
  "Multi-platform support",
];

const DownloadCTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="stat-card rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{
                   backgroundImage: 'radial-gradient(circle, hsl(var(--finance-navy)) 1px, transparent 1px)',
                   backgroundSize: '30px 30px'
                 }}
            />
          </div>

          <div className="relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-finance-green/10 rounded-full">
              <span className="text-sm font-medium text-finance-green">Start Free Today</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ready to Streamline Your<br />Group Finances?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of travelers managing expenses professionally
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 finance-gradient hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 success-gradient hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <CheckCircle2 className="h-5 w-5 text-finance-green flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
