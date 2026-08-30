import { Separator } from './ui/separator';
import { Animated } from './ui/motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Animated variant="fadeInLeft" delay={0.2}>
              <p className="text-gray-300">
                I am a Software Engineer and Mobile App Developer with 4+ years of experience,
                specializing in Flutter and modern application development. I build production-ready
                mobile and web applications and work across React.js, AWS, Docker, Linux and cloud deployment.
              </p>
            </Animated>

            <Animated variant="fadeInLeft" delay={0.4}>
              <p className="text-gray-300">
                Beyond application development, I specialize in workflow automation using n8n and AI-powered
                solutions, including automated WhatsApp and Telegram assistants, customer engagement workflows,
                lead collection and business process automation.
              </p>
            </Animated>

            <Animated variant="fadeInLeft" delay={0.6}>
              <p className="text-gray-300">
                I enjoy combining software engineering, cloud technologies, automation and AI to build
                practical products that solve real-world problems.
              </p>
            </Animated>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Education",
                value: "MCA ( Master of Computer Application",
                subtext: "Maharishi University of Information Technology, 2026",
                delay: 0.3
              },
              {
                title: "Experience",
                value: "4+ Years",
                subtext: "Flutter / Mobile Application Development",
                delay: 0.4
              },
              {
                title: "Projects",
                value: "10+ Completed",
                subtext: "Mobile, Web, Automation and AI Solutions",
                delay: 0.5
              },
            
            ].map((item, index) => (
              <Animated key={index} variant="zoomIn" delay={item.delay}>
                <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.value}</p>
                  <p className="text-gray-500">{item.subtext}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
