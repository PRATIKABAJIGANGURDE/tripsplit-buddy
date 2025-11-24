import { motion } from "framer-motion";
import { Users2, Split, CheckCircle2, Smartphone } from "lucide-react";

const steps = [
    {
        icon: Users2,
        title: "Create Your Trip",
        description: "Set up a new trip in seconds. Get a unique 10-digit code to share with your group.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Split,
        title: "Add Expenses",
        description: "Log expenses as they happen. Split equally or customize amounts for each member.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: CheckCircle2,
        title: "Track Payments",
        description: "See who paid, who's pending, and who owes. Real-time updates for everyone.",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Smartphone,
        title: "Settle with UPI",
        description: "Pay instantly through any UPI app. No more IOUs or forgotten debts.",
        color: "from-green-500 to-emerald-500",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 app-gradient text-white rounded-full mb-6 shadow-lg"
                    >
                        <span className="text-sm font-semibold">Simple & Powerful</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        How It Works
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Four simple steps to stress-free group expense management
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="premium-card p-8 h-full group">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <p className="text-lg text-muted-foreground mb-6">
                        Ready to simplify your group expenses?
                    </p>
                    <a
                        href="#download"
                        className="inline-flex items-center gap-2 px-10 py-5 app-gradient text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-app-green/50 hover:scale-105 transition-all duration-300"
                    >
                        Get Started Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
