import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
    {
        icon: Users,
        value: 50000,
        suffix: "+",
        label: "Active Users",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: DollarSign,
        value: 2000000,
        prefix: "₹",
        suffix: "M+",
        label: "Money Settled",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: TrendingUp,
        value: 98,
        suffix: "%",
        label: "Satisfaction Rate",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Clock,
        value: 2.3,
        label: "Avg. Settlement (Days)",
        color: "from-orange-500 to-red-500",
    },
];

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    const formatNumber = (num: number) => {
        if (end >= 1000000) {
            return (num / 1000000).toFixed(1);
        }
        return num.toLocaleString();
    };

    return (
        <span>
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-app-dark via-app-navy to-app-dark relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 left-0 w-96 h-96 bg-app-green rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 right-0 w-96 h-96 bg-app-teal rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Trusted by Thousands
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Join the growing community of travelers who've simplified their group expenses
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Value */}
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    <AnimatedCounter
                                        end={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                    />
                                </div>

                                {/* Label */}
                                <p className="text-white/70 font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
