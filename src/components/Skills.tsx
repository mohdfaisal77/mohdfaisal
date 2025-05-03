import { Separator } from './ui/separator';
import { FaReact, FaSwift, FaAndroid, FaGithub, FaFigma } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiKotlin, SiJavascript, SiTypescript } from 'react-icons/si';
import { Animated } from './ui/motion';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React Native', icon: <FaReact className="h-10 w-10" />, level: 90 },
    { name: 'Flutter', icon: <SiFlutter className="h-10 w-10" />, level: 85 },
    { name: 'Swift', icon: <FaSwift className="h-10 w-10" />, level: 80 },
    { name: 'Kotlin', icon: <SiKotlin className="h-10 w-10" />, level: 80 },
    { name: 'Android', icon: <FaAndroid className="h-10 w-10" />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript className="h-10 w-10" />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="h-10 w-10" />, level: 85 },
    { name: 'Firebase', icon: <SiFirebase className="h-10 w-10" />, level: 85 },
    { name: 'Git', icon: <FaGithub className="h-10 w-10" />, level: 80 },
    { name: 'UI/UX (Figma)', icon: <FaFigma className="h-10 w-10" />, level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Skills</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the mobile development world.
            Here are my main areas of expertise:
          </p>
        </Animated>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Animated
              key={index}
              variant="fadeInUp"
              delay={0.1 + (index * 0.1)}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-gray-800 rounded-lg p-6 flex flex-col items-center transition-all hover:bg-gray-700"
              >
                <motion.div
                  className="text-primary mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-white font-medium text-lg mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-600 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-primary h-2.5 rounded-full"
                  />
                </div>
                <span className="text-gray-400 text-sm mt-2">{skill.level}%</span>
              </motion.div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
