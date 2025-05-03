import { Button } from './ui/button';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Animated } from './ui/motion';
import { motion } from 'framer-motion';
import cvFile from '../assets/Faisal_LatestResume.pdf';
import myprofile from "../assets/faisal.jpeg"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <Animated variant="fadeInUp" delay={0.2}>
              <h2 className="text-primary text-xl md:text-2xl font-medium">Hello, I'm</h2>
            </Animated>

            <Animated variant="fadeInUp" delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold">Mohd Faisal</h1>
            </Animated>

            <Animated variant="fadeInUp" delay={0.6}>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">Mobile App Developer</h3>
            </Animated>

            <Animated variant="fadeInUp" delay={0.8}>
              <p className="text-gray-400 max-w-lg">
                I specialize in creating beautiful, functional, and user-friendly mobile applications
                that deliver exceptional user experiences across iOS and Android platforms.
              </p>
            </Animated>

            <Animated variant="fadeInUp" delay={1}>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="gap-2">
                    <span>View Projects</span>
                    <FiArrowRight />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href={cvFile} download="Mohd_Faisal_Resume.pdf">
                    <Button variant="outline" className="gap-2">
                      <span>Download CV</span>
                      <FiDownload />
                    </Button>
                  </a>
                </motion.div>
              </div>
            </Animated>
          </div>

          <Animated variant="fadeIn" delay={0.5} className="flex-1 flex justify-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut"
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-primary/40 overflow-hidden"
              >
                {/* You can add your profile image here */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={myprofile}
                    alt="Mohd Faisal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default Hero;
