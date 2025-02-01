import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";
import demoImg from "../assets/demo-img.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-100/20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-radial from-purple-500/20 to-transparent opacity-50 blur-3xl" />
        <div className="absolute -inset-[10px] bg-gradient-radial from-blue-500/20 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              XRP Token Scanner
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Instantly analyze any XRP token with detailed metrics, market data,
            and security insights
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/xrpscanner_bot"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Scanning →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo"
              className="px-8 py-4 bg-gray-100 dark:bg-dark-100 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors text-lg"
            >
              Watch Demo
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="mt-16 relative"
        >
          <div className="relative max-w-sm mx-auto">
            {/* Phone frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-[3rem] blur-xl transform -rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-[3rem] blur-xl transform rotate-6" />
            <div className="relative bg-white/90 dark:bg-dark-200/90 rounded-[2.5rem] p-4 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-xl">
              <div className="aspect-[9/19] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-dark-100">
                <img
                  src={demoImg}
                  alt="Bot Demo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
