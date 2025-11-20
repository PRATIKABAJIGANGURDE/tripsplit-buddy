import { Users, DollarSign, Bell, Lock, Zap, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Trip Creation",
    description: "Create trips in seconds with unique join codes. No complex setup, just invite and start tracking.",
  },
  {
    icon: DollarSign,
    title: "Smart Expense Splitting",
    description: "Split bills equally or customize amounts per person. Our smart calculator does the math for you.",
  },
  {
    icon: Check,
    title: "Payment Tracking",
    description: "Mark payments as complete and get instant approvals. Never lose track of who paid what.",
  },
  {
    icon: Users,
    title: "Easy Collaboration",
    description: "Share simple 10-digit codes with friends. Everyone stays on the same page in real-time.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get notified for new expenses, payment requests, and approvals. Stay updated automatically.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your financial data is protected with enterprise-grade security. Your trips, your privacy.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need for Group Trips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make splitting expenses effortless and fair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
