import { Separator } from './ui/separator';
import { Animated } from './ui/motion';
import { motion, useReducedMotion } from 'framer-motion';
import { FiCpu, FiMessageCircle, FiRepeat, FiSend, FiZap } from 'react-icons/fi';

const automationProjects = [
  {
    title: 'T. Dolly WhatsApp Bot',
    description: 'An automated WhatsApp assistant for T. Dolly that communicates with customers, explains the platform, shares relevant information, helps users understand how to use the platform, and gathers customer information and leads.',
    technologies: ['n8n', 'WhatsApp automation', 'AI', 'APIs', 'Webhooks'],
    icon: <FiMessageCircle className="h-7 w-7" />,
  },
  {
    title: 'Libwana Bot Reply',
    description: 'An automated customer-support and lead-gathering bot for Libwana that communicates with customers, explains the platform and its functionality, provides guidance and gathers customer information.',
    technologies: ['n8n', 'WhatsApp automation', 'AI', 'APIs', 'Webhooks'],
    icon: <FiMessageCircle className="h-7 w-7" />,
  },
  {
    title: 'Examerly Bot Reply',
    description: 'An automated assistant for Examerly that interacts with customers, explains the platform, provides information about how to use the service and gathers useful customer information.',
    technologies: ['n8n', 'WhatsApp automation', 'AI', 'APIs', 'Webhooks'],
    icon: <FiCpu className="h-7 w-7" />,
  },
  {
    title: 'Telegram Bot',
    description: 'An automated Telegram bot designed for automated communication, user interaction and workflow execution.',
    technologies: ['n8n', 'Telegram Bot API', 'APIs', 'Webhooks', 'Automation'],
    icon: <FiSend className="h-7 w-7" />,
  },
  {
    title: 'Website Bot',
    description: 'An automated website assistant and workflow that interacts with users and handles customer details and orders, helping automate repetitive customer and business workflows.',
    technologies: ['n8n', 'AI', 'Webhooks', 'APIs', 'Automation'],
    icon: <FiRepeat className="h-7 w-7" />,
  },
];

const AutomationProjects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="automation" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Automation & AI Solutions</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            n8n-powered assistants and workflows for customer engagement, lead collection,
            API orchestration and business process automation.
          </p>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {automationProjects.map((project, index) => (
            <Animated
              key={project.title}
              variant={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
              delay={0.1 + index * 0.07}
              duration={0.65}
            >
              <motion.article
                whileHover={{ y: -8, scale: 1.015 }}
                className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-gray-950 p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
              >
                <motion.div
                  className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/10"
                  animate={prefersReducedMotion ? undefined : { opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                />
                <div className="relative mb-5 flex items-center gap-4">
                  <motion.div
                    animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
                    className="rounded-lg border border-primary/30 bg-primary/15 p-3 text-primary"
                  >
                    {project.icon}
                  </motion.div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                    <FiZap className="h-3.5 w-3.5 text-primary" />
                    Workflow Automation
                  </span>
                </div>

                <h3 className="relative text-xl font-semibold text-white">{project.title}</h3>
                <p className="relative mt-3 text-gray-300">{project.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-primary">
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationProjects;
