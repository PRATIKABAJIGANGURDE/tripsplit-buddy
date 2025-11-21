import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import screenshot from "@/assets/app-screenshot.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-10 pt-32 bg-white overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-app-green/20 to-emerald-500/20 rounded-full blur-3xl mix-blend-multiply"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, 100, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl mix-blend-multiply"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 70, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] bg-gradient-to-t from-purple-400/20 to-pink-400/20 rounded-full blur-3xl mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                Didn't Receive Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-green to-emerald-600">
                  Money After Trip?
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl font-medium text-foreground/80"
            >
              Here&apos;s Your Solution
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Track trip expenses with friends and get paid back instantly. Simple expense splitting,
              payment tracking, and automated reminders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <a href="/splitsync.apk" download>
                <Button
                  size="lg"
                  className="text-base px-8 py-6 app-gradient hover:opacity-90 transition-all shadow-lg hover:shadow-app-green/25 hover:scale-105 active:scale-95"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App Now
                </Button>
              </a>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50"
            >
              {[
                { label: "Active Users", value: "50K+" },
                { label: "Avg Settlement", value: "2.3 Days" },
                { label: "Settled", value: "₹2M+" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone mockup frame */}
              <div className="w-[250px] h-[500px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-[10px] border-gray-800 relative z-10">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src={screenshot}
                    alt="SplitSync App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-app-green/20 blur-3xl -z-10 transform scale-110" />

              {/* Floating indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-12 clean-card p-4 shadow-xl z-20 border-l-4 border-app-green"
              >
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Real-time Updates</p>
                <p className="font-bold text-lg text-foreground">
                  Instant Sync
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
