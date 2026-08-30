import { Button } from './ui/button';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Animated } from './ui/motion';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import cvFile from '../assets/Faisal_LatestResume.pdf';
import myprofile from "../assets/faisal.jpeg"

const titles = ['Software Engineer', 'Mobile App Developer', 'Flutter Developer'];
const githubUrl = 'https://github.com/mohdfaisal77';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % titles.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_32%),linear-gradient(to_bottom,#000,#111827)] text-white pt-16 overflow-hidden">
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
              <div className="min-h-20 sm:min-h-14" aria-live="polite">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
                  <span className="sr-only">{titles.join(', ')}</span>
                  <span aria-hidden="true" className="inline-flex w-full max-w-[24rem] overflow-hidden align-bottom">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={titles[titleIndex]}
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -18 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' }}
                        className="bg-gradient-to-r from-primary via-cyan-300 to-blue-200 bg-clip-text text-transparent"
                      >
                        {titles[titleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h3>
              </div>
            </Animated>

            <Animated variant="fadeInUp" delay={0.8}>
              <p className="text-gray-400 max-w-lg">
                Software Engineer with 4+ years of experience specializing in Flutter mobile apps,
                React.js web platforms, cloud deployment, automation, and AI-powered solutions.
              </p>
              <p className="text-primary/90 font-medium mt-3">
                Flutter • React.js • AWS • Docker • n8n Automation
              </p>
            </Animated>

            <Animated variant="fadeInUp" delay={1}>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="gap-2">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <span>View Projects</span>
                      <FiArrowRight />
                    </a>
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
              animate={prefersReducedMotion ? undefined : { y: [0, -15, 0] }}
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
