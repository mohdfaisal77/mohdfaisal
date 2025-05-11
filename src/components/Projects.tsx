import { Separator } from './ui/separator';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Button } from './ui/button';
import { Animated } from './ui/motion';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A full-featured e-commerce application built with React Native and Firebase, featuring product browsing, cart management, user authentication, and payment integration.',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      image: 'bg-gradient-to-r from-blue-500 to-purple-500',
      liveLink: '#',
      githubLink: 'https://github.com/mohdfaisal77/',
    },
    {
      title: 'The Seed Inc',
      description: 'An for car modifying developed with Flutter, allowing users to create profiles, share posts, connect with friends, and engage through comments and likes.',
      technologies: ['Flutter', 'Firebase', 'Bloc', 'Cloud Functions'],
      image: 'bg-gradient-to-r from-green-500 to-teal-500',
      liveLink: '#',
      githubLink: 'https://play.google.com/store/apps/details?id=com.elintminds.seed ',
    },
    {
      title: 'The Zehra Trust',
      description: 'An app for islamic funds , charity, The Zahra Trust App simplifies your donation process to make making a difference as easy as possible.',
      technologies: ['Flutter', 'Firebase', 'Stripe' , 'Bloc'],
      image: 'bg-gradient-to-r from-red-500 to-orange-500',
      liveLink: '#',
      githubLink: 'https://play.google.com/store/apps/details?id=com.elintminds.zahra ',
    },
    {
      title: 'Veto - The polling app',
      description: 'A productivity app developed with Flutter for Android, where you can see questions with polling ,and have comments/likes/share features for pollig questions and also have notification service',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MVVM' , 'Bloc' , 'AWS ( S3 )'],
      image: 'bg-gradient-to-r from-yellow-500 to-amber-500',
      liveLink: '#',
      githubLink: 'https://play.google.com/store/apps/details?id=com.veto.veto ',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Projects</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my skills and experience in mobile app development.
          </p>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Animated
              key={index}
              variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={0.2 + (index * 0.1)}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <motion.div
                  className={`h-48 ${project.image} flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </motion.div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-gray-800 text-primary text-xs px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--primary), 0.2)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="gap-2">
                        <FiExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FiGithub className="h-4 w-4" />
                          <span>Source Code</span>
                        </Button>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
