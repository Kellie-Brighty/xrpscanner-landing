import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";
import { useTheme } from "../context/ThemeContext";
import xrpLogo from "../assets/xrp-logo.png";
import xrpLogoDark from "../assets/xrp-logo-dark.png";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="w-full bg-gray-50 dark:bg-dark-100/20">
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={isDark ? xrpLogoDark : xrpLogo}
                alt="XRP Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                XRP Scanner Bot
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Your trusted companion for XRP token analysis
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/your_bot_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  Launch Bot
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} XRP Scanner Bot. All rights reserved.
            By NorthernLabs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
