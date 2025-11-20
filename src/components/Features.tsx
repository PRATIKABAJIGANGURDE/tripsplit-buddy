import { Receipt, PieChart, Bell, Lock, Zap, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Trip Setup",
    description: "Create trips in seconds with secure join codes. Enterprise-grade access management with admin controls.",
  },
  {
    icon: Receipt,
    title: "Smart Split Calculator",
    description: "Automated expense allocation with equal or custom splits. Real-time balance calculations and tracking.",
  },
  {
    icon: FileCheck,
    title: "Payment Verification",
    description: "Built-in approval workflow with payment status tracking. Maintain complete financial transparency.",
  },
  {
    icon: PieChart,
    title: "Analytics Dashboard",
    description: "Comprehensive expense reports and insights. Track spending patterns and settlement efficiency.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Smart notification system for pending payments and approvals. Never miss a settlement deadline.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "End-to-end encryption with secure data storage. Your financial information is always protected.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-finance-navy/10 rounded-full">
            <span className="text-sm font-medium text-finance-navy">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Expense Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise features built for seamless group financial coordination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="stat-card border-2 hover:border-finance-navy/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-lg finance-gradient flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
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

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 stat-card rounded-xl">
            <p className="text-4xl font-bold text-finance-navy mb-2">99.9%</p>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center p-6 stat-card rounded-xl">
            <p className="text-4xl font-bold text-finance-green mb-2">$2M+</p>
            <p className="text-sm text-muted-foreground">Settled</p>
          </div>
          <div className="text-center p-6 stat-card rounded-xl">
            <p className="text-4xl font-bold text-finance-blue mb-2">50K+</p>
            <p className="text-sm text-muted-foreground">Users</p>
          </div>
          <div className="text-center p-6 stat-card rounded-xl">
            <p className="text-4xl font-bold text-finance-navy mb-2">4.8★</p>
            <p className="text-sm text-muted-foreground">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
