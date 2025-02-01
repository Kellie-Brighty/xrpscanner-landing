import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';
import { ChartBarIcon, ShieldCheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: ChartBarIcon,
    title: 'Detailed Analytics',
    description: 'Get comprehensive token metrics including price, volume, liquidity, and holder distribution.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Insights',
    description: 'Analyze contract settings, ownership patterns, and potential security risks.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Real-time Data',
    description: 'Access live market data and trading information from multiple DEXes.'
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full py-20 bg-gray-50 dark:bg-dark-100/20">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Everything you need to analyze XRP tokens in one place
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn('up', 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 