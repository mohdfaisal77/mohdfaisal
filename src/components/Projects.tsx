import { Separator } from './ui/separator';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Button } from './ui/button';
import { Animated } from './ui/motion';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiFlutter, SiReact } from 'react-icons/si';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: 'Flutter' | 'React.js' | 'E-commerce';
  platform: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: 'T. Dolly',
    description: 'A modern real estate platform designed to help users discover and explore property-related opportunities while connecting with the real estate ecosystem.',
    technologies: ['Flutter', 'Dart', 'REST API', 'Play Store'],
    category: 'Flutter',
    platform: 'Real Estate / Property Platform',
    image: 'from-sky-500 via-blue-600 to-indigo-600',
    liveLink: 'https://play.google.com/store/apps/details?id=com.lss.tdolly',
  },
  {
    title: 'Libwana.net',
    description: 'A production Flutter application built for the Libwana ecosystem, focused on providing users with a smooth and reliable mobile experience.',
    technologies: ['Flutter', 'Dart', 'REST API', 'Play Store'],
    category: 'Flutter',
    platform: 'Mobile Application',
    image: 'from-emerald-500 via-teal-600 to-cyan-700',
    liveLink: 'https://play.google.com/store/apps/details?id=net.libwana.sms',
  },
  {
    title: 'Libwana Marketplace',
    description: 'A Flutter-based marketplace application that provides users with a modern platform to discover products and interact with marketplace services.',
    technologies: ['Flutter', 'Dart', 'Marketplace', 'Play Store'],
    category: 'Flutter',
    platform: 'Marketplace / E-commerce',
    image: 'from-violet-500 via-fuchsia-600 to-rose-600',
    liveLink: 'https://play.google.com/store/apps/details?id=app.libwana.marketplace',
  },
  {
    title: 'Examerly',
    description: 'A Flutter-based education and examination platform designed to provide users with an accessible and engaging digital learning and examination experience.',
    technologies: ['Flutter', 'Dart', 'Education', 'Play Store'],
    category: 'Flutter',
    platform: 'Education / Examination Platform',
    image: 'from-amber-400 via-orange-500 to-red-600',
    liveLink: 'https://play.google.com/store/apps/details?id=com.app.examerly',
  },
  {
    title: 'Aap Ka App',
    description: 'A production-ready Flutter application designed to deliver a smooth and user-friendly mobile experience.',
    technologies: ['Flutter', 'Dart', 'REST API', 'Play Store'],
    category: 'Flutter',
    platform: 'Mobile Application',
    image: 'from-lime-500 via-green-600 to-emerald-700',
    liveLink: 'https://play.google.com/store/apps/details?id=org.aap.akapp',
  },
  {
    title: 'AV Management',
    description: 'A Flutter-based financial application providing users with access to loan-related services, CIBIL score information and credit card-related services.',
    technologies: ['Flutter', 'Dart', 'Finance', 'Play Store'],
    category: 'Flutter',
    platform: 'Finance / Loans / Credit Services',
    image: 'from-cyan-500 via-blue-600 to-slate-800',
    liveLink: 'https://play.google.com/store/apps/details?id=com.agent_portal',
  },
  {
    title: 'AV Management Web Platform',
    description: 'A modern React.js web platform focused on loans, CIBIL score services and credit card-related solutions, designed with a responsive and user-friendly interface.',
    technologies: ['React.js', 'Responsive UI', 'Finance', 'Live Website'],
    category: 'React.js',
    platform: 'Finance / Loans / Credit Cards / CIBIL',
    image: 'from-blue-500 via-indigo-600 to-purple-700',
    liveLink: 'https://avmanagementpvtltd.com/',
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'A full-featured e-commerce application featuring product browsing, cart management, user authentication, and payment integration.',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    category: 'E-commerce',
    platform: 'GitHub Source Project',
    image: 'from-slate-600 via-gray-700 to-zinc-900',
    githubLink: 'https://github.com/mohdfaisal77/',
  },
];

const githubUrl = 'https://github.com/mohdfaisal77';

const getProjectIcon = (project: Project) => {
  if (project.category === 'React.js') return <SiReact className="h-10 w-10" />;
  if (project.category === 'E-commerce') return <FiGithub className="h-10 w-10" />;
  return <SiFlutter className="h-10 w-10" />;
};

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Projects</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production Flutter applications, a React.js finance platform, and one source-available
            e-commerce project. Live apps show demos only; source code is kept private.
          </p>
        </Animated>

        <Animated variant="zoomIn" delay={0.08} className="mb-10 flex flex-wrap justify-center gap-3">
          {['All', 'Flutter', 'React.js', 'Automation & AI', 'E-commerce'].map((category) => (
            <motion.span
              key={category}
              whileHover={{ y: -3, scale: 1.05 }}
              className="rounded-full border border-white/10 bg-gray-900 px-4 py-2 text-sm text-gray-300"
            >
              {category}
            </motion.span>
          ))}
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Animated
              key={project.title}
              variant={index % 3 === 0 ? 'fadeInLeft' : index % 3 === 1 ? 'zoomIn' : 'fadeInRight'}
              delay={0.12 + index * 0.06}
              duration={0.65}
            >
              <motion.article
                whileHover={{ y: -9, scale: 1.015 }}
                className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-gray-900 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                  animate={prefersReducedMotion ? undefined : { x: ['-100%', '100%'] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
                />
                <motion.div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.image}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_34%)]" />
                  <motion.div
                    className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur"
                    animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.12 }}
                  >
                    {getProjectIcon(project)}
                  </motion.div>
                </motion.div>

                <div className="flex h-[calc(100%-12rem)] flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-blue-100">{project.category}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">{project.platform}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mb-4 flex-1 text-gray-300">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="rounded-full bg-gray-800 px-3 py-1 text-xs text-primary"
                        whileHover={{ scale: 1.08 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.liveLink && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild variant="outline" size="sm" className="gap-2 bg-white text-gray-950 hover:bg-blue-50 hover:text-gray-950">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <FiExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {!project.liveLink && project.githubLink && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FiGithub className="h-4 w-4" />
                            <span>Source Code</span>
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.article>
            </Animated>
          ))}
        </div>

        <Animated variant="fadeInUp" delay={0.2} className="mt-14">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.01 }}
            className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-lg border border-primary/30 bg-gradient-to-r from-gray-900 via-gray-900 to-blue-950/70 p-6 text-white shadow-lg shadow-primary/10 transition-all hover:border-primary/60"
          >
            <span className="flex items-center gap-4">
              <span className="rounded-lg bg-white p-3 text-gray-950">
                <FaGithub className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-lg font-semibold">See Other Projects on GitHub</span>
                <span className="text-sm text-gray-400">Explore more repositories and experiments.</span>
              </span>
            </span>
            <FiExternalLink className="h-5 w-5 text-primary" />
          </motion.a>
        </Animated>
      </div>
    </section>
  );
};

export default Projects;
