import { Button } from "@/components/ui/button";
import { Download, Shield, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-finance-navy/10 rounded-full">
              <span className="text-sm font-medium text-finance-navy">Financial Management Made Simple</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Stop Chasing Friends for Money After Trips
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Professional expense tracking and settlement platform for group travels. 
              Automated reminders, instant approvals, and transparent accounting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 finance-gradient hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                View Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-5 w-5 text-finance-green" />
                  <span className="text-2xl font-bold text-foreground">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Secure</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-5 w-5 text-finance-blue" />
                  <span className="text-2xl font-bold text-foreground">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-5 w-5 text-finance-green" />
                  <span className="text-2xl font-bold text-foreground">$2M+</span>
                </div>
                <p className="text-sm text-muted-foreground">Settled</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <div className="stat-card rounded-2xl p-8 bg-gradient-to-br from-finance-navy/5 to-finance-blue/5">
              <div className="aspect-[3/4] bg-background rounded-xl border-2 border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full finance-gradient flex items-center justify-center">
                    <Download className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-muted-foreground font-medium">App Preview</p>
                </div>
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 stat-card rounded-xl p-4 bg-background">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg success-gradient flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. Settlement</p>
                  <p className="text-lg font-bold text-foreground">2.3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
