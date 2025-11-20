import { Receipt, PieChart, Bell, Lock, Zap, Users2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Trip Setup",
    description: "Create trips in seconds with unique 10-digit join codes. Start tracking expenses immediately.",
  },
  {
    icon: Receipt,
    title: "Smart Expense Splitting",
    description: "Split bills equally or set custom amounts. Automated calculations for fair distribution.",
  },
  {
    icon: Bell,
    title: "Payment Reminders",
    description: "Automated notifications for pending payments. Never chase friends for money again.",
  },
  {
    icon: PieChart,
    title: "Payment Tracking",
    description: "Real-time payment status updates. Track who paid, who's pending, and who owes.",
  },
  {
    icon: Users2,
    title: "Group Management",
    description: "Easy member management with admin controls. Add or remove members anytime.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your financial data is encrypted and protected. Bank-level security standards.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-app-light-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional expense management designed for group travels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="clean-card p-8 hover:scale-105 transition-transform"
              >
                <div className="feature-icon mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
