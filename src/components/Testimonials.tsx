import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Travel Enthusiast",
        image: "👨‍💼",
        rating: 5,
        text: "SplitSync made our Goa trip so much easier! No more awkward money conversations. The UPI integration is a game-changer.",
    },
    {
        name: "Priya Patel",
        role: "Group Organizer",
        image: "👩‍💼",
        rating: 5,
        text: "Finally, an app that actually works! The day-wise planning feature helped us organize our entire Ladakh expedition perfectly.",
    },
    {
        name: "Arjun Mehta",
        role: "Frequent Traveler",
        image: "🧑‍💻",
        rating: 5,
        text: "The payment tracking is incredible. Everyone knows exactly what they owe, and settling up takes seconds with UPI.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Testimonials = () => {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-app-light-bg relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-app-green/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-app-teal/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-app-green/10 rounded-full mb-6"
                    >
                        <Star className="w-5 h-5 text-app-green fill-app-green" />
                        <span className="text-sm font-semibold text-app-green">Loved by Travelers</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        What Our Users Say
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Join thousands of happy travelers who've simplified their group expenses
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="premium-card p-8 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="w-16 h-16 text-app-green" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center text-2xl">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
