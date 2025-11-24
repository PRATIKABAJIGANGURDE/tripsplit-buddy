import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "10-digit join codes for easy access",
  "Equal & custom split options",
  "Payment approval workflow",
  "Real-time expense tracking",
  "Automated payment reminders",
  "Secure data encryption",
];

const DownloadCTA = () => {
  return (
    <section id="download" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clean-card p-6 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-app-green/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Stop Chasing Friends for Money
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Join thousands using SplitSync to manage group expenses professionally
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="https://github.com/PRATIKABAJIGANGURDE/tripsplit-buddy/releases/download/splitsync/Splitsync.apk" download>
                <Button
                  size="lg"
                  className="text-lg md:text-xl px-8 md:px-16 py-6 md:py-8 app-gradient hover:opacity-90 transition-all shadow-xl mb-12 hover:scale-105 active:scale-95"
                >
                  <Download className="mr-3 h-7 w-7" />
                  Download SplitSync
                </Button>
              </a>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="flex items-center gap-3 text-left"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0" style={{ color: "hsl(var(--app-green))" }} />
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
