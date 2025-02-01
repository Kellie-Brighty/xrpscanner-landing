import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const Demo = () => {
  return (
    <section id="demo" className="w-full py-20">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            See It In Action
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Analyze any XRP token in seconds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                1. Paste Token Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simply paste any XRP token address to start the analysis
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                2. Get Instant Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive comprehensive token metrics and security insights
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                3. Make Informed Decisions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use the detailed data to evaluate tokens effectively
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/src/assets/demo-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
