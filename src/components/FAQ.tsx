import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How do I create a trip?",
        answer: "Simply download the app, sign up, and tap 'Create Trip'. You'll get a unique 10-digit code to share with your group members. They can join instantly using this code.",
    },
    {
        question: "Is my financial data secure?",
        answer: "Absolutely! We use bank-level encryption to protect your data. Your payment information is never stored on our servers, and all transactions are processed securely through UPI.",
    },
    {
        question: "Can I split expenses unequally?",
        answer: "Yes! While we offer equal split by default, you can customize the amount for each person. Perfect for situations where some members consumed more or paid for specific items.",
    },
    {
        question: "How does UPI integration work?",
        answer: "When it's time to settle up, tap the payment button and you'll be redirected to your preferred UPI app (GPay, PhonePe, Paytm, etc.). Complete the payment there, and mark it as paid in SplitSync.",
    },
    {
        question: "Can I use this for non-trip expenses?",
        answer: "Definitely! While designed for trips, SplitSync works great for any group expense - roommate bills, office lunches, event planning, or any shared costs.",
    },
    {
        question: "What if someone doesn't have the app?",
        answer: "Trip admins can add members manually and track their expenses. However, for the best experience (real-time updates, payment tracking, notifications), we recommend everyone downloads the app.",
    },
    {
        question: "Is there a limit on group size?",
        answer: "No limits! Whether you're splitting with 3 friends or organizing a 50-person event, SplitSync handles groups of any size effortlessly.",
    },
    {
        question: "Can I plan my trip itinerary in the app?",
        answer: "Yes! Our new trip planning feature lets you create day-wise and time-wise schedules. Add tasks, activities, and timings to keep everyone on the same page.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 bg-app-light-bg relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 rounded-full blur-3xl gradient-premium" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md"
                    >
                        <HelpCircle className="w-5 h-5 text-app-green" />
                        <span className="text-sm font-semibold text-app-green">Got Questions?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        Everything you need to know about SplitSync
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-app-light-bg/50 transition-colors duration-200"
                            >
                                <span className="font-semibold text-foreground pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 text-app-green" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center p-10 bg-white rounded-2xl shadow-md border border-border"
                >
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                        We're here to help! Reach out to our support team.
                    </p>
                    <a
                        href="mailto:support@splitsync.com"
                        className="inline-flex items-center gap-2 px-10 py-5 app-gradient text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-app-green/50 hover:scale-105 transition-all duration-300"
                    >
                        Contact Support
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
