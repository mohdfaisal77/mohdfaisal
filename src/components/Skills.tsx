import { Separator } from './ui/separator';
import { FaAws, FaDocker, FaGithub, FaJava, FaLinux, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiClaude, SiDart, SiFlutter, SiJavascript, SiMysql, SiPostman, SiTerraform } from 'react-icons/si';
import { Animated } from './ui/motion';
import { BiLogoMongodb } from 'react-icons/bi';
import { motion, useReducedMotion } from 'framer-motion';
import { IoLogoFirebase } from 'react-icons/io5';
import { FiCpu, FiServer, FiTool, FiZap } from 'react-icons/fi';

const skillGroups = [
  {
    title: 'Core Development',
    icon: <SiFlutter className="h-6 w-6" />,
    description: 'Primary app and web engineering stack.',
    skills: [
      { name: 'Flutter', icon: <SiFlutter />, priority: true },
      { name: 'React.js', icon: <FaReact />, priority: true },
      { name: 'Dart', icon: <SiDart />, priority: true },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Java', icon: <FaJava /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FiServer className="h-6 w-6" />,
    description: 'Deployment, hosting and production operations.',
    skills: [
      { name: 'AWS', icon: <FaAws />, priority: true },
      { name: 'Docker', icon: <FaDocker />, priority: true },
      { name: 'Linux', icon: <FaLinux />, priority: true },
      { name: 'Terraform', icon: <SiTerraform />, priority: true },
      { name: 'VPS Hosting', icon: <FiServer /> },
      { name: 'Firebase', icon: <IoLogoFirebase /> },
    ],
  },
  {
    title: 'Automation & AI',
    icon: <FiZap className="h-6 w-6" />,
    description: 'Workflow automation and AI-powered assistants.',
    skills: [
      { name: 'n8n Automation', icon: <FiZap />, priority: true },
      { name: 'Agentic AI', icon: <FiCpu />, priority: true },
      { name: 'AI Tools', icon: <FiCpu /> },
      { name: 'Codex', icon: <FiTool /> },
      { name: 'Claude AI', icon: <SiClaude /> },
      { name: 'DeepSeek', icon: <FiCpu /> },
    ],
  },
  {
    title: 'Tools & Marketing',
    icon: <FiTool className="h-6 w-6" />,
    description: 'Supporting tools for APIs, data and growth.',
    skills: [
      { name: 'Postman', icon: <SiPostman /> },
      { name: "Google's Stitch", icon: <FiTool /> },
      { name: 'Meta Ads', icon: <FiZap /> },
      { name: 'Express.js', icon: <SiJavascript /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <BiLogoMongodb /> },
      { name: 'Git/Github', icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Skills</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Flutter is my core technology, supported by strong hands-on work across React.js,
            cloud deployment, DevOps, automation and AI-powered tools.
          </p>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <Animated
              key={group.title}
              variant={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
              delay={0.1 + index * 0.08}
              duration={0.65}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 55px -20px rgba(59, 130, 246, 0.55)' }}
                className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-gray-800/80 p-6 transition-all hover:border-primary/40 hover:bg-gray-800"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl"
                  animate={prefersReducedMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
                />
                <div className="flex items-start gap-4">
                  <motion.div
                    className="rounded-lg bg-primary/15 p-3 text-primary"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                  >
                    {group.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{group.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.04 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors ${
                        skill.priority
                          ? 'border-primary/40 bg-primary/15 text-blue-100'
                          : 'border-white/10 bg-gray-900/80 text-gray-300'
                      }`}
                    >
                      <span className="text-primary">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
