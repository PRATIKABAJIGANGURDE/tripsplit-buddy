import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="SplitSync Logo" className="w-20 h-20" />
              <h2 className="text-4xl font-bold text-foreground">SplitSync</h2>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Didn't Receive Your Money After Trip?
            </h1>
            
            <p className="text-2xl md:text-3xl font-medium" style={{ color: "hsl(var(--app-green))" }}>
              Here's Your Solution
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Track trip expenses with friends and get paid back instantly. 
              Simple expense splitting, payment tracking, and automated reminders.
            </p>

            <Button 
              size="lg" 
              className="text-lg px-12 py-7 app-gradient hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download className="mr-2 h-6 w-6" />
              Download App Now
            </Button>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold" style={{ color: "hsl(var(--app-green))" }}>50K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "hsl(var(--app-green))" }}>2.3 Days</p>
                <p className="text-sm text-muted-foreground">Avg Settlement</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "hsl(var(--app-green))" }}>₹2M+</p>
                <p className="text-sm text-muted-foreground">Settled</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone mockup frame */}
              <div className="w-[320px] h-[640px] bg-app-navy rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800">
                <div className="w-full h-full bg-app-light-bg rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Mock app header */}
                  <div className="bg-app-navy text-white p-6">
                    <h3 className="text-2xl font-bold">Mount Everest</h3>
                    <p className="text-sm text-gray-300 mt-1">Code: 4956900415</p>
                  </div>
                  
                  {/* Mock tabs */}
                  <div className="flex border-b bg-white">
                    <div className="flex-1 py-3 text-center font-medium" style={{ color: "hsl(var(--app-green))", borderBottom: "3px solid hsl(var(--app-green))" }}>
                      Splits
                    </div>
                    <div className="flex-1 py-3 text-center text-muted-foreground">
                      Members
                    </div>
                    <div className="flex-1 py-3 text-center text-muted-foreground">
                      Summary
                    </div>
                  </div>

                  {/* Mock content */}
                  <div className="flex-1 bg-app-light-bg p-4">
                    <div className="clean-card p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">Lunch at Top</p>
                          <p className="text-sm text-muted-foreground">Created by You</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₹69</p>
                          <p className="text-sm text-red-500">Not Paid</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mock button */}
                  <div className="p-4 bg-white">
                    <div className="app-gradient text-white py-4 rounded-xl text-center font-semibold">
                      + Create Split
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating indicator */}
              <div className="absolute -bottom-6 -left-6 clean-card p-4 animate-fade-in">
                <p className="text-xs text-muted-foreground">Real-time Updates</p>
                <p className="font-bold" style={{ color: "hsl(var(--app-green))" }}>Instant Sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
