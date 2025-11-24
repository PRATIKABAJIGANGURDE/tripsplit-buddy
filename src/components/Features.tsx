import { Receipt, PieChart, Bell, Lock, Zap, Users2, Calendar, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Smart Trip Planning",
    description: "Plan your trips day-wise and time-wise. Create detailed itineraries with scheduled tasks and activities.",
  },
  {
    icon: Smartphone,
    title: "UPI Integration",
    description: "Settle payments instantly through UPI apps. Direct integration with all major payment platforms.",
  },
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-app-light-bg to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-1/4 -right-48 w-96 h-96 bg-app-green/10 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-1/4 -left-48 w-96 h-96 bg-app-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md border border-border"
          >
            <Zap className="w-5 h-5 text-app-green" />
            <span className="text-sm font-semibold text-app-green">Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Professional expense management designed for group travels and shared expenses
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="premium-card p-8 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-app-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon with premium styling */}
                  <div className="premium-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-app-green transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-premium opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
