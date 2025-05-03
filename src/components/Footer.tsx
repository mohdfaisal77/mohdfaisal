import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Animated } from './ui/motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Animated variant="fadeInUp" delay={0.1} className="mb-6 md:mb-0">
            <motion.h2
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary">Mohd</span> Faisal
            </motion.h2>
            <p className="text-gray-400 mt-2">Mobile App Developer</p>
          </Animated>

          <Animated variant="fadeInUp" delay={0.2} className="flex space-x-6 mb-6 md:mb-0">
            {[
              { icon: <FiGithub className="h-6 w-6" />, href: "https://github.com/mohdfaisal77/" },
              { icon: <FiLinkedin className="h-6 w-6" />, href: "#" },
              { icon: <FiTwitter className="h-6 w-6" />, href: "#" },
              { icon: <FiInstagram className="h-6 w-6" />, href: "#" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </Animated>

          <Animated variant="fadeInUp" delay={0.3} className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Mohd Faisal. All rights reserved.
            </p>
            <motion.a
              href="mailto:mohdfaisal7839@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              mohdfaisal7839@gmail.com
            </motion.a>
          </Animated>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
