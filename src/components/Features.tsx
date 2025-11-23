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
    <section id="features" className="py-24 px-4 bg-app-light-bg relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute top-1/2 right-0 w-[800px] h-[800px] bg-gray-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Professional expense management designed for group travels
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="clean-card p-10 hover:shadow-xl cursor-pointer group bg-white/80 backdrop-blur-sm border-white/20"
              >
                <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
