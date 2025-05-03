import { useState, useRef } from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { Input } from './ui/input';
import { Animated } from './ui/motion';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      // Note: You would need to sign up for EmailJS and replace these with your actual service ID, template ID, and public key
      const serviceId = 'service_33w2wgc';
      const templateId = 'template_90ta5g9';
      const publicKey = 'NidIPUk0CVZ0saDEZ';

      if (formRef.current) {
        // Send the email using EmailJS
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
      } else {
        // Fallback for demonstration purposes
        console.log('Form submitted:', formData);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      // Show success message
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <Animated variant="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <Separator className="w-20 h-1 bg-primary mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Animated variant="fadeInLeft" delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <FiMail className="h-6 w-6" />,
                    title: "Email",
                    content: <a href="mailto:mohdfaisal7839@gmail.com" className="text-gray-400 hover:text-primary transition-colors">mohdfaisal7839@gmail.com</a>,
                    delay: 0.3
                  },
                  {
                    icon: <FiPhone className="h-6 w-6" />,
                    title: "Phone",
                    content: <p className="text-gray-400">+91 78393 09007</p>,
                    delay: 0.4
                  },
                  {
                    icon: <FiMapPin className="h-6 w-6" />,
                    title: "Location",
                    content: <p className="text-gray-400">Lucknow, India</p>,
                    delay: 0.5
                  }
                ].map((item, index) => (
                  <Animated key={index} variant="fadeInLeft" delay={item.delay}>
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="bg-primary/20 p-3 rounded-full text-primary"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--primary), 0.3)' }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        {item.content}
                      </div>
                    </motion.div>
                  </Animated>
                ))}
              </div>
            </div>
          </Animated>

          <Animated variant="fadeInRight" delay={0.3}>
            <motion.div
              className="bg-gray-800 p-8 rounded-lg"
              whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-green-500/20 border border-green-500/50 text-green-500 p-3 rounded-md flex items-center gap-2"
                  >
                    <FiCheck className="h-5 w-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-red-500/20 border border-red-500/50 text-red-500 p-3 rounded-md"
                  >
                    {submitError}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name <span className="text-red-500">*</span></label>
                  <Input
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email <span className="text-red-500">*</span></label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="bg-gray-700 border-gray-600 text-white"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <FiSend />
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default Contact;
