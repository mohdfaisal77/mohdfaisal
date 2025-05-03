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
                Hello! I'm Mohd Faisal, a passionate Mobile App Developer with expertise in creating
                innovative and user-friendly applications for iOS and Android platforms.
              </p>
            </Animated>

            <Animated variant="fadeInLeft" delay={0.4}>
              <p className="text-gray-300">
                With several years of experience in mobile development, I've worked on a variety of projects
                ranging from e-commerce and social networking to productivity and entertainment applications.
                I'm proficient in React Native, Flutter, Swift, and Kotlin, allowing me to build
                high-performance cross-platform and native applications.
              </p>
            </Animated>

            <Animated variant="fadeInLeft" delay={0.6}>
              <p className="text-gray-300">
                I'm dedicated to creating applications that not only look great but also provide
                exceptional user experiences. My approach combines technical expertise with a deep
                understanding of user needs and business objectives.
              </p>
            </Animated>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Education",
                value: "B.Tech in Computer Science",
                subtext: "University Name, 2018",
                delay: 0.3
              },
              {
                title: "Experience",
                value: "5+ Years",
                subtext: "Mobile App Development",
                delay: 0.4
              },
              {
                title: "Projects",
                value: "25+ Completed",
                subtext: "Mobile Applications",
                delay: 0.5
              },
              {
                title: "Clients",
                value: "15+ Happy",
                subtext: "Worldwide Clients",
                delay: 0.6
              }
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
